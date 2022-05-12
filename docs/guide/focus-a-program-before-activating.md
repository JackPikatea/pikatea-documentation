### Focus a Program Before Activating a Macro

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
#### Make changes to the code
1. Change **chrome.exe** to the program you would like to have focused
2. The following part will open the program if it is not already running. Change the path to the program you want. Delete this section if you don't want this functionality.
```
else
	run, "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
```
3. Change **F15** to any F13-F24 you would like. This is the key that activates the program.

Configure your macropad so that one of the keys is F15 or the matching F key.

Now, if the script is running, and the button is pressed, the program should become active.

#### Add more commands after activating the program
Bringing a window into focus isn't super useful unless it's followed by some action. There is two ways to do that. First and the simplest is by configuring a macro on the device and the second and more complicated is by adding "Send" commands to the AutoHotKey script.

Configure a macro like this to first activate the window and then send the hotkey. Add a delay to give the script enouch time to focus the window.

INSERT IMAGE TODO

or, add more commands to the end of the AHK script. The [Send Command](https://www.autohotkey.com/docs/commands/Send.htm) is the most useful in this senario.

TODO add example code