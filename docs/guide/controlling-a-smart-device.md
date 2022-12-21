# Controling a Smart Device

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
    1. open Vial and assign one of the buttons to press the F24 key. This should activate the script

That's it! Now when you press the F24 key, AHK will send a web request to the URL and IFTTT will toggle the device.