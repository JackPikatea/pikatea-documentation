# Longboi Assembly Guide

<!-- <div style="background-color: yellow; color: black;">If your product is listed under the "Assembly Guides" on the left, disregard this universal guide and follow the specific one instead.</div> -->

# NOTE This guide is a work in progress

# Flash the MCU

It's important to flash the MCU before starting to make sure it works.

1. Download the .uf2 file for the device from the [firmware list](/DownloadsAndFiles/firmware-download-list.html). 
2. While holding the boot button, plug the MCU into the computer. 
3. Drag the .uf2 file into the new drive that shows up. Confirm the device shows up in VIAL after it disconnects and reconnects.

TODO(add photos)

# Solder the Diodes

1. Bend a diode and insert it into the PCB being careful it is the correct orientation. The black bar on the diode matches with the thicker white bar on the PCB. 

![](/assets/R26/DSC00104.JPG)
![](/assets/R26/DSC00107.JPG)

2. After the diode is inserted, bend the leads outwards so it stays in place. Repeat steps 1 and 2 for each diode.

![](/assets/FinnGus/DSC08965.JPG)

3. With each diode in place, Solder them to be permanently secured.

![](/assets/Longboi/PXL_20240112_212301245.jpg)

4. Bend the diodes legs straight and use flush cuts to them off. Be careful not to scratch the PCB when doing this.

![](/assets/R26/DSC00113.JPG)
![](/assets/R26/DSC00114.JPG)
![](/assets/R26/DSC00115.JPG)
![](/assets/Longboi/PXL_20240112_212304293.jpg)


# Stabilizers

1. Install PCB mounted stabilizers. 

They usually screw in but some might clip in. Below are a few links that explain keyboard stabilizers and how to install them. You'll need a stabilizer for each key that is 2u or larger.

- [Stabilizers](https://keyboard.university/100-courses/stabilizers-lcjf2)
- [Uisng Screw-in Stabilizers](https://keyboard.university/guides/using-screw-in-stabilizers-7nxj6)

![](/assets/FinnGus/DSC08969.JPG)

# Trim The Headers

The headers need to be trimmed or the backplate will not fit. This is especially true for keyboards that have less than 4 rows. We recommend always trimming them. (Different boards will have different MCUs which will have different amounts of headers.)

1. Cut the longer side of the headers in half as shown. It doesn't have to be precise.

![](/assets/R26/DSC00124.JPG)
![](/assets/R26/DSC00126.JPG)
![](/assets/R26/DSC00127.JPG)

# Solder MCU

1. Insert the trimmed headers into the PCB.

![](/assets/Longboi/PXL_20240112_212503890.jpg)

2. Add the MCU on top. 

![](/assets/Longboi/PXL_20240112_212518383.jpg)

3. Use a rubber band to hold everything in place.

![](/assets/Universal/rubber-band.jpg)

4. Solder both sides of the headers to perminently hold everything together.

![](/assets/Universal/solderd-mcu.jpg)

# Switches and Plate

The switches and the plate steps go together. It's your preference on the exact way to do it. If you're new to assembling keyboards, we recommend trying the order outlined

1. Install a few switches into the plate.

![](/assets/KP69/PXL_20221015_192144836.jpg)

2. Install the plate and switches on the PCB, solder one lead of each switch if it's a soldered board.

![](/assets/KP69/PXL_20221015_192609392.jpg)

3. Verify switches are sitting flush.

4. Insert the remaining switches into the plate.

![](/assets/KP69/PXL_20221015_192844074.jpg)
![](/assets/KP69/PXL_20221015_193859037.jpg)

5. finish soldering all the remaining switches.

![](/assets/R26/DSC00143.JPG)

# Rotary Encoders

WIP install rotary encoders

# Test the PCB

1. Plug the finished MCU into the computer and open VIAL. Verify that each switch works by using the matrix tester in VIAL.

![](/assets/KP69/PXL_20221015_201135868.jpg)

oops I missed a switch!

![](/assets/KP69/PXL_20221015_201218505.jpg)
![](/assets/KP69/PXL_20221015_201227040.jpg)

# Add gaskets

If you are assemblying the acrylic version, you'll add the gaskets to the plate. Otherwise, for the 7ft version, you'll add the gaskets to the backplate.

TODO images

# Assemble The Case

## Acrylic
1. peal back the plastic on each acrylic peice.

TODO add photo

2. Start with "back layer 3" as shown

3. Add "back layer 2" as shown

4. Add "back layer 1" as shown

5. Insert M3x16mm bolts into each hole

6. Tip assembly on it's side

7. Attach hex standoffs

8. Add remaining hex standoff with M3x10mm bolts

9. Rotate assembly as shown. Add "USB layer 1" (there is a notch which helps to distinguish from another similar layer). You may need to rotate the hex standoffs so it fits. 

10. Add "USB layer 2". 

11. Add "Mid layer 1" and "Mid layer 2" (These peices are the same)

12. Add the PCB/Plate assembly.

13. Add "top plate 1 and 2". These are the same except for one is completely glossy and one has a matte finish. If you'd prefer a glossy finish, you are more than welcome to use that instead.

14. Add final M3x10mm bolts to complete the assembly.

15. Add keyboard feet

# Add keycaps and knobs

todo photo of knobs

# That's it!

1. Celebrate. It's required.

Check out the [programming guide](/programming.html) to learn more about how to use your device.