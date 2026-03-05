/**
 * Wire Manager - Pin Engine
 * Handles the logic for allocating MCU pins to component signals.
 */

class PinEngine {
    constructor() {
        this.mcu = null;
        this.components = [];
        this.assignments = []; // { compInstanceId, signalName, mcuPinId, warnings: [] }
        this.pinUsage = {};    // mcuPinId -> [ { compInstanceId, signalName, type } ]
    }

    setMCU(mcuData) {
        this.mcu = mcuData;
        this.recalculate();
    }

    addComponent(componentData) {
        const instanceId = componentData.id + '_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        this.components.push({
            instanceId,
            data: componentData
        });
        this.recalculate();
        return instanceId;
    }

    removeComponent(instanceId) {
        this.components = this.components.filter(c => c.instanceId !== instanceId);
        this.recalculate();
    }

    clear() {
        this.components = [];
        this.assignments = [];
        this.pinUsage = {};
    }

    loadState(state, partsLibrary) {
        if (!state || !state.mcuId) return false;

        const mcu = partsLibrary.getMCU(state.mcuId);
        if (!mcu) return false;

        this.clear();
        this.mcu = mcu;

        if (state.components && Array.isArray(state.components)) {
            state.components.forEach(compState => {
                const partDef = partsLibrary.getComponent(compState.id);
                if (partDef) {
                    this.components.push({
                        instanceId: compState.instanceId || (compState.id + '_' + Date.now()),
                        data: partDef
                    });
                }
            });
        }

        this.recalculate();
        return true;
    }

    recalculate() {
        this.assignments = [];
        this.pinUsage = {};

        if (!this.mcu) return;

        // Reset pin usage map
        this.mcu.pins.forEach(p => {
            this.pinUsage[p.id] = [];
        });

        // 1. Group components by protocol to handle shared buses (SPI, I2C)
        const componentsByProtocol = {
            'SPI': [],
            'I2C': [],
            'Other': []
        };

        this.components.forEach(comp => {
            if (comp.data.protocol === 'SPI') componentsByProtocol['SPI'].push(comp);
            else if (comp.data.protocol === 'I2C') componentsByProtocol['I2C'].push(comp);
            else componentsByProtocol['Other'].push(comp);
        });

        // 2. Allocate SPI Buses
        if (componentsByProtocol['SPI'].length > 0) {
            this._allocateSPIBus(componentsByProtocol['SPI']);
        }

        // 3. Allocate I2C Buses
        if (componentsByProtocol['I2C'].length > 0) {
            this._allocateI2CBus(componentsByProtocol['I2C']);
        }

        // 4. Allocate remaining signals (GPIO, INT, Power)
        this.components.forEach(comp => {
            comp.data.signals.forEach(signal => {
                // Skip if already assigned (like bus lines or CS)
                if (this._isAssigned(comp.instanceId, signal.name)) return;

                this._allocateSignal(comp.instanceId, signal);
            });
        });

        // Output an event
        document.dispatchEvent(new CustomEvent('engine-recalculated', {
            detail: { assignments: this.assignments, pinUsage: this.pinUsage }
        }));
    }

    _allocateSPIBus(spiComponents) {
        // Find hardware SPI pins first
        let sckPin = this._findPinByProtocolPrefix('SPI', 'SCK');
        let misoPin = this._findPinByProtocolPrefix('SPI', 'MISO');
        let mosiPin = this._findPinByProtocolPrefix('SPI', 'MOSI');

        // Map common lines to all SPI components that support sharing
        spiComponents.forEach(comp => {
            // Assign Bus Lines
            this._assignValidPin(comp.instanceId, 'SCK', sckPin);
            this._assignValidPin(comp.instanceId, 'MISO', misoPin);
            this._assignValidPin(comp.instanceId, 'MOSI', mosiPin);

            // Assign unique CS (Chip Select)
            // Just need any free GPIO
            let csPin = this._findFirstFreeGPIO();
            this._assignValidPin(comp.instanceId, 'CS', csPin);
        });
    }

    _allocateI2CBus(i2cComponents) {
        let sdaPin = this._findPinByProtocolPrefix('I2C', 'SDA');
        let sclPin = this._findPinByProtocolPrefix('I2C', 'SCL');

        i2cComponents.forEach(comp => {
            this._assignValidPin(comp.instanceId, 'SDA', sdaPin);
            this._assignValidPin(comp.instanceId, 'SCL', sclPin);
        });
    }

    _allocateSignal(instanceId, signal) {
        if (signal.type.startsWith('POWER') || signal.type === 'GND') {
            // Map to power pins
            let pin = this._findPowerPin(signal.type);
            this._assignValidPin(instanceId, signal.name, pin, signal.type);
        } else if (signal.type === 'GPIO_IN' || signal.type === 'GPIO_OUT' || signal.type === 'PWM') {
            let pin = this._findFirstFreeGPIO(signal.type === 'PWM');
            this._assignValidPin(instanceId, signal.name, pin, signal.type);
        }
    }

    _findPinByProtocolPrefix(protocol, signalType) {
        // e.g. looking for 'SPI0_SCK' -> protocol='SPI', signalType='SCK'
        for (let pin of this.mcu.pins) {
            for (let p of pin.protocols) {
                if (p.startsWith(protocol) && p.endsWith(signalType)) {
                    return pin.id;
                }
            }
        }
        // Fallback: search for just 'SPI_SCK' if 'SPI0_SCK' not found
        for (let pin of this.mcu.pins) {
            for (let p of pin.protocols) {
                if (p === `${protocol}_${signalType}`) {
                    return pin.id;
                }
            }
        }
        return null;
    }

    _findFirstFreeGPIO(requirePWM = false) {
        for (let pin of this.mcu.pins) {
            if (pin.protocols.includes('GPIO')) {
                if (requirePWM && !pin.protocols.includes('PWM')) continue;

                // Ensure it's not heavily used (specifically not assigned as a unique line)
                let isFree = true;
                if (this.pinUsage[pin.id]) {
                    this.pinUsage[pin.id].forEach(usage => {
                        // If it's used for something requiring unique pin like CS or INT
                        if (usage.type === 'SPI_CS' || usage.type.startsWith('GPIO') || usage.type === 'PWM') isFree = false;
                    });
                }
                if (isFree) return pin.id;
            }
        }
        return null; // out of pins!
    }

    _findPowerPin(powerType) {
        for (let pin of this.mcu.pins) {
            if (pin.type === 'POWER') {
                if (powerType === 'GND' && pin.protocols.includes('GND')) return pin.id;

                // Strict matching
                if (powerType === 'POWER_3V3' && pin.protocols.includes('POWER_OUT_3V3')) return pin.id;
                if (powerType === 'POWER_5V' && (pin.protocols.includes('POWER_OUT_5V') || pin.protocols.includes('POWER_IN_5V'))) return pin.id;

                // Extension power fallback
                if (powerType === 'POWER_EXT' && pin.protocols.includes('POWER_EXT_IN')) return pin.id;
            }
        }

        // Less strict fallback for 5V if 5V OUT isn't found but 5V IN is
        if (powerType === 'POWER_5V') {
            const p5v = this.mcu.pins.find(p => p.protocols.includes('POWER_IN_5V') || p.id === '5V');
            if (p5v) return p5v.id;
        }

        return null;
    }

    _assignValidPin(instanceId, signalName, mcuPinId, type = '') {
        let warnings = [];

        // Find component
        const comp = this.components.find(c => c.instanceId === instanceId);
        if (!comp) return;

        // Voltage mismatch check
        if (mcuPinId && mcuPinId !== 'UNASSIGNED') {
            const mcuPin = this.mcu.pins.find(p => p.id === mcuPinId);

            // Determine target voltage for this specific connection
            let targetVoltage = comp.data.voltage;
            if (type === 'POWER_5V') targetVoltage = 5.0;
            if (type === 'POWER_3V3') targetVoltage = 3.3;

            // Check if MCU provides this voltage anywhere on its pins
            const mcuHasRail = this.mcu.pins.some(p =>
                p.protocols.includes(`POWER_OUT_${Math.floor(targetVoltage)}V`) ||
                p.protocols.includes(`POWER_IN_${Math.floor(targetVoltage)}V`) ||
                (targetVoltage === 5.0 && (p.id === '5V' || p.label.includes('5V'))) ||
                (targetVoltage === 3.3 && (p.id === '3V3' || p.label.includes('3V3')))
            );

            // User Preference: Silence mismatch if the rail physically exists on the board
            if (targetVoltage !== this.mcu.voltage && type !== 'POWER_EXT' && !mcuHasRail) {
                warnings.push(`Voltage mismatch: Part needs ${targetVoltage}V, but MCU lacks a ${targetVoltage}V rail`);
            }
        }

        let mappedType = type;
        if (!mappedType) {
            const sigDef = comp.data.signals.find(s => s.name === signalName);
            if (sigDef) mappedType = sigDef.type;
        }

        if (mcuPinId) {
            this.assignments.push({
                compInstanceId: instanceId,
                signalName: signalName,
                mcuPinId: mcuPinId,
                warnings: warnings
            });

            if (!this.pinUsage[mcuPinId]) this.pinUsage[mcuPinId] = [];
            this.pinUsage[mcuPinId].push({
                compInstanceId: instanceId,
                signalName: signalName,
                type: mappedType
            });
        } else {
            this.assignments.push({
                compInstanceId: instanceId,
                signalName: signalName,
                mcuPinId: 'UNASSIGNED',
                warnings: ['No available pins for this signal']
            });
        }
    }

    _isAssigned(instanceId, signalName) {
        return this.assignments.some(a => a.compInstanceId === instanceId && a.signalName === signalName);
    }

    getAssignments() {
        return this.assignments;
    }

    getValidationStatus() {
        let errors = 0;
        let warnings = 0;

        this.assignments.forEach(a => {
            if (a.mcuPinId === 'UNASSIGNED') errors++;
            if (a.warnings && a.warnings.length > 0) warnings += a.warnings.length;
        });

        if (errors > 0) return { ok: false, level: 'error', message: `${errors} unassigned signals` };
        if (warnings > 0) return { ok: true, level: 'warn', message: `${warnings} warnings found (voltage/level mismatch)` };

        return { ok: true, level: 'ok', message: 'All connections valid' };
    }
}

window.PinEngine = PinEngine;

