# Wire Manager

**[Live Tool: krakenstoragemodule.github.io/wire-manager](https://krakenstoragemodule.github.io/wire-manager/)**

Wire Manager helps you stop mis-wiring your hardware projects. Instead of cross-referencing datasheets on six different browser tabs, you can just pick your MCU, add your parts, and see exactly where everything should plug in.

It automatically handles the annoying stuff like checking which pins actually support SPI or I2C, flagging voltage mismatches (3.3V vs 5V), and generating C++ header code so you don't have to manual-type every #define.

### Highlights
- **Smart Pin Mapping:** Knows the hardware-specific functions for MCUs like Teensy, ESP32, and STM32.
- **Datasheet Parsing:** Drop a PDF in, and it'll try to find the pinout for you automatically.
- **Instant Code:** Export your wiring directly as a `.h` file for your firmware.

### Running it
It's just a static site, so you can run it anywhere. If you're working locally, use `npx serve .` to make sure the ES modules load correctly.

---

<div align="center">
  <img src="https://img.shields.io/badge/STATUS-SYNCHRONIZED-7030A0?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/INTERFACE-TERMINAL-000000?style=for-the-badge" alt="Interface">
  <img src="https://img.shields.io/badge/VERSION-1.0.42-B5E61D?style=for-the-badge" alt="Version">
</div>
