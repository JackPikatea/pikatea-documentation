### Software Audio Mixing

Control the volume of programs independly of each other to get the perfect sound mix. 

## Method 1 - Midi-Mixer

TODO

## Method 2 - Volume Squard

Download Volume Squared [Volume²](https://github.com/irzyxa/Volume2), downloading the right one for install. Download and follow the installation instructions. Once you do that, load up the settings of the app. In the main window, to get the most accurate volume control set the "Control Method" to Logarithmic, with the steps being 100. On top it will have a selection for the audio device you want to use, setting that to whatever you decide to control the volume from. That will be set to Windows Default as default. There is a selection you can do for "Change Volume For", which if set to application list, you press the gear, and add programs either via the process that is running or by navigating to the file location. This will then change the default windows volume changing over to the program you have selected. Once you do that, to change windows volume as a whole, hold down shift + use the volume knob. This will now allow you to ocntrol the volume off apps separate when they are opened up.

## Method 3 - AHK and NirCmd

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