# Firmware Download and Update Guide
This guide will walk you through the process of upgrading or flashing firmware on your Pikatea device. The QMK_Toolbox runs only on Windows and Mac OS X. For Linux, have a look at the pointers at the bottom of this page.

## Download Firmware
The firmware download page contains updated firmware files for all Pikatea products. Download the firmware you'd like (.hex file) and remember where it is downloaded.

#### Pikatea Macropad GB3
- [Vial (beta 0.4) Compatible Firmware](https://www.mediafire.com/file/mxun6eyc24xwnub/pikatea_pikatea_macropad_gb3_vial(0.4).hex/file)

#### FinnGus Keyboard Kit
- [Vial (beta 0.4) Compatible Firmware](https://www.mediafire.com/file/glirj4nxkplk4p2/pikatea_finn_gus_via%25280.4%2529.hex/file)

#### Macropad1x5
- [Version 0.4 (encoder left)](https://www.mediafire.com/file/jdh4rx5e19usfcq/macropad1x5_rev1_vial%25280.4%2529.hex/file) and [Version 0.4 (encoder right)](https://www.mediafire.com/file/b9mnj5y3pgnff4z/macropad1x5_rev1_vial%25280.4%2529_flipped.hex/file) (compatible with Vial beta 0.4)

#### Pikatea Macropad GB2
- [Standard Pikatea Firmware (Version 1.2.2 - 2/15/2021)](https://www.mediafire.com/file/ixdowfvxu5u9arz/Pikatea_Macropad_GB2_1.2.2b.hex/file) The firmware that ships with the device. It utilizes the SD card to dictate what each button will do.
- [Vial (beta 0.4) Compatible firmware](https://www.mediafire.com/file/i5qtsjoob69zugv/pikatea_pikatea_macropad_gb2_vial%25280.4%2529.hex/file) Firmware that works with Vial 0.4

#### Pikatea Macropad GB1
- [Vial (beta 0.4) Compatible Firmware](https://www.mediafire.com/file/gtfzovxh4sm5yal/pikatea_pikatea_macropad_gb1_via%25280.4%2529.hex/file)

## Download QMK_Toolbox
Download the program QMK_toolbox which is used to flash the firmware file on the device. Go to the [download page](https://github.com/qmk/qmk_toolbox/releases) and get version 0.0.21 located under "Assets" (not the beta or 0.1.0 which seems to have hickups at the moment). 

## Configure QMK_Toolbox
After downloading QMK_Toolbox, open it and make sure the following settings are set.
1. Set MCU (AVR only) to atmega32u4. 
2. Set Auto-Flash to checked
3. Click "open" to set the local file to the firmware downloaded earlier (.hex file)
It should look something like this:

Image

## Flash Firmware
Connect the device to the computer. Your device might start flashing automatically. Wait for the computer to recognize the device and then press the reset button which is usually the small button located on the back of the device. The device will disconnect and then reconnect in DFU mode. QMK_Toolbox will recognize the device in DFU mode and start flashing the firmware. If you have issues, try restarting QMK_Toolbox and trying again. If auto-flash is giving you issues, you can manually click flash. Just do so when the device has been reset and is in DFU mode.

If you use linux, try holding down the reset button as you plug in the device instead.

That's it! 


### Linux instructions
With linux you can download a compatible firmware and flash it directly with avrdude: 

avrdude -p atmega32u4 -c avr109 -P /dev/ttyACM0 -U flash:w:macropad1x5_vial.hex:i

Make sure to enter the correct port and path to the .hex on your machine. Prepending sudo or adjusting the udev rules may be required. You only need to flash the firmware once and can use Vial from then on.

### Firmware Repo
Most of our firmware is compiled with Vial-QMK. Our fork is located here [https://github.com/JackPikatea/vial-qmk](https://github.com/JackPikatea/vial-qmk). It is backwards compatible with QMK.

<Footer/>