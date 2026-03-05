// components.js — COTS Robotics Component Database
// Each component defines pin requirements as an array of { role, capability, notes }
// capability: the pin capability needed (e.g. "SPI_MOSI", "PWM", "GPIO", "INT", "ADC")
// shared: true means this pin can be shared with other components needing the same bus line

const COMPONENTS = {

    // ═══════════════════════════════════════════════════
    //  SPI DEVICES
    // ═══════════════════════════════════════════════════

    "MPU-6500 IMU (SPI)": {
        category: "IMU / Sensor",
        interface: "SPI",
        voltage: "3.3V",
        description: "6-axis IMU (accelerometer + gyroscope)",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
            { role: "INT", capability: "INT", shared: false, optional: true },
        ]
    },

    "ICM-20948 IMU (SPI)": {
        category: "IMU / Sensor",
        interface: "SPI",
        voltage: "3.3V",
        description: "9-axis IMU (accel + gyro + magnetometer)",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
            { role: "INT", capability: "INT", shared: false, optional: true },
        ]
    },

    "BNO085 IMU (SPI)": {
        category: "IMU / Sensor",
        interface: "SPI",
        voltage: "3.3V",
        description: "9-axis IMU with sensor fusion",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
            { role: "INT", capability: "INT", shared: false, optional: true },
            { role: "RST", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "MCP2515 CAN Controller": {
        category: "Communication",
        interface: "SPI",
        voltage: "5V",
        description: "SPI-to-CAN bus controller",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
            { role: "INT", capability: "INT", shared: false, optional: true },
        ]
    },

    "MCP3008 ADC (SPI)": {
        category: "ADC / DAC",
        interface: "SPI",
        voltage: "3.3-5V",
        description: "8-channel 10-bit SPI ADC",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
        ]
    },

    "MCP4922 DAC (SPI)": {
        category: "ADC / DAC",
        interface: "SPI",
        voltage: "2.7-5.5V",
        description: "Dual 12-bit SPI DAC",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
            { role: "LDAC", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "TMC2130 Stepper Driver (SPI)": {
        category: "Motor Driver",
        interface: "SPI",
        voltage: "3.3-5V",
        description: "Silent stepper motor driver with SPI config",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
            { role: "STEP", capability: "GPIO", shared: false },
            { role: "DIR", capability: "GPIO", shared: false },
            { role: "EN", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "TMC5160 Stepper Driver (SPI)": {
        category: "Motor Driver",
        interface: "SPI",
        voltage: "3.3-5V",
        description: "High-power silent stepper driver with SPI",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
            { role: "STEP", capability: "GPIO", shared: false },
            { role: "DIR", capability: "GPIO", shared: false },
            { role: "EN", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "SD Card Module (SPI)": {
        category: "Storage",
        interface: "SPI",
        voltage: "3.3-5V",
        description: "MicroSD card reader/writer",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
        ]
    },

    "SPI OLED (SSD1306)": {
        category: "Display",
        interface: "SPI",
        voltage: "3.3-5V",
        description: "0.96\" OLED display (SPI mode)",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
            { role: "DC", capability: "GPIO", shared: false },
            { role: "RST", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "AMT2030 Encoder (SPI)": {
        category: "Encoder",
        interface: "SPI",
        voltage: "3.3-5V",
        description: "Absolute position encoder (SPI)",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
        ]
    },

    "AS5048A Encoder (SPI)": {
        category: "Encoder",
        interface: "SPI",
        voltage: "3.3-5V",
        description: "14-bit magnetic rotary encoder",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CS", capability: "GPIO", shared: false },
        ]
    },

    // ═══════════════════════════════════════════════════
    //  I2C DEVICES
    // ═══════════════════════════════════════════════════

    "MPU-6050 IMU (I2C)": {
        category: "IMU / Sensor",
        interface: "I2C",
        voltage: "3.3-5V",
        description: "6-axis IMU (I2C interface)",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
            { role: "INT", capability: "INT", shared: false, optional: true },
        ]
    },

    "BNO055 IMU (I2C)": {
        category: "IMU / Sensor",
        interface: "I2C",
        voltage: "3.3-5V",
        description: "9-axis absolute orientation IMU",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
            { role: "INT", capability: "INT", shared: false, optional: true },
            { role: "RST", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "VL53L0X ToF Sensor": {
        category: "Distance Sensor",
        interface: "I2C",
        voltage: "3.3-5V",
        description: "Time-of-Flight laser distance sensor (up to 2m)",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
            { role: "XSHUT", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "VL53L1X ToF Sensor": {
        category: "Distance Sensor",
        interface: "I2C",
        voltage: "3.3-5V",
        description: "ToF laser distance sensor (up to 4m)",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
            { role: "XSHUT", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "I2C OLED (SSD1306)": {
        category: "Display",
        interface: "I2C",
        voltage: "3.3-5V",
        description: "0.96\" OLED display (I2C mode)",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
        ]
    },

    "PCA9685 Servo Driver": {
        category: "Servo / PWM",
        interface: "I2C",
        voltage: "3.3-5V",
        description: "16-channel PWM/Servo driver",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
            { role: "OE", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "INA219 Current Sensor": {
        category: "Power Monitoring",
        interface: "I2C",
        voltage: "3.3-5V",
        description: "High-side current/power monitor",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
        ]
    },

    "ADS1115 ADC (I2C)": {
        category: "ADC / DAC",
        interface: "I2C",
        voltage: "2-5.5V",
        description: "16-bit 4-channel ADC",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
            { role: "ALERT", capability: "INT", shared: false, optional: true },
        ]
    },

    "LIS3MDL Magnetometer": {
        category: "IMU / Sensor",
        interface: "I2C",
        voltage: "1.9-3.6V",
        description: "3-axis magnetometer",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
            { role: "INT", capability: "INT", shared: false, optional: true },
        ]
    },

    "BME280 Env Sensor (I2C)": {
        category: "Environmental Sensor",
        interface: "I2C",
        voltage: "1.8-3.6V",
        description: "Temp, humidity, barometric pressure",
        pins: [
            { role: "SDA", capability: "I2C_SDA", shared: true },
            { role: "SCL", capability: "I2C_SCL", shared: true },
        ]
    },

    // ═══════════════════════════════════════════════════
    //  ENCODERS (Quadrature)
    // ═══════════════════════════════════════════════════

    "Quadrature Encoder": {
        category: "Encoder",
        interface: "Digital",
        voltage: "3.3-5V",
        description: "Incremental quadrature encoder (A/B channels)",
        pins: [
            { role: "CH_A", capability: "INT", shared: false },
            { role: "CH_B", capability: "INT", shared: false },
            { role: "INDEX", capability: "INT", shared: false, optional: true },
        ]
    },

    // ═══════════════════════════════════════════════════
    //  MOTOR DRIVERS
    // ═══════════════════════════════════════════════════

    "L298N Dual H-Bridge": {
        category: "Motor Driver",
        interface: "Digital/PWM",
        voltage: "5V",
        description: "Dual H-Bridge for 2 DC motors",
        pins: [
            { role: "ENA (PWM)", capability: "PWM", shared: false },
            { role: "IN1", capability: "GPIO", shared: false },
            { role: "IN2", capability: "GPIO", shared: false },
            { role: "ENB (PWM)", capability: "PWM", shared: false },
            { role: "IN3", capability: "GPIO", shared: false },
            { role: "IN4", capability: "GPIO", shared: false },
        ]
    },

    "TB6612FNG Dual Driver": {
        category: "Motor Driver",
        interface: "Digital/PWM",
        voltage: "2.7-5.5V",
        description: "Dual DC motor driver (better than L298N)",
        pins: [
            { role: "PWMA", capability: "PWM", shared: false },
            { role: "AIN1", capability: "GPIO", shared: false },
            { role: "AIN2", capability: "GPIO", shared: false },
            { role: "PWMB", capability: "PWM", shared: false },
            { role: "BIN1", capability: "GPIO", shared: false },
            { role: "BIN2", capability: "GPIO", shared: false },
            { role: "STBY", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "A4988 Stepper Driver": {
        category: "Motor Driver",
        interface: "Digital",
        voltage: "3.3-5V",
        description: "Stepper motor driver (up to 2A)",
        pins: [
            { role: "STEP", capability: "GPIO", shared: false },
            { role: "DIR", capability: "GPIO", shared: false },
            { role: "EN", capability: "GPIO", shared: false, optional: true },
            { role: "MS1", capability: "GPIO", shared: false, optional: true },
            { role: "MS2", capability: "GPIO", shared: false, optional: true },
            { role: "MS3", capability: "GPIO", shared: false, optional: true },
        ]
    },

    "DRV8825 Stepper Driver": {
        category: "Motor Driver",
        interface: "Digital",
        voltage: "3.3-5V",
        description: "Stepper motor driver (up to 2.5A)",
        pins: [
            { role: "STEP", capability: "GPIO", shared: false },
            { role: "DIR", capability: "GPIO", shared: false },
            { role: "EN", capability: "GPIO", shared: false, optional: true },
            { role: "FAULT", capability: "INT", shared: false, optional: true },
        ]
    },

    "TMC2209 Stepper (UART)": {
        category: "Motor Driver",
        interface: "UART",
        voltage: "3.3-5V",
        description: "Silent stepper driver with UART config",
        pins: [
            { role: "STEP", capability: "GPIO", shared: false },
            { role: "DIR", capability: "GPIO", shared: false },
            { role: "EN", capability: "GPIO", shared: false, optional: true },
            { role: "TX", capability: "UART_TX", shared: false },
            { role: "RX", capability: "UART_RX", shared: false },
        ]
    },

    "BTS7960 Motor Driver": {
        category: "Motor Driver",
        interface: "Digital/PWM",
        voltage: "5V",
        description: "43A high-current DC motor driver",
        pins: [
            { role: "RPWM", capability: "PWM", shared: false },
            { role: "LPWM", capability: "PWM", shared: false },
            { role: "R_EN", capability: "GPIO", shared: false },
            { role: "L_EN", capability: "GPIO", shared: false },
        ]
    },

    // ═══════════════════════════════════════════════════
    //  SERVOS & ESC
    // ═══════════════════════════════════════════════════

    "Standard Servo": {
        category: "Servo / PWM",
        interface: "PWM",
        voltage: "4.8-6V",
        description: "Standard hobby servo (signal wire only)",
        pins: [
            { role: "SIGNAL", capability: "PWM", shared: false },
        ]
    },

    "ESC (Electronic Speed Controller)": {
        category: "Motor Driver",
        interface: "PWM",
        voltage: "5V signal",
        description: "Brushless motor ESC (PPM/PWM signal)",
        pins: [
            { role: "SIGNAL", capability: "PWM", shared: false },
        ]
    },

    "Dynamixel Servo (TTL)": {
        category: "Servo / PWM",
        interface: "UART",
        voltage: "5V",
        description: "Smart servo with serial TTL interface",
        pins: [
            { role: "DATA", capability: "UART_TX", shared: false },
        ]
    },

    // ═══════════════════════════════════════════════════
    //  DISTANCE / PROXIMITY
    // ═══════════════════════════════════════════════════

    "HC-SR04 Ultrasonic": {
        category: "Distance Sensor",
        interface: "Digital",
        voltage: "5V",
        description: "Ultrasonic distance sensor (2-400cm)",
        pins: [
            { role: "TRIG", capability: "GPIO", shared: false },
            { role: "ECHO", capability: "GPIO", shared: false },
        ]
    },

    "Sharp IR Distance (GP2Y0A21)": {
        category: "Distance Sensor",
        interface: "Analog",
        voltage: "4.5-5.5V",
        description: "Analog IR distance sensor (10-80cm)",
        pins: [
            { role: "OUT", capability: "ADC", shared: false },
        ]
    },

    // ═══════════════════════════════════════════════════
    //  COMMUNICATION MODULES
    // ═══════════════════════════════════════════════════

    "NEO-6M GPS": {
        category: "Communication",
        interface: "UART",
        voltage: "3.3-5V",
        description: "UART GPS receiver module",
        pins: [
            { role: "TX", capability: "UART_RX", shared: false },
            { role: "RX", capability: "UART_TX", shared: false },
        ]
    },

    "HC-05 Bluetooth": {
        category: "Communication",
        interface: "UART",
        voltage: "3.3V",
        description: "Classic Bluetooth serial module",
        pins: [
            { role: "TX", capability: "UART_RX", shared: false },
            { role: "RX", capability: "UART_TX", shared: false },
        ]
    },

    "TFmini LiDAR": {
        category: "Distance Sensor",
        interface: "UART",
        voltage: "5V",
        description: "1D LiDAR distance sensor (12m range)",
        pins: [
            { role: "TX", capability: "UART_RX", shared: false },
            { role: "RX", capability: "UART_TX", shared: false },
        ]
    },

    "nRF24L01 Radio (SPI)": {
        category: "Communication",
        interface: "SPI",
        voltage: "3.3V",
        description: "2.4GHz wireless transceiver",
        pins: [
            { role: "MOSI", capability: "SPI_MOSI", shared: true },
            { role: "MISO", capability: "SPI_MISO", shared: true },
            { role: "SCK", capability: "SPI_SCK", shared: true },
            { role: "CSN", capability: "GPIO", shared: false },
            { role: "CE", capability: "GPIO", shared: false },
            { role: "IRQ", capability: "INT", shared: false, optional: true },
        ]
    },

    // ═══════════════════════════════════════════════════
    //  MISC
    // ═══════════════════════════════════════════════════

    "Relay Module (1ch)": {
        category: "Actuator",
        interface: "Digital",
        voltage: "5V",
        description: "Single-channel relay",
        pins: [
            { role: "IN", capability: "GPIO", shared: false },
        ]
    },

    "NeoPixel/WS2812B Strip": {
        category: "LED",
        interface: "Digital",
        voltage: "5V",
        description: "Addressable RGB LED strip",
        pins: [
            { role: "DIN", capability: "GPIO", shared: false },
        ]
    },

    "Limit Switch": {
        category: "Input",
        interface: "Digital",
        voltage: "3.3-5V",
        description: "Mechanical limit switch / endstop",
        pins: [
            { role: "SIG", capability: "GPIO", shared: false },
        ]
    },

    "IR Receiver (TSOP)": {
        category: "Input",
        interface: "Digital",
        voltage: "3.3-5V",
        description: "Infrared remote receiver",
        pins: [
            { role: "OUT", capability: "GPIO", shared: false },
        ]
    },

    "Potentiometer": {
        category: "Input",
        interface: "Analog",
        voltage: "3.3-5V",
        description: "Analog rotary potentiometer",
        pins: [
            { role: "WIPER", capability: "ADC", shared: false },
        ]
    },

    "Force-Sensitive Resistor (FSR)": {
        category: "Input",
        interface: "Analog",
        voltage: "3.3-5V",
        description: "Pressure / force sensor (analog)",
        pins: [
            { role: "OUT", capability: "ADC", shared: false },
        ]
    },
};

// Helper: get categories for filtering
function getComponentCategories() {
    const cats = new Set();
    for (const key of Object.keys(COMPONENTS)) {
        cats.add(COMPONENTS[key].category);
    }
    return Array.from(cats).sort();
}
