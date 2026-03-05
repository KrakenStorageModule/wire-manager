# Wire Manager

**[Live Tool: krakenstoragemodule.github.io/wire-manager](https://krakenstoragemodule.github.io/wire-manager/)**

Wire Manager helps you stop mis-wiring your hardware projects. Instead of cross-referencing datasheets on six different browser tabs, you can just pick your MCU, add your parts, and see exactly where everything should plug in.

It automatically handles the annoying stuff like checking which pins actually support SPI or I2C, flagging voltage mismatches (3.3V vs 5V), and generating C++ header code so you don't have to manual-type every #define.

### Highlights
- **Smart Pin Mapping:** Knows the hardware-specific functions for MCUs like Teensy, ESP32, and STM32.
- **Datasheet Parsing:** Drop a PDF or formatted JSON, and it'll try to find the pinout for you automatically.
  (JSON Format):<br>
  {
  "id": "my_sensor_01",<br>
  "name": "Custom Sensor",<br>
  "category": "Sensors",<br>
  "protocol": "I2C",<br>
  "voltage": 3.3,<br>
  "currentmA": 10,<br>
  "icon": "SNR",<br>
  "signals": [<br>
    { "name": "SDA", "type": "I2C_SDA", "requireUnique": false },<br>
    { "name": "SCL", "type": "I2C_SCL", "requireUnique": false },<br>
    { "name": "VCC", "type": "POWER_3V3", "requireUnique": false },<br>
    { "name": "GND", "type": "GND", "requireUnique": false }<br>
  ]<br>
}<br>

- **Instant Code:** Export your wiring directly as a `.h` file for your firmware.

### Running it
It's just a static site, so you can run it anywhere. If you're working locally, use `npx serve .` to make sure the ES modules load correctly.

---
