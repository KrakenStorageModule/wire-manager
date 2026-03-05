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
    // ==========================================
    // COMPONENTS (~100 PARTS)
    // ==========================================
    components: [
        // --- SENSORS: IMU & Motion ---
        { id: 'mpu6050', name: 'MPU6050 Accelerometer/Gyro', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 5, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'AD0', type: 'GPIO_IN' }, { name: 'INT', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'IMU' },
        { id: 'mpu9250', name: 'MPU9250 9-Axis IMU', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 10, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'IMU' },
        { id: 'bno055', name: 'BNO055 Absolute IMU', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 12, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }, { name: 'RST', type: 'GPIO_OUT' }], icon: 'IMU' },
        { id: 'lsm6ds3', name: 'LSM6DS3 6-Axis IMU', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 2, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'IMU' },
        { id: 'adxl345', name: 'ADXL345 Accelerometer', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'CS', type: 'SPI_CS' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ACC' },
        { id: 'lis3dh', name: 'LIS3DH Accelerometer', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ACC' },

        // --- SENSORS: Distance & Optics ---
        { id: 'hc_sr04', name: 'HC-SR04 Ultrasonic', category: 'Sensors', protocol: 'GPIO', voltage: 5.0, currentmA: 15, signals: [{ name: 'TRIG', type: 'GPIO_OUT' }, { name: 'ECHO', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'SON' },
        { id: 'vl53l0x', name: 'VL53L0X ToF (2m)', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 20, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'TOF' },
        { id: 'vl53l1x', name: 'VL53L1X ToF (4m)', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 20, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'XSHUT', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'TOF' },
        { id: 'tcs34725', name: 'TCS34725 Color Sensor', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 5, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'LED', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'RGB' },
        { id: 'apds9960', name: 'APDS-9960 Gesture/Proximity', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 5, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'INT', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'PROX' },
        { id: 'garmin_lidar_v3', name: 'LIDAR-Lite v3', category: 'Sensors', protocol: 'I2C', voltage: 5.0, currentmA: 100, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'LDR' },
        { id: 'tf_mini_s', name: 'TF-Mini S LiDAR', category: 'Sensors', protocol: 'GPIO', voltage: 5.0, currentmA: 140, signals: [{ name: 'TX', type: 'GPIO_IN' }, { name: 'RX', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'LDR' },

        // --- SENSORS: Environment ---
        { id: 'dht11', name: 'DHT11 Temp/Humi', category: 'Sensors', protocol: 'GPIO', voltage: 5.0, currentmA: 1, signals: [{ name: 'DATA', type: 'GPIO' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'ENV' },
        { id: 'dht22', name: 'DHT22 Temp/Humi', category: 'Sensors', protocol: 'GPIO', voltage: 3.3, currentmA: 1, signals: [{ name: 'DATA', type: 'GPIO' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ENV' },
        { id: 'bmp180', name: 'BMP180 Pressure', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ENV' },
        { id: 'bmp280', name: 'BMP280 Barometer', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ENV' },
        { id: 'bme280', name: 'BME280 Temp/Hum/Pres', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ENV' },
        { id: 'bme680', name: 'BME680 Gas/Air Quality', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 15, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ENV' },
        { id: 'ds18b20', name: 'DS18B20 1-Wire Temp', category: 'Sensors', protocol: 'GPIO', voltage: 3.3, currentmA: 1, signals: [{ name: 'DQ', type: 'GPIO' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ENV' },
        { id: 'mh_z19b', name: 'MH-Z19B CO2 Sensor', category: 'Sensors', protocol: 'GPIO', voltage: 5.0, currentmA: 150, signals: [{ name: 'PWM', type: 'GPIO_IN' }, { name: 'TX', type: 'GPIO_IN' }, { name: 'RX', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'CO2' },
        { id: 'ccs811', name: 'CCS811 VOC Sensor', category: 'Sensors', protocol: 'I2C', voltage: 3.3, currentmA: 30, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'WAKE', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'AIR' },

        // --- DISPLAY: OLED, LCD, Matrix ---
        { id: 'ssd1306', name: 'SSD1306 OLED (128x64)', category: 'Display', protocol: 'I2C', voltage: 3.3, currentmA: 20, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'OLED' },
        { id: 'sh1106', name: 'SH1106 OLED (1.3")', category: 'Display', protocol: 'I2C', voltage: 3.3, currentmA: 20, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'OLED' },
        { id: 'lcd1602_i2c', name: '16x2 LCD w/ I2C', category: 'Display', protocol: 'I2C', voltage: 5.0, currentmA: 50, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'LCD' },
        { id: 'lcd2004_i2c', name: '20x4 LCD w/ I2C', category: 'Display', protocol: 'I2C', voltage: 5.0, currentmA: 60, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'LCD' },
        { id: 'ili9341', name: 'ILI9341 TFT (2.4")', category: 'Display', protocol: 'SPI', voltage: 3.3, currentmA: 100, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MISO', type: 'SPI_MISO' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'DC', type: 'GPIO_OUT' }, { name: 'RST', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'TFT' },
        { id: 'st7789', name: 'ST7789 IPS LCD', category: 'Display', protocol: 'SPI', voltage: 3.3, currentmA: 60, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'DC', type: 'GPIO_OUT' }, { name: 'RES', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'LCD' },
        { id: 'e_ink_213', name: '2.13" E-Ink Display', category: 'Display', protocol: 'SPI', voltage: 3.3, currentmA: 5, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'DC', type: 'GPIO_OUT' }, { name: 'RST', type: 'GPIO_OUT' }, { name: 'BUSY', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'INK' },
        { id: 'max7219_matrix', name: 'MAX7219 LED Matrix', category: 'Display', protocol: 'SPI', voltage: 5.0, currentmA: 150, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'DOT' },
        { id: 'ws2812b_led', name: 'WS2812B NeoPixel', category: 'Display', protocol: 'GPIO', voltage: 5.0, currentmA: 60, signals: [{ name: 'DIN', type: 'GPIO_OUT' }, { name: '5V', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'RGB' },

        // --- MOTOR DRIVERS & CONTROL ---
        { id: 'l298n', name: 'L298N Dual H-Bridge', category: 'Motor Drivers', protocol: 'GPIO', voltage: 5.0, currentmA: 36, signals: [{ name: 'ENA', type: 'PWM' }, { name: 'IN1', type: 'GPIO_OUT' }, { name: 'IN2', type: 'GPIO_OUT' }, { name: 'IN3', type: 'GPIO_OUT' }, { name: 'IN4', type: 'GPIO_OUT' }, { name: 'ENB', type: 'PWM' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'VMS', type: 'POWER_EXT' }, { name: 'GND', type: 'GND' }], icon: 'DRV' },
        { id: 'drv8825', name: 'DRV8825 Stepper', category: 'Motor Drivers', protocol: 'GPIO', voltage: 3.3, currentmA: 5, signals: [{ name: 'STEP', type: 'GPIO_OUT' }, { name: 'DIR', type: 'GPIO_OUT' }, { name: 'EN', type: 'GPIO_OUT' }, { name: 'VMOT', type: 'POWER_EXT' }, { name: 'GND', type: 'GND' }, { name: 'VDD', type: 'POWER_3V3' }], icon: 'DRV' },
        { id: 'tmc2209', name: 'TMC2209 SilentStepStick', category: 'Motor Drivers', protocol: 'GPIO', voltage: 3.3, currentmA: 1, signals: [{ name: 'STEP', type: 'GPIO_OUT' }, { name: 'DIR', type: 'GPIO_OUT' }, { name: 'EN', type: 'GPIO_OUT' }, { name: 'VCCIO', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'DRV' },
        { id: 'tb6612fng', name: 'TB6612FNG Dual Driver', category: 'Motor Drivers', protocol: 'PWM', voltage: 3.3, currentmA: 1, signals: [{ name: 'PWMA', type: 'PWM' }, { name: 'AIN1', type: 'GPIO_OUT' }, { name: 'AIN2', type: 'GPIO_OUT' }, { name: 'STBY', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'DRV' },
        { id: 'a4988', name: 'A4988 Stepper Driver', category: 'Motor Drivers', protocol: 'GPIO', voltage: 5.0, currentmA: 10, signals: [{ name: 'STEP', type: 'GPIO_OUT' }, { name: 'DIR', type: 'GPIO_OUT' }, { name: 'ENABLE', type: 'GPIO_OUT' }, { name: 'VDD', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'DRV' },
        { id: 'pca9685', name: 'PCA9685 16-Ch PWM', category: 'Logic', protocol: 'I2C', voltage: 3.3, currentmA: 10, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'PWM' },
        { id: 'bts7960', name: 'BTS7960 43A Driver', category: 'Motor Drivers', protocol: 'PWM', voltage: 5.0, currentmA: 100, signals: [{ name: 'RPWM', type: 'PWM' }, { name: 'LPWM', type: 'PWM' }, { name: 'R_EN', type: 'GPIO_OUT' }, { name: 'L_EN', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'PWR' },

        // --- MOTORS & ACTUATORS ---
        { id: 'servo_sg90', name: 'SG90 Micro Servo', category: 'Motors', protocol: 'PWM', voltage: 5.0, currentmA: 100, signals: [{ name: 'PWM', type: 'PWM' }, { name: '5V', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'SRV' },
        { id: 'servo_mg996r', name: 'MG996R High Torque Servo', category: 'Motors', protocol: 'PWM', voltage: 6.0, currentmA: 500, signals: [{ name: 'PWM', type: 'PWM' }, { name: 'VCC', type: 'POWER_EXT' }, { name: 'GND', type: 'GND' }], icon: 'SRV' },
        { id: 'stepper_nema17', name: 'NEMA 17 Stepper', category: 'Motors', protocol: 'Analog', voltage: 12.0, currentmA: 1500, signals: [{ name: 'A+', type: 'POWER_EXT' }, { name: 'A-', type: 'POWER_EXT' }, { name: 'B+', type: 'POWER_EXT' }, { name: 'B-', type: 'POWER_EXT' }], icon: 'MTR' },
        { id: 'vibration_motor', name: 'Vibration Motor', category: 'Motors', protocol: 'GPIO', voltage: 3.3, currentmA: 80, signals: [{ name: 'POS', type: 'GPIO_OUT' }, { name: 'NEG', type: 'GND' }], icon: 'VIB' },
        { id: 'solenoid_12v', name: '12V Solenoid', category: 'Actuators', protocol: 'GPIO', voltage: 12.0, currentmA: 500, signals: [{ name: 'POS', type: 'POWER_EXT' }, { name: 'NEG', type: 'GND' }], icon: 'SOL' },

        // --- ENCODERS & INPUT ---
        { id: 'amt2030', name: 'AMT2030 Encoder', category: 'Encoders', protocol: 'SPI', voltage: 5.0, currentmA: 20, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MISO', type: 'SPI_MISO' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'ENC' },
        { id: 'ky040', name: 'KY-040 Rotary Encoder', category: 'Input', protocol: 'GPIO', voltage: 5.0, currentmA: 1, signals: [{ name: 'CLK', type: 'GPIO_IN' }, { name: 'DT', type: 'GPIO_IN' }, { name: 'SW', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'ROT' },
        { id: 'joystick_ps2', name: 'PS2 Style Joystick', category: 'Input', protocol: 'Analog', voltage: 5.0, currentmA: 1, signals: [{ name: 'VRX', type: 'Analog' }, { name: 'VRY', type: 'Analog' }, { name: 'SW', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'JOY' },
        { id: 'matrix_keypad_4x4', name: '4x4 Matrix Keypad', category: 'Input', protocol: 'GPIO', voltage: 3.3, currentmA: 1, signals: [{ name: 'R1', type: 'GPIO' }, { name: 'R2', type: 'GPIO' }, { name: 'R3', type: 'GPIO' }, { name: 'R4', type: 'GPIO' }, { name: 'C1', type: 'GPIO' }, { name: 'C2', type: 'GPIO' }, { name: 'C3', type: 'GPIO' }, { name: 'C4', type: 'GPIO' }], icon: 'PAD' },
        { id: 'push_button', name: 'Tactile Button', category: 'Input', protocol: 'GPIO', voltage: 3.3, currentmA: 1, signals: [{ name: 'OUT', type: 'GPIO_IN' }, { name: 'GND', type: 'GND' }], icon: 'BTN' },
        { id: 'potentiometer', name: 'Potentiometer', category: 'Input', protocol: 'Analog', voltage: 3.3, currentmA: 1, signals: [{ name: 'WIPER', type: 'Analog' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'POT' },

        // --- COMMUNICATION & WIRELESS ---
        { id: 'nrf24l01', name: 'nRF24L01 RF Module', category: 'Wireless', protocol: 'SPI', voltage: 3.3, currentmA: 15, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MISO', type: 'SPI_MISO' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'CE', type: 'GPIO_OUT' }, { name: 'IRQ', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'RF' },
        { id: 'esp8266_01', name: 'ESP8266-01 WiFi', category: 'Wireless', protocol: 'GPIO', voltage: 3.3, currentmA: 170, signals: [{ name: 'TX', type: 'GPIO_IN' }, { name: 'RX', type: 'GPIO_OUT' }, { name: 'EN', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'WIFI' },
        { id: 'hc05', name: 'HC-05 Bluetooth', category: 'Wireless', protocol: 'GPIO', voltage: 5.0, currentmA: 40, signals: [{ name: 'TX', type: 'GPIO_IN' }, { name: 'RX', type: 'GPIO_OUT' }, { name: 'EN', type: 'GPIO_OUT' }, { name: 'STATE', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'BT' },
        { id: 'hc06', name: 'HC-06 Bluetooth', category: 'Wireless', protocol: 'GPIO', voltage: 5.0, currentmA: 40, signals: [{ name: 'TX', type: 'GPIO_IN' }, { name: 'RX', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'BT' },
        { id: 'mcp2515', name: 'MCP2515 CAN Controller', category: 'Communication', protocol: 'SPI', voltage: 5.0, currentmA: 50, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MISO', type: 'SPI_MISO' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'INT', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'CAN' },
        { id: 'ch340g', name: 'CH340G USB-Serial', category: 'Communication', protocol: 'GPIO', voltage: 5.0, currentmA: 30, signals: [{ name: 'TX', type: 'GPIO_OUT' }, { name: 'RX', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'USB' },
        { id: 'sim800l', name: 'SIM800L GSM/GPRS', category: 'Wireless', protocol: 'GPIO', voltage: 4.0, currentmA: 500, signals: [{ name: 'TX', type: 'GPIO_IN' }, { name: 'RX', type: 'GPIO_OUT' }, { name: 'RST', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_EXT' }, { name: 'GND', type: 'GND' }], icon: 'GSM' },
        { id: 'lora_sx1278', name: 'SX1278 LoRa Module', category: 'Wireless', protocol: 'SPI', voltage: 3.3, currentmA: 120, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MISO', type: 'SPI_MISO' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'RST', type: 'GPIO_OUT' }, { name: 'DIO0', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'LORA' },

        // --- POWER & MANAGEMENT ---
        { id: 'tp4056', name: 'TP4056 LiPo Charger', category: 'Power', protocol: 'GPIO', voltage: 5.0, currentmA: 500, signals: [{ name: 'IN+', type: 'POWER_5V' }, { name: 'IN-', type: 'GND' }, { name: 'BAT+', type: 'POWER_EXT' }, { name: 'BAT-', type: 'GND' }], icon: 'BAT' },
        { id: 'lm2596', name: 'LM2596 Buck Converter', category: 'Power', protocol: 'Power', voltage: 12.0, currentmA: 3000, signals: [{ name: 'IN+', type: 'POWER_EXT' }, { name: 'IN-', type: 'GND' }, { name: 'OUT+', type: 'POWER_EXT' }, { name: 'OUT-', type: 'GND' }], icon: 'PWR' },
        { id: 'relay_module_1ch', name: '1-Channel Relay', category: 'Actuators', protocol: 'GPIO', voltage: 5.0, currentmA: 70, signals: [{ name: 'IN', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'RLY' },
        { id: 'relay_module_4ch', name: '4-Channel Relay', category: 'Actuators', protocol: 'GPIO', voltage: 5.0, currentmA: 280, signals: [{ name: 'IN1', type: 'GPIO_OUT' }, { name: 'IN2', type: 'GPIO_OUT' }, { name: 'IN3', type: 'GPIO_OUT' }, { name: 'IN4', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'RLY' },

        // --- LOGIC & EXPANSION ---
        { id: 'mcp23017', name: 'MCP23017 16-Ch I/O Expander', category: 'Logic', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'RESET', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'IO' },
        { id: '74hc595', name: '74HC595 Shift Register', category: 'Logic', protocol: 'SPI', voltage: 5.0, currentmA: 1, signals: [{ name: 'DS', type: 'SPI_MOSI' }, { name: 'SHCP', type: 'SPI_SCK' }, { name: 'STCP', type: 'SPI_CS' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'SHF' },
        { id: 'ads1115', name: 'ADS1115 16-Bit ADC', category: 'Logic', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'ADDR', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ADC' },
        { id: 'mcp4725', name: 'MCP4725 DAC', category: 'Logic', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'DAC' },
        { id: 'level_shifter', name: '4-Ch Level Shifter', category: 'Logic', protocol: 'GPIO', voltage: 3.3, currentmA: 1, signals: [{ name: 'LV', type: 'POWER_3V3' }, { name: 'HV', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }, { name: 'A1', type: 'GPIO' }, { name: 'B1', type: 'GPIO' }], icon: 'LVL' },

        // --- STORAGE ---
        { id: 'sd_card_module', name: 'SD Card Module', category: 'Storage', protocol: 'SPI', voltage: 5.0, currentmA: 100, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MISO', type: 'SPI_MISO' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'SD' },
        { id: 'micro_sd_module', name: 'Micro SD Module', category: 'Storage', protocol: 'SPI', voltage: 3.3, currentmA: 100, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MISO', type: 'SPI_MISO' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'SD' },
        { id: 'at24c256', name: 'AT24C256 EEPROM', category: 'Storage', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'WP', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'MEM' },
        { id: 'w25q128', name: 'W25Q128 Flash (128Mb)', category: 'Storage', protocol: 'SPI', voltage: 3.3, currentmA: 5, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MISO', type: 'SPI_MISO' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'MEM' },

        // --- RTC & TIME ---
        { id: 'ds1307', name: 'DS1307 RTC', category: 'Time', protocol: 'I2C', voltage: 5.0, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'RTC' },
        { id: 'ds3231', name: 'DS3231 High Precision RTC', category: 'Time', protocol: 'I2C', voltage: 3.3, currentmA: 1, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'SQW', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'RTC' },

        // --- AUDIO ---
        { id: 'dfplayer_mini', name: 'DFPlayer Mini MP3', category: 'Audio', protocol: 'GPIO', voltage: 5.0, currentmA: 20, signals: [{ name: 'TX', type: 'GPIO_IN' }, { name: 'RX', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_5V' }, { name: 'GND', type: 'GND' }], icon: 'MP3' },
        { id: 'buzzer_active', name: 'Active Buzzer', category: 'Audio', protocol: 'GPIO', voltage: 5.0, currentmA: 30, signals: [{ name: 'POS', type: 'GPIO_OUT' }, { name: 'NEG', type: 'GND' }], icon: 'BZZ' },
        { id: 'i2s_dac_max98357a', name: 'MAX98357A I2S Amp', category: 'Audio', protocol: 'GPIO', voltage: 3.3, currentmA: 200, signals: [{ name: 'LRC', type: 'GPIO_OUT' }, { name: 'BCLK', type: 'GPIO_OUT' }, { name: 'DIN', type: 'GPIO_OUT' }, { name: 'GAIN', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'I2S' },

        // --- SPECIALTY ---
        { id: 'gps_neo6m', name: 'NEO-6M GPS Module', category: 'Sensors', protocol: 'GPIO', voltage: 3.3, currentmA: 50, signals: [{ name: 'TX', type: 'GPIO_IN' }, { name: 'RX', type: 'GPIO_OUT' }, { name: 'PPS', type: 'GPIO_IN' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'GPS' },
        { id: 'rc522_rfid', name: 'MFRC522 RFID Reader', category: 'Wireless', protocol: 'SPI', voltage: 3.3, currentmA: 13, signals: [{ name: 'CS', type: 'SPI_CS' }, { name: 'SCK', type: 'SPI_SCK' }, { name: 'MISO', type: 'SPI_MISO' }, { name: 'MOSI', type: 'SPI_MOSI' }, { name: 'RST', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'ID' },
        { id: 'as5600', name: 'AS5600 Magnetic Encoder', category: 'Encoders', protocol: 'I2C', voltage: 3.3, currentmA: 10, signals: [{ name: 'SDA', type: 'I2C_SDA' }, { name: 'SCL', type: 'I2C_SCL' }, { name: 'DIR', type: 'GPIO_OUT' }, { name: 'VCC', type: 'POWER_3V3' }, { name: 'GND', type: 'GND' }], icon: 'MAG' }
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
