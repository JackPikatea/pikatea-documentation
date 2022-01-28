# FinnGus Keyboard Kit Assembly Guide

Congrats on receiving your FinnGus Keyboard Kit. This guide will walk you through the process of assembling your device! Also, due to the DIY nature of this hobby, as soon as a soldering iron touches or other modifications happen to the board, I am no longer able to issue a refund/replacement. Please refer to the terms and conditions listed on my site for more info.

--------------
## What's in the Box
![](/assets/FinnGus/DSC09052.jpg)
- A - (1) 3D Printed Head
- A - (1) 3D Printed Middle
- A - (1) 3D Printed Tail
- B - (1) Circuit board
- A - (1) FR4 Top Plate
- C - (1) Clear Acylic Backplate
- \-- - (81) Switches (If selected)
- \-- - (1) Set of stabilizers (If selected)
- D - (1) Knob
- E - (1) Rotary encoder (no hardware needed)
- F - (1) Allen wrench (1/16th)
- G - (1) Pro Micro
- H - (1) Pro Micro Socket
- I - (1) I/O Chip
- J - (1) I/O Chip Socket
- K - (75) Diodes
- L - (8) M3x8mm button head socket heads
- M - (2) M3x6mm socket head screws
- A - (12) M3x6mm socket head screws (already installed in case)

Please double check everything is here! There is a small chance we forgot something or that your order is wrong; in the case this is true, please reach out via email at support@pikatea.com and we will work with you to get it right.

--------

## Gather Required Materials

You will need everything that comes with the kit as well as a few other items. Those additional items include:
- USB-C cable
- Soldering iron and solder
- Philips head screw driver
- Allen wrenches (1.5mm (included) and 2.5mm)
- Flush cut snips
- about 3-4 hours time

Now that you have everything you need, lets get started!

-----

### Combine Case Sections

The case is divided into 3 sections which are attached together with the top plate. **We plan on completing this step for you but you may have to finish it.**

![](/assets/FinnGus/DSC08945.JPG)

Use the M3x6mm socket head screws to attach the top plate to each of the 3 case sections. You will be creating/cutting the threads into the plastic. Be sure not to apply too much pressure otherwise you might strip the threads you are creating. Start with the 2 holes close to each other in the center-top and center-bottom of the board (belly and back). This way, if you do strip the hole, it is not an issue since another hole is right next to it. Use this to practice and get a feeling for the correct amount of tension.
![](/assets/FinnGus/DSC08943.JPG)
![](/assets/FinnGus/DSC08944.JPG) 
With the case section assembled, set it aside for now.

-------

## Prepare The PCB

The PCB is the most complicated part so we've broken it down into partial steps

#### 1. Flash The Firmware

Let's start with flashing the firmware onto the included Pro Micro to make sure that is working. Plug it into your computer using a USB-C cable.

