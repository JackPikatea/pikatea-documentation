# Hex Firmware Guide

## Download .hex file
Download the right .hex file for your device from the [firmware list]().

## Download QMK_Toolbox
Download the program QMK_toolbox which is used to flash the firmware file on the device. Go to the [download page](https://github.com/qmk/qmk_toolbox/releases) and get latest version located under "Assets".

If you are having issues with the latest version try version 0.0.21

QMK_toolbox will help install the drivers automatically. Restart your computer after the drivers have been installed.

## Configure QMK_Toolbox
After downloading QMK_Toolbox, open it and make sure the following settings are set.
1. Set MCU (AVR only) to atmega32u4. 
2. Set Auto-Flash to checked
3. Click "open" to set the local file to the firmware downloaded earlier (.hex file)
It should look something like this:

![](/assets/ExtraTipsAndTricks/qmk_toolbox.png)

## Flash Firmware
Connect the device to the computer. Your device might start flashing automatically. Otherwise, wait for the computer to recognize the device. Press the reset button which is usually the small button located on the back of the device or connect the RST and GND pins on the Pro Micro if your device uses one. This will put the device into it's flashing mode.

*some Pro Micros can be stubbern and take several several tries to get into flashing mode*

![](/assets/ExtraTipsAndTricks/gb3_reset.webp)
<p style="font-size: 2rem; font-weight: bold; text-align: center;">OR</p>
![](/assets/ExtraTipsAndTricks/pro-micro-reset.jpg)


The device will disconnect and then reconnect in DFU mode. QMK_Toolbox will recognize the device in DFU mode and start flashing the firmware. If you have issues, try restarting QMK_Toolbox and trying again. Try several times, sometimes devices can have a hard time going into DFU mode. If auto-flash is giving you issues, you can manually click flash. Just do so when the device has been reset and is in DFU mode. If you use linux, try holding down the reset button as you plug in the device instead.

**That's it! You should have a result that looks like one of the following 2 images.**

![](/assets/ExtraTipsAndTricks/flash1.png)
<p style="font-size: 2rem; font-weight: bold; text-align: center;">OR</p>
![](/assets/ExtraTipsAndTricks/flash2.png)


### Linux instructions
With linux you can download a compatible firmware and flash it directly with avrdude: 

avrdude -p atmega32u4 -c avr109 -P /dev/ttyACM0 -U flash:w:macropad1x5_vial.hex:i

Make sure to enter the correct port and path to the .hex on your machine. Prepending sudo or adjusting the udev rules may be required. You only need to flash the firmware once and can use Vial from then on.

### Firmware Repo
Most of our firmware is compiled with Vial-QMK. Our fork is located here [https://github.com/PikateaCompany/vial-qmk](https://github.com/PikateaCompany/vial-qmk). It is backwards compatible with QMK.