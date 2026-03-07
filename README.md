# Wire Manager
**UNDER DEVELOPMENT**
**[Live Tool Demo: krakenstoragemodule.github.io/wire-manager](https://krakenstoragemodule.github.io/wire-manager/)**

Wire Manager helps you stop mis-wiring your hardware projects. Instead of cross-referencing datasheets on six different browser tabs, you can just pick your MCU, add your parts, and see exactly where everything should plug in. (yes it IS evangelion themed!)

It automatically handles the annoying stuff like checking which pins actually support SPI or I2C, flagging voltage mismatches (3.3V vs 5V), and generating C++ header code so you don't have to manual-type every #define.

### Highlights
- **Smart Pin Mapping:** Knows the hardware-specific functions for MCUs like Teensy, ESP32, and STM32.
- **Datasheet Parsing:** Drop a PDF in, and it'll try to find the pinouts for you automatically. You can also upload a part as a JSON file in the following format:
```json
{
  "id": "my_part_01",
  "name": "Custom Part",
  "category": "Sensors",
  "protocol": "I2C",
  "voltage": 3.3,
  "currentmA": 10,
  "icon": "SNR",
  "signals": [
    { "name": "SDA", "type": "I2C_SDA", "requireUnique": false },
    { "name": "SCL", "type": "I2C_SCL", "requireUnique": false },
    { "name": "VCC", "type": "POWER_3V3", "requireUnique": false },
    { "name": "GND", "type": "GND", "requireUnique": false }
  ]
}
```
- **Import/Export:** Export your wiring directly as a '.h' file for your firmware. Import/Export generated pinout with JSON files

### Running it
It's just a static site, so you can run it anywhere. If you're working locally, use `npx serve .` to make sure the ES modules load correctly.


