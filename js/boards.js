// boards.js — Microcontroller pin definitions
// Each pin: { id, name, capabilities: string[] }
// Capabilities: GPIO, PWM, ADC, SPI_MOSI, SPI_MISO, SPI_SCK, SPI_SS, I2C_SDA, I2C_SCL, UART_TX, UART_RX, INT

const BOARDS = {
    "Arduino Uno": {
        name: "Arduino Uno",
        mcu: "ATmega328P",
        voltage: "5V",
        pinCount: 20,
        pins: [
            { id: 0, name: "D0", capabilities: ["GPIO", "UART_RX"] },
            { id: 1, name: "D1", capabilities: ["GPIO", "UART_TX"] },
            { id: 2, name: "D2", capabilities: ["GPIO", "INT"] },
            { id: 3, name: "D3", capabilities: ["GPIO", "PWM", "INT"] },
            { id: 4, name: "D4", capabilities: ["GPIO"] },
            { id: 5, name: "D5", capabilities: ["GPIO", "PWM"] },
            { id: 6, name: "D6", capabilities: ["GPIO", "PWM"] },
            { id: 7, name: "D7", capabilities: ["GPIO"] },
            { id: 8, name: "D8", capabilities: ["GPIO"] },
            { id: 9, name: "D9", capabilities: ["GPIO", "PWM"] },
            { id: 10, name: "D10", capabilities: ["GPIO", "PWM", "SPI_SS"] },
            { id: 11, name: "D11", capabilities: ["GPIO", "PWM", "SPI_MOSI"] },
            { id: 12, name: "D12", capabilities: ["GPIO", "SPI_MISO"] },
            { id: 13, name: "D13", capabilities: ["GPIO", "SPI_SCK"] },
            { id: 14, name: "A0", capabilities: ["GPIO", "ADC"] },
            { id: 15, name: "A1", capabilities: ["GPIO", "ADC"] },
            { id: 16, name: "A2", capabilities: ["GPIO", "ADC"] },
            { id: 17, name: "A3", capabilities: ["GPIO", "ADC"] },
            { id: 18, name: "A4", capabilities: ["GPIO", "ADC", "I2C_SDA"] },
            { id: 19, name: "A5", capabilities: ["GPIO", "ADC", "I2C_SCL"] },
        ],
        // Layout info for the visual diagram (left side pins, right side pins)
        layout: {
            leftPins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],  // pin ids on left
            rightPins: [14, 15, 16, 17, 18, 19],                   // pin ids on right
            chipLabel: "ATmega328P"
        }
    },

    "Seeed XIAO (SAMD21)": {
        name: "Seeed XIAO (SAMD21)",
        mcu: "SAMD21G18",
        voltage: "3.3V",
        pinCount: 11,
        pins: [
            { id: 0, name: "D0/A0", capabilities: ["GPIO", "PWM", "ADC", "INT"] },
            { id: 1, name: "D1/A1", capabilities: ["GPIO", "PWM", "ADC", "INT"] },
            { id: 2, name: "D2/A2", capabilities: ["GPIO", "PWM", "ADC", "INT"] },
            { id: 3, name: "D3/A3", capabilities: ["GPIO", "PWM", "ADC", "INT"] },
            { id: 4, name: "D4/SDA", capabilities: ["GPIO", "PWM", "ADC", "INT", "I2C_SDA"] },
            { id: 5, name: "D5/SCL", capabilities: ["GPIO", "PWM", "ADC", "INT", "I2C_SCL"] },
            { id: 6, name: "D6/TX", capabilities: ["GPIO", "PWM", "INT", "UART_TX"] },
            { id: 7, name: "D7/RX", capabilities: ["GPIO", "PWM", "INT", "UART_RX"] },
            { id: 8, name: "D8/SCK", capabilities: ["GPIO", "PWM", "INT", "SPI_SCK"] },
            { id: 9, name: "D9/MISO", capabilities: ["GPIO", "PWM", "INT", "SPI_MISO"] },
            { id: 10, name: "D10/MOSI", capabilities: ["GPIO", "PWM", "INT", "SPI_MOSI"] },
        ],
        layout: {
            leftPins: [0, 1, 2, 3, 4, 5],
            rightPins: [6, 7, 8, 9, 10],
            chipLabel: "SAMD21"
        }
    },

    "Seeed XIAO ESP32-S3": {
        name: "Seeed XIAO ESP32-S3",
        mcu: "ESP32-S3",
        voltage: "3.3V",
        pinCount: 11,
        pins: [
            { id: 0, name: "D0/A0", capabilities: ["GPIO", "PWM", "ADC", "INT"] },
            { id: 1, name: "D1/A1", capabilities: ["GPIO", "PWM", "ADC", "INT"] },
            { id: 2, name: "D2/A2", capabilities: ["GPIO", "PWM", "ADC", "INT"] },
            { id: 3, name: "D3/A3", capabilities: ["GPIO", "PWM", "ADC", "INT"] },
            { id: 4, name: "D4/SDA", capabilities: ["GPIO", "PWM", "ADC", "INT", "I2C_SDA"] },
            { id: 5, name: "D5/SCL", capabilities: ["GPIO", "PWM", "ADC", "INT", "I2C_SCL"] },
            { id: 6, name: "D6/TX", capabilities: ["GPIO", "PWM", "INT", "UART_TX"] },
            { id: 7, name: "D7/RX", capabilities: ["GPIO", "PWM", "INT", "UART_RX"] },
            { id: 8, name: "D8/SCK", capabilities: ["GPIO", "PWM", "INT", "SPI_SCK"] },
            { id: 9, name: "D9/MISO", capabilities: ["GPIO", "PWM", "INT", "SPI_MISO"] },
            { id: 10, name: "D10/MOSI", capabilities: ["GPIO", "PWM", "INT", "SPI_MOSI"] },
        ],
        layout: {
            leftPins: [0, 1, 2, 3, 4, 5],
            rightPins: [6, 7, 8, 9, 10],
            chipLabel: "ESP32-S3"
        }
    }
};
