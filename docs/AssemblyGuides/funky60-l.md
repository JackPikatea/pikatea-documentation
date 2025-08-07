# Funky60L (3D Printed) Assembly Guide

<!-- <div style="background-color: yellow; color: black;">If your product is listed under the "Assembly Guides" on the left, disregard this universal guide and follow the specific one instead.</div> -->
 

<div style="background-color: yellow;">PLA/Printed Plastic can deform in high temperature areas like a hot car or unconditioned space.<br><br><strong>PLEASE DO NOT LEAVE YOUR PRINTED PRODUCT OUTSIDE OR IN A HOT, UNCONDITIONED AREA FOR EXTENDED PERIODS OF TIME.</strong></div>

<br> <br>

## Flash the MCU (Already done)

It's important to flash the MCU before starting to make sure it works. (This should likely be done already!!)

1. Download the .uf2 file for the device from the [firmware list](/DownloadsAndFiles/firmware-download-list.html). 
2. While holding the boot button, plug the MCU into the computer. 
3. Drag the .uf2 file into the new drive that shows up. Confirm the device shows up in VIAL after it disconnects and reconnects.

![](/assets/Longboi/PXL_20240625_150556268.jpg)

## Solder the hotswap socket (Already done)

Before soldering the MCU it's very important that you solder the hotswap socket. 

## Solder the Diodes

1. Bend a diode and insert it into the PCB being careful it is the correct orientation. The black/white bar on the diode matches with the thicker white bar on the PCB. 

![](/assets/Longboi/PXL_20240625_151611254.jpg)
![](/assets/Longboi/PXL_20240625_151647797.jpg)

2. After the diode is inserted, bend the leads outwards so it stays in place. Repeat steps 1 and 2 for each diode.

![](/assets/Longboi/PXL_20240625_151709610.jpg)

3. With each diode in place, Solder them to be permanently secured.

![](/assets/Longboi/PXL_20240112_212301245.jpg)

4. Bend the diodes legs straight and use flush cuts to them off. Be careful not to scratch the PCB when doing this.

![](/assets/Longboi/PXL_20240625_155744290.jpg)
![](/assets/Longboi/PXL_20240112_212304293.jpg)


## Stabilizers

1. Install PCB mounted stabilizers. 

They usually screw in but some might clip in. Below are a few links that explain keyboard stabilizers and how to install them. You'll need a stabilizer for each key that is 2u or larger.

- [Stabilizers](https://keyboard.university/100-courses/stabilizers-lcjf2)
- [Using Screw-in Stabilizers](https://keyboard.university/guides/using-screw-in-stabilizers-7nxj6)

![](/assets/Longboi/PXL_20240625_160912815.jpg)

## Solder MCU (Already done)

1. Insert the headers into the PCB.

![](/assets/Longboi/PXL_20240625_151039818.jpg)

2. Add the MCU on top. 

![](/assets/Longboi/PXL_20240625_151052133.jpg)

3. Use a rubber band to hold everything in place.

![](/assets/Longboi/PXL_20240625_162844899.jpg)

4. Solder both sides of the headers to permanently hold everything together.

![](/assets/Universal/solderd-mcu.jpg)

## Switches and Plate

The switches and the plate steps go together. It's your preference on the exact way to do it. If you're new to assembling keyboards, we recommend trying the order outlined

1. Install a few switches into the plate.

![](/assets/Longboi/PXL_20240625_162559952.jpg)

2. Install the plate and switches on the PCB, solder one lead of each switch if it's a soldered board.

![](/assets/KP69/PXL_20221015_192609392.jpg)

3. Verify switches are sitting flush.

4. Insert the remaining switches into the plate.

5. finish soldering all the remaining switches.

![](/assets/Longboi/PXL_20240625_163528461.jpg)

## Test the PCB

1. Plug the finished MCU into the computer and open VIAL. Verify that each switch works by using the matrix tester in VIAL.

<div style="text-align: center">(the images show a different keyboard but the process is the same)</div>

![](/assets/KP69/PXL_20221015_201135868.jpg)

<div style="text-align: center">oops I missed a switch!</div>

![](/assets/KP69/PXL_20221015_201218505.jpg)
![](/assets/KP69/PXL_20221015_201227040.jpg)

## Add gaskets

Add gaskets to the tabs of the plate on each side

![](/assets/Longboi/PXL_20240721_102435158.jpg)
![](/assets/Longboi/PXL_20240721_102443128.jpg)

# Finish Assembly

With the PCB and plate put together, it's time to assemble the remaining components and complete the keyboard. 

1. Insert square nuts into the "Top" piece of the case. You may have to use a small allen key or other sturdy object to push them into place.

![](/assets/Macrostab/PXL_20240805_195321533.jpg)

2. Place the Plate and PCB assembly into the "Bottom" piece of the case. 

3. Place the "Top" piece onto the "Bottom" piece. The printed triangles match up so that you get the proper orientation. This is important because the "Top" piece is not symmetrical top to bottom.

![](/assets/Macrostab/PXL_20240805_202143474.jpg)

4. Insert the M3x12mm in the front holes and M3x20mm or M3x25mm, whichever is included, into the the back holes. Tighten them down pretty good with an allen wrench.

![](/assets/Macrostab/PXL_20240805_195321533.jpg)
![](/assets/Macrostab/PXL_20240805_202617349.jpg)

# Add Keyboard Feet

![](/assets/Macrostab/PXL_20240805_202829128.jpg)

# Add keycaps

# That's it!

1. Celebrate. It's required.

Check out the [programming guide](/programming.html) to learn more about how to use your device.