# Pikatea Macropad R26 Desktop Kit Assembly Guide
Congratulations on receiving your Pikatea Macropad R26 Desktop Kit. This guide will walk you through the assembly process. Please email support or ask on Discord if you have any questions.

Here is a video for those that prefer it. (This is for the round 1 version but the concepts still apply!)

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/H_TdUE3AGE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

## Looking for the Round 1 Assembly Guide?
This assembly guide is for round 2 macropad (shipped in August 2022). If you are looking for round 1 (the R26 without LED support), you can find it here.
[R26 round 1 guide](/PikateaMacropadR26/pikatea-macropad-r26-desktop-kit-assembly-guide.html)

## What's in the Box
![Image of items](/assets/R26r2/PXL_20220824_221258475.jpg)
### All Orders
* (1) FR4 Top plate
* (1) Circuit board
* (1) Acrylic Backplate
* (1) Arduino Pro Micro with headers
* (1) Rotary encoder with hardware (washer and nut)
* (1) 1/16th inch Allen wrench
* (1) Hardware
* (2) Rubber feet
### Some Orders/Optional Items
* (8) Mechanical keyboard switches
* (8) Keycaps
* (1) Knob
### 3D printed
* (1) Shard or Flat style case
* (1) Set of brackets

## 3D Print Parts If Necessary
You may have opted to 3D print the case yourself. [Here are files](/DownloadsAndFiles/downloadable-files.html#firmware-files) under R26. You'll need to print a case (either flat or shard) and a set of brackets.

CAD files are provided so feel free to modify and make your own designs.

## Gather Required Materials
You will need everything that comes with the kit as well as a few other items. Those additional items include:

* Soldering iron and solder
* 2mm allen wrench
* Flush cut snips
* wire cutters
* Pliers, adjustable wrench or 10mm size socket/wrench for the rotary encoder hardware.
* Roll of tape (any kind will do)

Now that you have everything you need, lets get started!

## Flash the Pro Micro

You will want to flash the Pro Micro before any soldering to make sure that it works. Plug it into your computer using a USB-C cable.

We already have a [generic guide for flashing firmware](/DownloadsAndFiles/firmware-download-and-update-guide.html) which is here. Follow that guide and use the R26 Desktop (round 2) firmware which can be downloaded from that page. Since there is no reset button on the Pro Micro, reset the device by connecting the pins RESET and GND with a metal object (a bent paper clip works well). [Download and install Vial](https://get.vial.today) and make sure your computer recognizes the device as a R26 Desktop before moving on. 

![](/assets/R26/DSC08955.JPG)

While **technically** this step can be done later, it's highly recommended to test the pro micro before soldering it with the kit. It will save lots of time while assembling. Contact support or ask in our Discord if you are having issues with this step.

## Prepare the Circuit Board

Heres a quick video of this step!
<center><iframe width="560" height="315" src="https://www.youtube.com/embed/TcwzeGnfsL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

Let's begin by preparing the PCB or Circuit Board. Please pay attention to the orientation of components.

### Trim The Headers
The headers need to be trimmed or the backplate will not fit. Cut the longer side of the headers in half as shown. It doesn't have to be precise. Cut one of the headers into 2 sets of 5 so that you have one 12pin header and two 5pin headers.

![](/assets/R26/DSC00124.JPG)
![](/assets/R26/DSC00126.JPG)
![](/assets/R26r2/PXL_20220824_221456438.jpg)

### Solder The Pro Micro
With the Pro Micro confirmed to be working, let's go ahead and install it. Please pay special attention to the orientation of the Pro Micro. Insert the headers with the "cut" side facing you. Place the Pro Micro on top as shown.

![](/assets/R26r2/PXL_20220824_221531399.jpg)
![](/assets/R26r2/PXL_20220824_221602391.jpg)

Use a rubber band to hold it in place and solder the 4 corners of each side.

![](/assets/R26r2/PXL_20220824_221809087.jpg)

Remove the rubber band and finish soldering the headers. With that, the PCB is done! Verify with the pictures below.

![](/assets/R26r2/PXL_20220824_221957121.jpg)
![](/assets/R26r2/PXL_20220824_222000402.jpg)

## Install The Switches
Press the switches into the FR4 plate. Make sure they all face the same direction. Ensure each switch pin is a straight as possible.

![](/assets/R26r2/PXL_20220824_222203175.jpg)
![](/assets/R26r2/PXL_20220824_222207008.jpg)
![](/assets/R26r2/PXL_20220824_222239980.jpg)

## Attach The PCB To The Plate/Switches
Place the PCB on the switches. It may actually be easier to remove the switches and install them one at a time if you prefer.

![](/assets/R26r2/PXL_20220824_222256301.jpg)
![](/assets/R26r2/PXL_20220824_222300442.jpg)

## Prep And Install The Encoder
It's a lot easier to install the encoder if parts of it are trimmed off. While this is not strictly necessary, it's recommended. Cut and bend the encoder as shown.

![](/assets/R26/DSC00149.JPG)

Place the encoder in the plate/PCB and secure it with the included hardware. Do not fully tighten the encoder until AFTER soldering it in place. Adjust the encoder so that it is centered and straight.

![](/assets/R26r2/PXL_20220824_222536405.jpg)
![](/assets/R26r2/PXL_20220824_222746371.jpg)
![](/assets/R2r2/PXL_20220824_222819245.jpg)
6
Use the case to hold the PCB assembly so that it does not wobble while soldering. Start with the 2 button pins and move to the A, GND, and B pins. You can bend the A, GND, and B pins if you feel it is necessary.

![](/assets/R26r2/PXL_20220824_222920896.jpg)
![](/assets/R26r2/PXL_20220824_223004152.jpg)
![](/assets/R26r2/PXL_20220824_223027441.jpg)
![](/assets/R26r2/PXL_20220824_223047696.jpg)

Fully tighten the encoder. We recommend hand tightening with a 10mm socket.

![](/assets/R26r2/PXL_20220824_223121253.jpg)

## Verify The PCB Works
Open Vial again. The R26 should show up. Go to matrix tester and test each button. (The matrix tester will not show the knob actions but you can verify it works because it's mapped to volume control by default)

## Add The Knob
In our opinion, it's best to add the knob now. The knob sits lower if added now but please keep in mind the setscrew will be covered by the case so if you plan on removing the knob, you'll have to remove the case. This doesn't take too long and we think it's worth the effort. You can add the knob later if you like.

Attach the knob to the flat part of the shaft if the knob you are using has a setscrew. Screw it into place.

![](/assets/R26r2/PXL_20220824_223133470.jpg)
![](/assets/R26r2/PXL_20220824_223149460.jpg)
![](/assets/R26r2/PXL_20220824_223206399.jpg)

## Add The Case
With the Plate and PCB together, it's time to install the case. Use the included M2.5x10mm bolts and printed brackets to secure the plate to the case. We recommend using a roll of tape to prevent the device from wobbling. Start with the two side brackets and loosely put them in place. Adjust the PCB/plate so the knob and switches are as close to center as possible. Fully tighten the side brackets when you are satisfied with the alignment. **Be sure not to over tighten, error on the side of too loose**. Add the remaining top and bottom brackets.

![](/assets/R26r2/PXL_20220824_223232507.jpg)
![](/assets/R26r2/PXL_20220824_223240804.jpg)
![](/assets/R26r2/PXL_20220824_223254159.jpg)
![](/assets/R26r2/PXL_20220824_223501207.jpg)
![](/assets/R26r2/PXL_20220824_223517358.jpg)
![](/assets/R26r2/PXL_20220824_223537333.jpg)

## Install The Keycaps
Install the keycaps onto the switches. Verify everything is lined up how you like. If you need to make an adjustment, loosen the brackets, make the adjustment and tighten them back down.

![](/assets/R26r2/PXL_20220824_223711311.jpg)

## Add The Backplate
Install the acrylic or 3D printed backplate using the M3x8mm button head screws. Get each screw started before tightening them down. **Again, Error on the side of too loose (the acrylic can crack!)**. 

![](/assets/R26r2/PXL_20220824_223839257.jpg)
![](/assets/R26r2/PXL_20220824_223911280.jpg)
![](/assets/R26r2/PXL_20220824_224022686.jpg)

Add the rubber feet where you'd like.

![](/assets/R26r2/PXL_20220824_224052399.jpg)
![](/assets/R26/DSC00181.JPG)

## Done
That's it! You've built the Pikatea Macropad R26. Head over to the [R26 user guide](/PikateaMacropadR26/#programming-and-usage) for instructions on programming and usage
