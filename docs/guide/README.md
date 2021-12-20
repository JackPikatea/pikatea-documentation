# Pikatea Macropad Tips and Tricks

This is a collection of extra tips and tricks you can utilize to increase the functionality of your macropad. This guide also applies to any device or macropad that uses Vial. 

This list is heavily curerated by the community of people who use Pikatea Macropads. Thank you! If you've got questions, ask us in Discord.

## Controlling Music

Setup 1 button to play/pause music, 1 to skip to the next song and 1 to go back to the previous song. This is configured by default for Pikatea Macropad GB3

## Muting Your Microphone Globally

Muting your microphone globally is very handly since you do not have to configure program specific hotkeys.
#### Windows
Use [**Microsoft PowerToys**](https://docs.microsoft.com/en-us/windows/powertoys/) or [**SoundSwitch**](https://soundswitch.aaflalo.me/)

We recommend using Microsoft PowerToys since it comes with a host of other features and updates regularly.

#### Mac OS X

Use Automater and [follow this guide](https://medium.com/macoclock/how-in-the-bleep-do-i-mute-my-mic-anywhere-on-macos-d2fa1185b13) 

## Software Audio Mixer - deej Alternative

Control the volume of programs independly of each other to get the perfect sound mix. This is a completly software alternative to deej, no flashing or firmware change is required.

### Method 1

Download Volume Squared [Volume²](https://github.com/irzyxa/Volume2), downloading the right one for install. Download and follow the installation instructions. Once you do that, load up the settings of the app. In the main window, to get the most accurate volume control set the "Control Method" to Logarithmic, with the steps being 100. On top it will have a selection for the audio device you want to use, setting that to whatever you decide to control the volume from. That will be set to Windows Default as default. There is a selection you can do for "Change Volume For", which if set to application list, you press the gear, and add programs either via the process that is running or by navigating to the file location. This will then change the default windows volume changing over to the program you have selected. Once you do that, to change windows volume as a whole, hold down shift + use the volume knob. This will now allow you to ocntrol the volume off apps separate when they are opened up.

### Method 2

You'll need to install two programs to do this, **AutoHotKey**, and **NirCmd**.

#### Download NirCmd
Download the 64-bit version of NirCmd from [https://www.nirsoft.net/utils/nircmd.html](https://www.nirsoft.net/utils/nircmd.html). The download is at the bottom of the page. 

(Note: Like all good Windows utilities, the website looks like something from 1995...)

Copy the "NirCmd.exe" executable in the zip file you downloaded to your C:/Windows directory. You'll need admin permisions

#### Setup AutoHotKey
Install autohotkey and create a script. [View the guide for getting started with AHK](#installing-and-using-autohotkey). Give it a meaningful title. Let's configure the macropad before editing the script.

#### Configure the Macropad

The setup for the pad is simple. Map every key to something you won't ever use. I like setting the five keys on my macropad to F13, F14... and so on. These are essentially dummy keystrokes, and their only function is to be caught by our AutoHotKey script.

As for the knob, you can either map it to volume up/down or dummy keystrokes, depending on whether you want the knob to control system volume when you don't have anything pressed or not. I'm going to go with volume up/down for this script.

#### Edit AutoHotKey Script

Right click and edit the script you created ealier. Go ahead and remove everything that is already there.

First place this at the top of the file.
```
#NoEnv
#Warn
#SingleInstance, Force
#MaxHotkeysPerInterval 2000
```

And then the useful bit.

```
F13 & Volume_Down:: Run, nircmd changeappvolume firefox.exe -0.05
F13 & Volume_Up::Run, nircmd changeappvolume firefox.exe +0.05
```

In the above script, holding the F13 key (i.e. whichever key we mapped on the pad to send F13) and turning the knob (volume down or up, again, like we've set it on the pad), will trigger a the nircmd command to change the application volume for firefox.exe by an interval of 0.05.

Copy and paste for each key, changing the application name each time to suit. You can also do multiple apps at once. The 'return' at the end just closes off the command, so don't forget to include it!

```
F15 & Volume_Down::
	Run, nircmd changeappvolume spotify.exe -0.05
	Run, nircmd changeappvolume winamp.exe -0.05
	Run, nircmd changeappvolume itunes.exe -0.05
return
F15 & Volume_Up::
	Run, nircmd changeappvolume spotify.exe +0.05
	Run, nircmd changeappvolume winamp.exe +0.05
	Run, nircmd changeappvolume itunes.exe +0.05
return
```

## Controling a Smart Device

Use your Pikatea Macropad to control a smart device connected to your network. Toggle your LED lights or smart outlets. This relies on the service IFTTT or Push Bullet, so any device that works with those servies (Almost all smart devices) could be controlled!

This guide is for Windows but the concepts could be applied to Mac Or Linux

1. Create an IFTTT account and link your smart device to the service. Every device is different so we won't explain the process but if you are having issues search on the internet for "how to connect (smart device) to IFTTT"

2. Create a new **Webhook** recipe.
    1. Select **Create** in the top menu. You should be presented with an "If this, Then That."
    2. Select **Add** next to "If This". search for "webhook" and select it. Then select "Recieve a web request".
    3. Type in an event name. It just needs to be unique. For this example, "lights". (it is case sensitive so I would recommend only lower-case). Select **Create Trigger**.
    4. Select **Add** next to "Then That". Search for the device you would like to control. Each device is different so it's hard to show the steps. In this example I'm selecting "MagicHue" which is the brand of lights I use. Then I'm selecting "Toggle Lights on/off" since that's what I would like to happen.
    ![img](/assets/ExtraTipsAndTricks/IFTTT-filled.png)
    5. Click **Continue** and, give your applet an appropriate title and then click **Finish**
3. Get your webhook URL
    1. Go to "My Services" by clicking your profile icon and the clicking **My services**. This shows all the connected services to your account.
    2. Scroll down to "Webhooks" and select it. On the next page, select Documentation.
    3. You should now be at the Webhook documentation page. Under "Make a POST or GET web request to:" type in the event name you used earlier. In this example, it's "lights"
    ![img](/assets/ExtraTipsAndTricks/IFTTT-url.png)
    4. With the URL filled out, copy it and paste it in your web-browser. It should come back with a response and do you the "That" action you selected it to. In this example, it toggles my lights.
    5. Save the URL you used. we will be using it later.

4. Install autohotkey and create a new script.
    1. Install autohotkey and create a script. [view the guide for getting started with AHK](#installing-and-using-autohotkey). Give it a meaningful title like "smart lights". Right click and edit the script.
    2. replace the contents of the file with the following code
    ``` 
    #NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
    ; #Warn  ; Enable warnings to assist with detecting common errors.
    SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
    SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

    F24::UrlDownloadToFile, https://maker.ifttt.com/trigger/EVENTNAME/with/key/mlNxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx, C:\temp.txt
    
    ```
    3. Replace the URL with the URL you saved earlier
    4. save the script and run it. 

5. Configure Macropad
    1. open Vial and asign one of the buttons to press the F24 key. This should activate the script

That's it! Now when you press the F24 key, AHK will send a web request to the URL and IFTTT will toggle the device.

## Focus a Program Before Activating a Macro

Lots of programs only react to hotkeys and macros if the program is in focus. For example, Microsoft Teams mute only works if Microsoft Teams is the current active window. This Autohotkey script will focus the program you want before activing aditional commands.

Install autohotkey and create a script. [View the guide for getting started with AHK](#installing-and-using-autohotkey). Give it a meaningful title. Right click and edit the script.

Replace the code in the script with the following
```
F15::
IfWinExist ahk_exe chrome.exe
	winactivate ahk_exe chrome.exe
else
	run, "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
WinWait ahk_exe chrome.exe
WinActivate ahk_exe chrome.exe
WinWaitActive ahk_exe chrome.exe
```
#### Some notes on the code
1. Change **chrome.exe** to the program you would like to have focused
2. This part will open the program if it is not already running. change the path to the program you want. Delete this section if you don't want this functionality
```
else
	run, "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
```
3. Change F15 to any F13-F24 you would like. This is the key that activates the program.

Configure your macropad so that one of the keys is F15 or the matching F key the program needs.

now, if the script is running, and the button is pressed, the program should become active.

#### Add more commands after activating the program
Bringing a window into focus isn't super useful unless it's followed by some action. There is two ways to do that. First and the simplest is by configuring a macro on the device and the second and more complicated is by adding "Send" commands to the AutoHotKey script.

Configure a macro like this to first activate the window and then send the hotkey. Add a delay to give the script enouch time to focus the window.

INSERT IMAGE

or, add more commands to the end of the AHK script. The [Send Command](https://www.autohotkey.com/docs/commands/Send.htm) is the most useful in this senario.

## Installing and Using AutoHotKey

Lots of these extra tips and tricks use the program [AutoHotKey](https://www.autohotkey.com/) (AHK for short) which is a free program that makes manipulating windows a lot easier.

Go to [the Autohotkey Website](https://www.autohotkey.com/) and download and install the current version.

Autohotkey (AHK) relies on what they call scripts. To create a new AHK script, right click in your file explorer and select "new" and then "AutoHotKey Script". 
![img](/assets/ExtraTipsAndTricks/AHK-context-menu.png)

This will create a text file with an extension (.ahk) which you can edit by right clicking and selecting "open with" and then selecting "notepad" or a different text editor.
![img](/assets/ExtraTipsAndTricks/AHK-edit-file.png)

To run the script, just double click on it. An icon should appear in the icon try. Right clicking on that will give you the option to stop the script, reload it and other options.
![img](/assets/ExtraTipsAndTricks/AHK-tray-menu.png)

Place the script in your windows startup folder so that it runs automatically when you turn on your computer.

You can find the offical documenation for AHK at [https://www.autohotkey.com](https://www.autohotkey.com/) but this should give you enough info to get started.

<Footer/>
