

# Pikatea Macropad GB3 User Guide
Congratulations on receiving your Pikatea Macropad GB3! This quick guide will walk you through how to use it.

## What’s in the Box
* (1) Pikatea Macropad GB3
* (1) USB Mini Cable
* (1) Allen Wrench
* (2) Screws
* (2) Mounting tape

## Mounting
Mounting can be done with the included screws or the doubled sided tape. Place 1 of the 2 included mounting strips on the macropad and remove the protective covering. Align the Macropad to the underside of your desk, monitor or other surface and press firmly for 10 seconds or more if needed. The bond will grow stronger over time. Be careful not to cover up any monitor buttons.

More mounting tape can be bought on our store in sets of 4.

***Note: It's good practice to secure the USB cable with a cable tie or similar so that if the cord gets pulled the macropad is not effected.***

## Programming and Usage
Vial firmware is already loaded onto your macropad. Vial is an open source program that makes it easy to configure the device with a simple interface. To get started, download Vial from the [official website here](https://get.Vial.today). Download and install the latest version (Currently Beta 0.4).

After Vial is installed, open the program.

Make sure your device is connected, and click "refresh". The program will automatically detect all Vial compatible devices connected. If you have multiple devices, you can cycle them with the drop down at the top. Make sure the device you want is selected and the layout matches.

*Note: 7 keys will be shown regardless if you have a 3-key, 5-key, or 7-key configuration. The extra keys will simply not work if they are not physically present.*

More information on all the features can be found on [the Offical Vial usage guide](https://get.vial.today/manual/)

![img](/assets/GB3/pikatea-macropad-gb3-Vial.png)


## Example Uses
This is a list I've generated of useful ways and programs to use the Pikatea Macropad with. This is just an example. In reality, the possibilities are endless. Suggest more use cases on the discord channel

**Music control** - My favorite way to use the Pikatea Macropad. I usually configure 3 buttons for Play/Pause, Next, and Previous songs. The knob is used to control volume. This works well with Spotify. Pair with Toastify for an even better experience.

**Screenshots** - Configure a macro to press Menu+Shift+s to open up the screenshot tool on Windows 10.

**SoundSwitch** - This is an amazing computer program that makes it very easy to switch audio devices with a macro or hotkey.

**In conjunction with AutoHotkey** - AutoHotkey is a powerful scripting language that can do automated tasks. It can be triggered by a hotkey press so it's perfect to use with the Pikatea Macropad.

**Streaming** - Configure OBS or other streaming platforms to change scenes or camera angles. We like to have a button to blank the display.

**Video Editing** - Program the knob to press the correct keys to move the timeline back and forth for any video editing program. 

**Monitor Control** - Use MultiMonitorTool or MonitorSwitcher to make switching monitor configurations easy. Combine it with your macropad to make it even easier!

## deej Software Usage
The Pikatea Macropad works with deej but some simple programming in the Arduino environment will be required. deej is an open-source hardware volume mixer for Windows and Linux PCs. It lets you use real-life sliders (or in this case, your Pikatea Macropad) to seamlessly control the volumes of different apps (such as your music player, the game you're playing, and your voice chat session) without having to stop what you're doing.

*Important note: deej is a 3rd-party program. The macropad uses a rotary encoder - which isn't officially supported with deej - and as such might not interact super-intuitively with config options such as "noise_reduction"*

Setting up your macropad to work with deej requires a little bit of programming. Don't be intimidated, every step is outlined and detailed to make it as easy as possible. If you have questions, ask on discord! We are happy to assist.

[Follow this guide to get started with using deej]()
 
## QMK and VIA Programming
The Pikatea Macropad is compatible with QMK and VIA firmware.

[Pikatea QMK Fork](https://github.com/JackPikatea/qmk_firmware) - Use this fork to create your own firmware powered by QMK and/or VIA

## Troubleshooting
Vial isn't detecting the device!
* Make sure you have the correct version of Vial installed for the firmware (in this case it's 0.4 beta). If you are on linux, [make sure to follow the udev portion of the install](https://get.Vial.today)
* reflash the firmware

Sometimes the device doesn't work as expected. If this is the case, we can do a replacement/repair up to 3 months after receiving your device.

Have some advice or need more help? Let us know on [Discord](https://www.pikatea.com/discord) or through our [Contact Us](https://www.pikatea.com/pages/contact-us) form.

<Footer/>
