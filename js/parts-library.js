/**
 * Wire Manager - Parts Library
 * A curated database of microcontrollers and components.
 */

const PartsLibrary = {
    // ==========================================
    // MICROCONTROLLERS
    // ==========================================
    mcus: [
        {
            id: 'xiao_rp2350',
            name: 'Seeed Studio XIAO RP2350',
            category: 'Seeed XIAO',
            voltage: 3.3,
            maxCurrentRailmA: 400,
            pins: [
                { id: 'D0', label: 'D0 / A0', type: 'GPIO', protocols: ['GPIO', 'Analog', 'UART0_TX', 'I2C0_SDA'] },
                { id: 'D1', label: 'D1 / A1', type: 'GPIO', protocols: ['GPIO', 'Analog', 'UART0_RX', 'I2C0_SCL'] },
                { id: 'D2', label: 'D2 / A2', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'D3', label: 'D3 / A3', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'D4', label: 'D4 / SDA', type: 'GPIO', protocols: ['GPIO', 'I2C1_SDA'] },
                { id: 'D5', label: 'D5 / SCL', type: 'GPIO', protocols: ['GPIO', 'I2C1_SCL'] },
                { id: 'D6', label: 'D6 / TX', type: 'GPIO', protocols: ['GPIO', 'UART1_TX'] },
                { id: 'D7', label: 'D7 / RX', type: 'GPIO', protocols: ['GPIO', 'UART1_RX'] },
                { id: 'D8', label: 'D8 / SCK', type: 'GPIO', protocols: ['GPIO', 'SPI0_SCK'] },
                { id: 'D9', label: 'D9 / MISO', type: 'GPIO', protocols: ['GPIO', 'SPI0_MISO'] },
                { id: 'D10', label: 'D10 / MOSI', type: 'GPIO', protocols: ['GPIO', 'SPI0_MOSI'] },
                { id: '3V3', label: '3V3 (OUT)', type: 'POWER', protocols: ['POWER_OUT_3V3'] },
                { id: 'GND', label: 'GND', type: 'POWER', protocols: ['GND'] },
                { id: '5V', label: '5V (IN/OUT)', type: 'POWER', protocols: ['POWER_OUT_5V', 'POWER_IN_5V'] }
            ]
        },
        {
            id: 'xiao_rp2040',
            name: 'Seeed Studio XIAO RP2040',
            category: 'Seeed XIAO',
            voltage: 3.3,
            maxCurrentRailmA: 400,
            pins: [
                { id: 'D0', label: 'D0 / A0', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'D1', label: 'D1 / A1', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'D2', label: 'D2 / A2', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'D3', label: 'D3 / A3', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'D4', label: 'D4 / SDA', type: 'GPIO', protocols: ['GPIO', 'I2C_SDA'] },
                { id: 'D5', label: 'D5 / SCL', type: 'GPIO', protocols: ['GPIO', 'I2C_SCL'] },
                { id: 'D6', label: 'D6 / TX', type: 'GPIO', protocols: ['GPIO', 'UART_TX'] },
                { id: 'D7', label: 'D7 / RX', type: 'GPIO', protocols: ['GPIO', 'UART_RX'] },
                { id: 'D8', label: 'D8 / SCK', type: 'GPIO', protocols: ['GPIO', 'SPI_SCK'] },
                { id: 'D9', label: 'D9 / MISO', type: 'GPIO', protocols: ['GPIO', 'SPI_MISO'] },
                { id: 'D10', label: 'D10 / MOSI', type: 'GPIO', protocols: ['GPIO', 'SPI_MOSI'] },
                { id: '3V3', label: '3V3 (OUT)', type: 'POWER', protocols: ['POWER_OUT_3V3'] },
                { id: 'GND', label: 'GND', type: 'POWER', protocols: ['GND'] },
                { id: '5V', label: '5V (IN/OUT)', type: 'POWER', protocols: ['POWER_OUT_5V', 'POWER_IN_5V'] }
            ]
        },
        {
            id: 'arduino_uno',
            name: 'Arduino Uno R3',
            category: 'Arduino',
            voltage: 5.0,
            maxCurrentRailmA: 200,
            pins: [
                { id: '0', label: 'D0 / RX', type: 'GPIO', protocols: ['GPIO', 'UART_RX'] },
                { id: '1', label: 'D1 / TX', type: 'GPIO', protocols: ['GPIO', 'UART_TX'] },
                { id: '2', label: 'D2', type: 'GPIO', protocols: ['GPIO', 'INT0'] },
                { id: '3', label: 'D3 ~', type: 'GPIO', protocols: ['GPIO', 'PWM', 'INT1'] },
                { id: '4', label: 'D4', type: 'GPIO', protocols: ['GPIO'] },
                { id: '5', label: 'D5 ~', type: 'GPIO', protocols: ['GPIO', 'PWM'] },
                { id: '6', label: 'D6 ~', type: 'GPIO', protocols: ['GPIO', 'PWM'] },
                { id: '7', label: 'D7', type: 'GPIO', protocols: ['GPIO'] },
                { id: '8', label: 'D8', type: 'GPIO', protocols: ['GPIO'] },
                { id: '9', label: 'D9 ~', type: 'GPIO', protocols: ['GPIO', 'PWM'] },
                { id: '10', label: 'D10 ~', type: 'GPIO', protocols: ['GPIO', 'PWM', 'SPI_CS'] },
                { id: '11', label: 'D11 ~', type: 'GPIO', protocols: ['GPIO', 'PWM', 'SPI_MOSI'] },
                { id: '12', label: 'D12', type: 'GPIO', protocols: ['GPIO', 'SPI_MISO'] },
                { id: '13', label: 'D13', type: 'GPIO', protocols: ['GPIO', 'SPI_SCK'] },
                { id: 'A0', label: 'A0', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'A1', label: 'A1', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'A2', label: 'A2', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'A3', label: 'A3', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'A4', label: 'A4 / SDA', type: 'GPIO', protocols: ['GPIO', 'Analog', 'I2C_SDA'] },
                { id: 'A5', label: 'A5 / SCL', type: 'GPIO', protocols: ['GPIO', 'Analog', 'I2C_SCL'] },
                { id: '5V', label: '5V (OUT)', type: 'POWER', protocols: ['POWER_OUT_5V'] },
                { id: '3.3V', label: '3.3V (OUT)', type: 'POWER', protocols: ['POWER_OUT_3V3'] },
                { id: 'GND', label: 'GND', type: 'POWER', protocols: ['GND'] },
                { id: 'VIN', label: 'VIN (EXT IN)', type: 'POWER', protocols: ['POWER_EXT_IN'] }
            ]
        },
        {
            id: 'arduino_nano',
            name: 'Arduino Nano',
            category: 'Arduino',
            voltage: 5.0,
            maxCurrentRailmA: 200,
            pins: [
                { id: 'D0', label: 'D0 / RX', type: 'GPIO', protocols: ['GPIO', 'UART_RX'] },
                { id: 'D1', label: 'D1 / TX', type: 'GPIO', protocols: ['GPIO', 'UART_TX'] },
                { id: 'D2', label: 'D2', type: 'GPIO', protocols: ['GPIO', 'INT0'] },
                { id: 'D3', label: 'D3', type: 'GPIO', protocols: ['GPIO', 'PWM', 'INT1'] },
                { id: 'D4', label: 'D4', type: 'GPIO', protocols: ['GPIO'] },
                { id: 'D5', label: 'D5', type: 'GPIO', protocols: ['GPIO', 'PWM'] },
                { id: 'D6', label: 'D6', type: 'GPIO', protocols: ['GPIO', 'PWM'] },
                { id: 'D7', label: 'D7', type: 'GPIO', protocols: ['GPIO'] },
                { id: 'D8', label: 'D8', type: 'GPIO', protocols: ['GPIO'] },
                { id: 'D9', label: 'D9', type: 'GPIO', protocols: ['GPIO', 'PWM'] },
                { id: 'D10', label: 'D10', type: 'GPIO', protocols: ['GPIO', 'PWM', 'SPI_CS'] },
                { id: 'D11', label: 'D11', type: 'GPIO', protocols: ['GPIO', 'PWM', 'SPI_MOSI'] },
                { id: 'D12', label: 'D12', type: 'GPIO', protocols: ['GPIO', 'SPI_MISO'] },
                { id: 'D13', label: 'D13', type: 'GPIO', protocols: ['GPIO', 'SPI_SCK'] },
                { id: 'A0', label: 'A0', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'A1', label: 'A1', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'A2', label: 'A2', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'A3', label: 'A3', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'A4', label: 'A4', type: 'GPIO', protocols: ['GPIO', 'I2C_SDA', 'Analog'] },
                { id: 'A5', label: 'A5', type: 'GPIO', protocols: ['GPIO', 'I2C_SCL', 'Analog'] },
                { id: 'A6', label: 'A6', type: 'GPIO', protocols: ['Analog'] },
                { id: 'A7', label: 'A7', type: 'GPIO', protocols: ['Analog'] },
                { id: '5V', label: '5V (OUT)', type: 'POWER', protocols: ['POWER_OUT_5V'] },
                { id: '3V3', label: '3V3 (OUT)', type: 'POWER', protocols: ['POWER_OUT_3V3'] },
                { id: 'GND', label: 'GND', type: 'POWER', protocols: ['GND'] }
            ]
        },
        {
            id: 'esp32_devkitc',
            name: 'ESP32 DevKitC V4',
            category: 'Espressif',
            voltage: 3.3,
            maxCurrentRailmA: 600,
            pins: [
                { id: 'G2', label: 'GPIO 2', type: 'GPIO', protocols: ['GPIO', 'PWM'] },
                { id: 'G4', label: 'GPIO 4', type: 'GPIO', protocols: ['GPIO', 'Analog'] },
                { id: 'G21', label: 'GPIO 21', type: 'GPIO', protocols: ['GPIO', 'I2C_SDA'] },
                { id: 'G22', label: 'GPIO 22', type: 'GPIO', protocols: ['GPIO', 'I2C_SCL'] },
                { id: 'G19', label: 'GPIO 19', type: 'GPIO', protocols: ['GPIO', 'SPI_MISO'] },
                { id: 'G23', label: 'GPIO 23', type: 'GPIO', protocols: ['GPIO', 'SPI_MOSI'] },
                { id: 'G18', label: 'GPIO 18', type: 'GPIO', protocols: ['GPIO', 'SPI_SCK'] },
                { id: 'G5', label: 'GPIO 5', type: 'GPIO', protocols: ['GPIO', 'SPI_CS'] },
                { id: 'G16', label: 'GPIO 16', type: 'GPIO', protocols: ['GPIO', 'UART2_RX'] },
                { id: 'G17', label: 'GPIO 17', type: 'GPIO', protocols: ['GPIO', 'UART2_TX'] },
                { id: '3V3', label: '3V3 (OUT)', type: 'POWER', protocols: ['POWER_OUT_3V3'] },
                { id: 'GND', label: 'GND', type: 'POWER', protocols: ['GND'] },
                { id: '5V', label: '5V (IN/OUT)', type: 'POWER', protocols: ['POWER_OUT_5V', 'POWER_IN_5V'] }
            ]
        }
    ],

    // ==========================================
    // COMPONENTS
    // ==========================================
    components: [
        {
            id: 'amt2030',
            name: 'AMT2030 Encoder',
            category: 'Encoders',
            protocol: 'SPI',
            voltage: 5.0,
            currentmA: 20,
            signals: [
                { name: 'CS', type: 'SPI_CS', requireUnique: true },
                { name: 'SCK', type: 'SPI_SCK', requireUnique: false },
                { name: 'MISO', type: 'SPI_MISO', requireUnique: false },
                { name: 'MOSI', type: 'SPI_MOSI', requireUnique: false },
                { name: 'VCC', type: 'POWER_5V', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false }
            ],
            icon: 'ENC'
        },
        {
            id: 'l298n',
            name: 'L298N Dual H-Bridge',
            category: 'Motor Drivers',
            protocol: 'GPIO',
            voltage: 5.0,
            currentmA: 36,
            signals: [
                { name: 'ENA', type: 'PWM', requireUnique: true },
                { name: 'IN1', type: 'GPIO_OUT', requireUnique: true },
                { name: 'IN2', type: 'GPIO_OUT', requireUnique: true },
                { name: 'IN3', type: 'GPIO_OUT', requireUnique: true },
                { name: 'IN4', type: 'GPIO_OUT', requireUnique: true },
                { name: 'ENB', type: 'PWM', requireUnique: true },
                { name: 'VCC', type: 'POWER_5V', requireUnique: false },
                { name: 'VMS', type: 'POWER_EXT', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false }
            ],
            icon: 'DRV'
        },
        {
            id: 'drv8825',
            name: 'DRV8825 Stepper Driver',
            category: 'Motor Drivers',
            protocol: 'GPIO',
            voltage: 3.3,
            currentmA: 5,
            signals: [
                { name: 'STEP', type: 'GPIO_OUT', requireUnique: true },
                { name: 'DIR', type: 'GPIO_OUT', requireUnique: true },
                { name: 'ENABLE', type: 'GPIO_OUT', requireUnique: true },
                { name: 'VMOT', type: 'POWER_EXT', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false },
                { name: 'VDD', type: 'POWER_3V3', requireUnique: false }
            ],
            icon: 'DRV'
        },
        {
            id: 'tmc2209',
            name: 'TMC2209 Stepper Driver',
            category: 'Motor Drivers',
            protocol: 'GPIO',
            voltage: 3.3,
            currentmA: 1,
            signals: [
                { name: 'STEP', type: 'GPIO_OUT', requireUnique: true },
                { name: 'DIR', type: 'GPIO_OUT', requireUnique: true },
                { name: 'EN', type: 'GPIO_OUT', requireUnique: true },
                { name: 'PDN_UART', type: 'GPIO', requireUnique: false },
                { name: 'VCC_IO', type: 'POWER_3V3', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false }
            ],
            icon: 'DRV'
        },
        {
            id: 'servo_sg90',
            name: 'SG90 Micro Servo',
            category: 'Motors',
            protocol: 'PWM',
            voltage: 5.0,
            currentmA: 100,
            signals: [
                { name: 'PWM', type: 'PWM', requireUnique: true },
                { name: '5V', type: 'POWER_5V', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false }
            ],
            icon: 'SRV'
        },
        {
            id: 'dc_motor',
            name: 'Simple DC Motor',
            category: 'Motors',
            protocol: 'Analog',
            voltage: 12.0,
            currentmA: 500,
            signals: [
                { name: 'M+', type: 'POWER_EXT', requireUnique: false },
                { name: 'M-', type: 'POWER_EXT', requireUnique: false }
            ],
            icon: 'MTR'
        },
        {
            id: 'mcp2515',
            name: 'MCP2515 CAN',
            category: 'Communication',
            protocol: 'SPI',
            voltage: 5.0,
            currentmA: 50,
            signals: [
                { name: 'CS', type: 'SPI_CS', requireUnique: true },
                { name: 'SCK', type: 'SPI_SCK', requireUnique: false },
                { name: 'SO', type: 'SPI_MISO', requireUnique: false },
                { name: 'SI', type: 'SPI_MOSI', requireUnique: false },
                { name: 'VCC', type: 'POWER_5V', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false }
            ],
            icon: 'BUS'
        },
        {
            id: 'mpu6050',
            name: 'MPU6050 IMU',
            category: 'Sensors',
            protocol: 'I2C',
            voltage: 3.3,
            currentmA: 5,
            signals: [
                { name: 'SDA', type: 'I2C_SDA', requireUnique: false },
                { name: 'SCL', type: 'I2C_SCL', requireUnique: false },
                { name: 'VCC', type: 'POWER_3V3', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false }
            ],
            icon: 'IMU'
        },
        {
            id: 'bno055',
            name: 'BNO055 Absolute IMU',
            category: 'Sensors',
            protocol: 'I2C',
            voltage: 3.3,
            currentmA: 12,
            signals: [
                { name: 'SDA', type: 'I2C_SDA', requireUnique: false },
                { name: 'SCL', type: 'I2C_SCL', requireUnique: false },
                { name: 'VCC', type: 'POWER_3V3', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false },
                { name: 'RST', type: 'GPIO_OUT', requireUnique: true }
            ],
            icon: 'IMU'
        },
        {
            id: 'vl53l1x',
            name: 'VL53L1X ToF Sensor',
            category: 'Sensors',
            protocol: 'I2C',
            voltage: 3.3,
            currentmA: 20,
            signals: [
                { name: 'SDA', type: 'I2C_SDA', requireUnique: false },
                { name: 'SCL', type: 'I2C_SCL', requireUnique: false },
                { name: 'VCC', type: 'POWER_3V3', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false },
                { name: 'XSHUT', type: 'GPIO_OUT', requireUnique: true }
            ],
            icon: 'TOF'
        },
        {
            id: 'hc_sr04',
            name: 'HC-SR04 Ultrasonic',
            category: 'Sensors',
            protocol: 'GPIO',
            voltage: 5.0,
            currentmA: 15,
            signals: [
                { name: 'TRIG', type: 'GPIO_OUT', requireUnique: true },
                { name: 'ECHO', type: 'GPIO_IN', requireUnique: true },
                { name: 'VCC', type: 'POWER_5V', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false }
            ],
            icon: 'SON'
        },
        {
            id: 'bmp280',
            name: 'BMP280 Barometer',
            category: 'Sensors',
            protocol: 'I2C',
            voltage: 3.3,
            currentmA: 1,
            signals: [
                { name: 'SDA', type: 'I2C_SDA', requireUnique: false },
                { name: 'SCL', type: 'I2C_SCL', requireUnique: false },
                { name: 'VCC', type: 'POWER_3V3', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false }
            ],
            icon: 'ENV'
        },
        {
            id: 'ssd1306',
            name: 'SSD1306 OLED (128x64)',
            category: 'Display',
            protocol: 'I2C',
            voltage: 3.3,
            currentmA: 20,
            signals: [
                { name: 'SDA', type: 'I2C_SDA', requireUnique: false },
                { name: 'SCL', type: 'I2C_SCL', requireUnique: false },
                { name: 'VDD', type: 'POWER_3V3', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false }
            ],
            icon: 'LCD'
        },
        {
            id: 'pca9685',
            name: 'PCA9685 16-Ch PWM',
            category: 'Logic',
            protocol: 'I2C',
            voltage: 3.3,
            currentmA: 10,
            signals: [
                { name: 'SDA', type: 'I2C_SDA', requireUnique: false },
                { name: 'SCL', type: 'I2C_SCL', requireUnique: false },
                { name: 'VCC', type: 'POWER_3V3', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false },
                { name: 'OE', type: 'GPIO_OUT', requireUnique: true }
            ],
            icon: 'PWM'
        },
        {
            id: 'level_shifter',
            name: '4-Ch Level Shifter',
            category: 'Logic',
            protocol: 'GPIO',
            voltage: 3.3,
            currentmA: 1,
            signals: [
                { name: 'LV', type: 'POWER_3V3', requireUnique: false },
                { name: 'HV', type: 'POWER_5V', requireUnique: false },
                { name: 'GND', type: 'GND', requireUnique: false },
                { name: 'A1 (LV)', type: 'GPIO', requireUnique: true },
                { name: 'B1 (HV)', type: 'GPIO', requireUnique: true },
                { name: 'A2 (LV)', type: 'GPIO', requireUnique: true },
                { name: 'B2 (HV)', type: 'GPIO', requireUnique: true }
            ],
            icon: 'LVL'
        }
    ],

    // Methods
    getMCU(id) {
        return this.mcus.find(m => m.id === id);
    },

    getComponent(id) {
        return this.components.find(c => c.id === id);
    },

    getAllComponents() {
        return this.components;
    },

    getAllMCUs() {
        return this.mcus;
    },

    // --- Persistence ---
    saveToStorage() {
        // Collect custom parts (ones not in the original baked-in list)
        // For simplicity, we'll just save the entire current component list 
        // but mark which ones are custom if needed. 
        // Here we'll just filter out the core parts by ID or just save everything.
        const customParts = this.components.filter(c => c.id.startsWith('extracted_') || c.category === 'Imported');
        localStorage.setItem('wm_custom_parts', JSON.stringify(customParts));
    },

    loadFromStorage() {
        const stored = localStorage.getItem('wm_custom_parts');
        if (stored) {
            const customParts = JSON.parse(stored);
            customParts.forEach(part => {
                if (!this.getComponent(part.id)) {
                    this.components.push(part);
                }
            });
        }
    },

    clearCustomParts() {
        localStorage.removeItem('wm_custom_parts');
        location.reload(); // Quickest way to reset the in-memory list
    }
};

window.PartsLibrary = PartsLibrary;
