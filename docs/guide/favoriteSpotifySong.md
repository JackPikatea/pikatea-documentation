TODO add more documentation for this. Create loops to remove dulplicate code
```#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

FileCreateShortcut, %A_ScriptFullPath%, %A_Startup%\shopifyFavoriteSong.lnk
F14::searchForSpotifyHeart()

searchForSpotifyHeart() {
    WinGet, winid ,, A 
    IfWinExist ahk_exe spotify.exe
	    winactivate ahk_exe spotify.exe
    MouseGetPos, xpos, ypos
    CoordMode, Pixel, Window
    ImageSearch, FoundX, FoundY, 0, 0, 1920, 1080, %A_scriptdir%\assets\heartfilled.png
        if ErrorLevel = 2
            MsgBox Could not conduct the search.
        else if ErrorLevel = 1
            sleep 0
        else
            MouseClick, Left, FoundX+15, FoundY+15
            MouseMove, xpos, ypos
    ImageSearch, FoundX, FoundY, 0, 0, 1920, 1080, %A_scriptdir%\assets\heartfilled2.png
        if ErrorLevel = 2
            MsgBox Could not conduct the search.
        else if ErrorLevel = 1
            sleep 0
        else
            MouseClick, Left, FoundX+15, FoundY+15
            MouseMove, xpos, ypos
    ImageSearch, FoundX, FoundY, 0, 0, 1920, 1080, %A_scriptdir%\assets\heart2.png
        if ErrorLevel = 2
            MsgBox Could not conduct the search.
        else if ErrorLevel = 1
            sleep 0
        else
            MouseClick, Left, FoundX+15, FoundY+15
            MouseMove, xpos, ypos
    ImageSearch, FoundX, FoundY, 0, 0, 1920, 1080, %A_scriptdir%\assets\heart3.png
        if ErrorLevel = 2
            MsgBox Could not conduct the search.
        else if ErrorLevel = 1
            sleep 0
        else
            MouseClick, Left, FoundX+15, FoundY+15
            MouseMove, xpos, ypos
    ImageSearch, FoundX, FoundY, 0, 0, 1920, 1080, %A_scriptdir%\assets\heart4.png
        if ErrorLevel = 2
            MsgBox Could not conduct the search.
        else if ErrorLevel = 1
            sleep 0
        else
            MouseClick, Left, FoundX+15, FoundY+15
            MouseMove, xpos, ypos
    ImageSearch, FoundX, FoundY, 0, 0, 1920, 1080, %A_scriptdir%\assets\heart.png
        if ErrorLevel = 2
            MsgBox Could not conduct the search.
        else if ErrorLevel = 1
            sleep 0
        else
            MouseClick, Left, FoundX+15, FoundY+15
            MouseMove, xpos, ypos
            
    sleep 300
    WinActivate ahk_id %winid%
    
    return
    
}

	```
