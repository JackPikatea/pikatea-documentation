# Firmware Download and Update Guide
This guide will walk you through the process of upgrading or flashing firmware on your Pikatea device. The QMK_Toolbox runs only on Windows and Mac OS X. For Linux, have a look at the pointers at the bottom of this page.

<!-- TODO video guide on flashing your device -->

## Download Firmware
The firmware download page contains updated firmware files for all Pikatea products. Download the firmware you'd like (.hex file) and remember where it is downloaded.

#### Pikatea Keyboard KP69
- [Vial (beta 0.6) Compatible Firmware](https://www.mediafire.com/file/vm0r0ztqo1ub2dy/pikatea_pikatea_keyboard_kp69_vial.hex/file)
- [Vial (beta 0.6) Midi Compatible Firmware](https://www.mediafire.com/file/s5qtyjmgsb1h371/pikatea_pikatea_keyboard_kp69_midi.hex/file)
- [Vial (beta 0.6) Midi Encoder Compatible Firmware](https://www.mediafire.com/file/sw66kcf2s9boa6m/pikatea_pikatea_keyboard_kp69_midi_encoder.hex/file)

#### Pikatea Macropad GB4
- [Vial (beta 0.6) Compatible Firmware](https://www.mediafire.com/file/hhywhyv13pwchni/pikatea_pikatea_macropad_gb4_vial.hex/file)
- [Vial (beta 0.6) Compatible Firmware with preset lighting profiles](https://www.mediafire.com/file/rncosj71yrzew69/pikatea_macropad_gb4_vial%25280.6%2529_lighting.hex/file)
- [Vial (beta 0.6) Midi Compatible Firmware](https://www.mediafire.com/file/qti1ehsb6iius1j/pikatea_pikatea_macropad_gb4_vial_midi.hex/file)

#### Pikatea Macropad GB3
- [Vial (beta 0.4.2) Compatible Firmware](https://www.mediafire.com/file/qp7iv42ndt82j77/pikatea_macropad_gb3_c_vial%25280.4.2%2529.hex/file)
- [Via compatible firmware](https://www.mediafire.com/file/w3eq5uyhw1z9a55/pikatea_pikatea_macropad_gb3_via.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/dynezbd0hl76s46/gb3via.json/file)
- [Via compatible Midi Firmware](https://www.mediafire.com/file/ky7gorzadk9vgjw/pikatea_pikatea_macropad_gb3_midi.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/dynezbd0hl76s46/gb3via.json/file)

#### Pikatea Macropad FK1
- [Vial (beta 0.4.2) Compatible Firmware](https://www.mediafire.com/file/k3an8jcda7b9u1p/pikatea_macropad_fk1_b_vial%25280.4.1%2529.hex/file)
- [Via compatible firmware](https://www.mediafire.com/file/8p503n4ccsd9ktf/pikatea_pikatea_macropad_fk1_via.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/wjmfuljjswm08ru/fk1via.json/file)
- [Via compatible Midi Firmware](https://www.mediafire.com/file/h5arxiksxeah9ki/pikatea_pikatea_macropad_fk1_midi.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/wjmfuljjswm08ru/fk1via.json/file)

#### FinnGus Keyboard Kit
- [Vial (beta 0.4.1) Compatible Firmware](https://www.mediafire.com/file/glirj4nxkplk4p2/pikatea_finn_gus_via%25280.4%2529.hex/file)
- Via compatible firmware and matching .json file (TO BE ADDED)

#### Pikatea Macropad R26 round 1
- [Vial (beta 0.4.2) Compatible Firmware](https://www.mediafire.com/file/6a12z4t1fccxczm/pikatea_pikatea_macropad_r26_kit_a_vial%25280.4.2%2529.hex/file)
- [Via compatible firmware](https://www.mediafire.com/file/ww77r84p4b2wmfa/pikatea_pikatea_macropad_r26_via.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/un5pd2espkymt6y/r26via.json/file)
- [Via compatible Midi Firmware](https://www.mediafire.com/file/igfm2b38lyr88ey/pikatea_pikatea_macropad_r26_midi.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/un5pd2espkymt6y/r26via.json/file)

#### Pikatea Macropad R26 round 2
- [Vial (beta 0.6) Compatible Firmware](https://www.mediafire.com/file/0c33t4x21htjjcv/pikatea_pikatea_macropad_r26_%2528round_2%2529_kit_vial.hex/file)
- [Vial (beta 0.6) Compatible Midi Firmware](https://www.mediafire.com/file/fvosvru20qnce6e/pikatea_pikatea_macropad_r26_round_2%2529_kit_vial_midi.hex/file)
- [Via compatible firmware](https://www.mediafire.com/file/68ev548838ynsm1/pikatea_pikatea_macropad_r26_%2528round_2%2529_kit_via.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/fbdl6jgn06rjgh2/r26r2via.json/file)
- [Via compatible Midi Firmware](https://www.mediafire.com/file/jpeosmg4ugfvqwu/pikatea_pikatea_macropad_r26_%2528round_2%2529_kit_via_midi.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/fbdl6jgn06rjgh2/r26r2via.json/file)

#### Pikatea Macropad Custom
##### 3 Encoders
- [Vial (beta 0.4.2) Compatible Firmware](https://www.mediafire.com/file/72frgl4di1ct079/pikatea_pikatea_macropad_custom_3_encoder_vial%25280.5.2%2529.hex/file)
- [Via compatible firmware](https://www.mediafire.com/file/yupq52dz8q5hfbk/pikatea_pikatea_macropad_custom_3_encoder_via.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/sdr819r3oeii2c4/custom3via.json/file)
- [Via compatible Midi Firmware](https://www.mediafire.com/file/k05w6y3cqklm0ci/pikatea_pikatea_macropad_custom_3_encoder_midi.hex/file) and matching Via keymap [.json file](https://www.mediafire.com/file/sdr819r3oeii2c4/custom3via.json/file)
##### 2 Encoders
- [Vial (beta 0.4.2) Compatible Firmware](https://www.mediafire.com/file/cheqafy0epmetqc/pikatea_pikatea_macropad_custom_2_encoder_vial%25280.5.2%2529.hex/file)
- [Via compatible firmware]() and matching Via keymap [.json file]()
- [Via compatible Midi Firmware]() and matching Via keymap [.json file]()
##### 1 Encoder
- [Vial (beta 0.4.2) Compatible Firmware](https://www.mediafire.com/file/7b1uc6m04bxyk81/pikatea_pikatea_macropad_custom_1_encoder_vial%25280.5.2%2529.hex/file)
- [Via compatible firmware]() and matching Via keymap [.json file]()
- [Via compatible Midi Firmware]() and matching Via keymap [.json file]()

#### Macropad1x5
- [Version 0.4 (encoder left)](https://www.mediafire.com/file/jdh4rx5e19usfcq/macropad1x5_rev1_vial%25280.4%2529.hex/file) and [Version 0.4 (encoder right)](https://www.mediafire.com/file/b9mnj5y3pgnff4z/macropad1x5_rev1_vial%25280.4%2529_flipped.hex/file) (compatible with Vial beta 0.4)

#### Pikatea Macropad GB2
- [Standard Pikatea Firmware (Version 1.2.2 - 2/15/2021)](https://www.mediafire.com/file/ixdowfvxu5u9arz/Pikatea_Macropad_GB2_1.2.2b.hex/file) The firmware that ships with the device. It utilizes the SD card to dictate what each button will do.
- [Vial (beta 0.4.1) Compatible firmware](https://www.mediafire.com/file/7jfv6a17mhp7sou/pikatea_macropad_gb2_b_vial%25280.4.1%2529.hex/file) Firmware that works with Vial 0.4

#### Pikatea Macropad GB1
- [Vial (beta 0.4) Compatible Firmware](https://www.mediafire.com/file/gtfzovxh4sm5yal/pikatea_pikatea_macropad_gb1_via%25280.4%2529.hex/file)

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
Most of our firmware is compiled with Vial-QMK. Our fork is located here [https://github.com/JackPikatea/vial-qmk](https://github.com/JackPikatea/vial-qmk). It is backwards compatible with QMK.

<Footer/>
