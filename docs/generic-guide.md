# Universal Product Assembly Guide

Most of our products are built exactly the same way so we've make one universal guide you can follow to assemble your keyboard or macropad kit. 

<div style="background-color: yellow; color: black;">If your product is listed under the "Specific Assembly Guides" on the left, disregard this universal guide and follow the specific one instead.</div>

# NOTE This guide is a work in progress

# Flash the MCU

It's important to flash the MCU before starting to make sure it works.

1. Download the .uf2 file for the device from the [firmware list](/DownloadsAndFiles/firmware-download-list.html). 
2. While holding the boot button, plug the MCU into the computer. 
3. Drag the .uf2 file into the new drive that shows up. Confirm the device shows up in VIAL after it disconnects and reconnects.

TODO(add photos)

# Solder the Diodes

1. Bend the diode and insert it into the PCB being careful it is the correct orientation. The black bar on the diode matches with the thicker white bar on the PCB. 

![](/assets/R26/DSC00104.JPG)
![](/assets/R26/DSC00107.JPG)

2. After the diode is inserted, bend the leads outwards so it stays in place. Repeat steps 1 and 2 for each diode.

![](/assets/FinnGus/DSC08965.JPG)

3. With each diode in place, Solder them to be permanently secured.

![](/assets/R26/DSC00112.JPG)

4. Bend the diodes legs straight and use flush cuts to them off. Be careful not to scratch the PCB when doing this.

![](/assets/R26/DSC00113.JPG)
![](/assets/R26/DSC00114.JPG)
![](/assets/R26/DSC00115.JPG)
![](/assets/R26/DSC00116.JPG)

# Solder Hotswap Sockets

1. If any come with your kit, you'll need to solder them now. Most keyboards will at least have a few hotswap sockets that go under the MCU. 

![](/assets/Universal/hotswap-under-MCU.JPG)

![](/assets/Universal/MCU.JPG)


# Stabilizers

1. Install the PCB mounted stabilizers. 

They usually screw in but some might clip in. Below are a few links that explain keyboard stabilizers and how to install them. You'll need a stabilizer for each key that is 2u or larger.

- [Stabilizers](https://keyboard.university/100-courses/stabilizers-lcjf2)
- [Using Screw-in Stabilizers](https://keyboard.university/guides/using-screw-in-stabilizers-7nxj6)

![](/assets/FinnGus/DSC08969.JPG)

# Trim The Headers

The headers might need to be trimmed or the backplate will not fit. This is especially true for keyboards that have less than 4 rows. We recommend always trimming them. (Different boards will have different MCUs which will have different amounts of headers.)

1. Cut the longer side of the headers in half as shown. It doesn't have to be precise.

![](/assets/R26/DSC00124.JPG)
![](/assets/R26/DSC00126.JPG)
![](/assets/R26/DSC00127.JPG)

# Check for Soldered/Hotswap switches under the MCU

Check to see if there are switches that need to be soldered under the MCU. (Most designs will use hotswap sockets)

Example of soldered switches under MCU.

![](/assets/Richard/PXL_20230710_013040690.jpg)

Example of hotswap switches under MCU.

![](/assets/Universal/hotswap-under-MCU.JPG)

* <strong>If your keyboard kit contains soldered switches under the MCU</strong>, it's extremely important to follow a specific order. We also recommend converting them to hotswap with Mil-Max Sockets. Once a switch is soldered, it cannot be removed because the MCU will be covering it (We do our best to avoid this senario but it may be necessary because of design constraints. It's important to double check). <strong>Follow the step order outlined in [The Richard Guide (v1)](/AssemblyGuides/the-richard-macropad-v1-kit-assembly-guide.html)</strong>

* <strong>If your keyboard kit contains hotswap sockets under the MCU</strong>, proceed with this guide as outlined.

# Solder MCU

1. Insert the trimmed headers into the PCB.

![](/assets/Universal/headers-in-pcb.jpg)

2. Add the MCU on top. 

![](/assets/Universal/mcu-on-pcb.jpg)
![](/assets/Universal/mcu-on-pcb2.jpg)

3. Use a rubber band to hold everything in place.

![](/assets/Universal/rubber-band.jpg)

4. Solder both sides of the headers to perminently hold everything together.

![](/assets/Universal/solderd-mcu.jpg)

# OLED

TODO (install the OLED at this point)

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

# Finish Assembly

WIP

- 3D printed cases should be assembled with caution. Do not use a drill.
- Insert and M3 square nuts

# Add Keyboard Feet

![](/assets/KP69/PXL_20221017_200509052.jpg)
![](/assets/KP69/PXL_20221017_200512860.jpg)

# Add keycaps and knobs

# That's it!

1. Celebrate. It's required.

Check out the [programming guide](/programming.html) to learn more about how to use your device.