We already have a [generic guide for flashing firmware](/firmware-download-and-update-guide.html) which is here. Follow that guide and use the FinnGus firmware which can be downloaded from that page. Since there is no reset button on the pro micro, reset the device by connecting the pins RESET and GND with a metal object (a bent paper clip works well)
![](/assets/FinnGus/DSC08955.JPG)
[Download and install Vial](https://get.vial.today) and make sure your computer recognizes the device as a FinnGus before moving on.

#### 2. Solder In The I/O Chip And Pro Micro

The kit includes a socket for both the Pro Micro and the I/O expansion chip. 

Prepare the Pro Micro socket by cutting one of the connecting bits of plastic so the USB port does not interfere with it. DO NOT USE FLUSH CUTS. Use a hacksaw. The plastic is brittle and breaks easily. Because of this, **we have already completed this step for you.**
![](/assets/FinnGus/DSC08956.JPG)

Place the Pro Micro socket into the PCB like shown and solder it into place. Be sure the socket is flush. Start with a corner, and verify. Solder the other corner and verify again. Finally, solder the rest of the pins.
![](/assets/FinnGus/DSC08959.JPG)
![](/assets/FinnGus/corners.png)
![](/assets/FinnGus/full_pro_micro_socket.png)

Place the Pro Micro UPSIDE DOWN with the components facing away from you. Insert legs from the included diodes into each hole and use flush cuts to snip the excess off. Finally solder the cut diodes legs to the Pro Micro. 

![](/assets/FinnGus/insert_diodes.png)
![](/assets/FinnGus/show_pro_micro.png)

Place the DIP socket into the PCB like shown and solder it into place. Like the Pro Micro socket, make sure it is flush.

![](waiting on shipment)

Insert the I/O expansion chip into the DIP socket. Pay special attention to the orientation. The indent/mark should be facing towards the north part of the board.

![](waiting on shipment)

#### 3. Solder In The Diodes

1. Bend the diode and insert it into the PCB being careful it is the correct orientation. The black bar on the diode matches with the thicker white bar on the PCB. 
![](/assets/FinnGus/DSC08961.JPG)
2. After the diode is inserted bend the leads outwards so it stay in place. Repeat steps 1 and 2 for each diode
![](/assets/FinnGus/DSC08965.JPG)
3. Finally after each diode has been inserted, solder each one.
![](get from screen grab)
4. Bend the diodes legs straight and use flush cuts to them off. Be careful not to scratch the PCB when doing this.
![](get from screen grab)

#### 4. Solder In The Encoder

Flip the PCB to the front side facing you. Insert the rotary encoder into the footprint as shown. Make sure the encoder is as perpendicular as possible before soldering the connections.  
![](done)
![](done)

#### 5. Screw In The Stabilizers

Install the stabilizers. They usually screw in but some might clip in. TODO link to stabilizer tutorial 
![](done)

#### 6. Verify And Test

While not strickly necessary. I like to test the PCB at this point before I solder in the switches.

Plug in the keyboard. Open Vial and select the keyboard in the top drop down menu. From there select the **matrix tester** tab. This will show you every keypress. Test each key by using a metal object and connecting the switch pads together. 
![](done)
![](grab screenshot. maybe.)

---------------------

## Install The Switches Into The Top Plate

Insert the switches you'd like to use with the LEDs facing south
![](done)
Check that all the pins are not bent and facing straight up.
![](done)
Make sure they line up with the layout you'd like to use. Dry fit the PCB to make sure everything lines up/works.  Make sure you haven't forgotten the stabilizers. Be as careful as possible to not scratch the PCB with the switch leads.

----------------------

## Solder 1/2 Of The Corner Switches

Make sure you havn't forgetten the stabilizers!

The next step is to solder the PCB to the switches but it's recommended to do it in a particular way.

Start with 1 switch in the "corners" of the PCB. Solder only 1 lead (1 out of 2). The goal is to make sure the PCB is siting up against the back of each switch before moving on.

-----------------------

## Solder The Switches

After the PCB is in place and up against the switches, solder the rest of the switches. I like to solder half of each switch first and then come back and finish each switch

----------------------

## Screw In The Encoder Section Of The PCB

The Encoder is not PCB mounted so that section of the PCB has to be supported. Use the include M3x6mm socket head screws and screw the PCB to the case near the encoder as shown below
![](done)

-------------------

## Attach Knob

Use the Allen wrench included to bring the set screw inside the knob so that it barely pokes through the internal hole. Place the knob on the encoder shaft so that the set screw interfaces with the flat part of the encoder shaft. After it is in place, tighten the set screw.  **Be careful not to over tighten with the 3D printed knobs or it will strip. Error on the side of too loose since it can be tightened later.**

![](done)
![](done)

--------------------

## Install The Keycaps

Install the keycaps. Below is the default key layout.
![](done)

---------------------

## Test

Open Vial and navigate to the matrix tester one last time. Press every key and make sure they all work.

-------------------------

# Install The Clear Backplate

Remove the protective paper from the clear acrylic backplate. Flip the FinnGus so the backside is facing you and use the M3x8mm button socket heads.

------------------------

## Enjoy

That's it! You've Done it! Congratulations! Head on over to the user guide to get an idea of how to use VIAL and program your keyboard to your liking!

----------------------

## Troubleshooting

Nothing yet. If you have issues, reach out to us and this will be updated accordingly.

<Footer/>