# FinnGus Keyboard Kit Assembly Guide

  

Congrats on receiving your FinnGus Keyboard Kit. This guide will walk you through the process of assembling your device! TODO talk more about the guide in general....read through the whole thing thoroly. 

Please double check everything is here! There is a very slim chance we forgot something or that your order is wrong; in the case this is true, please reach out via email at support@fruitykeeb.xyz and we will work with you to get it right. Also, due to the DIY nature of this hobby, as soon as a soldering iron touches or other modifications happen to the board, I am no longer able to issue a refund/replacement. Please refer to the terms and conditions listed on my site for more info.

--------------
### What's in the Box
![](/assets/FinnGus/done.jpg)
- (1) 3D Printed Head
- (1) 3D Printed Middle
- (1) 3D Printed Tail
- (1) Circuit board
- (1) FR4 Top Plate
- (1) Clear Acylic Backplate
- (1) 81 Switches (If selected)
- (1) Knob
- (1) Rotary encoder (no hardware needed)
- (1) Allen wrench (1/16th)
- (1) Pro Micro
- (1) Pro Micro Socket
- (1) I/O Chip
- (1) I/O Chip Socket
- (75) Diodes
- Hardware

----

### Gather Required Materials

You will need everything that comes with the kit as well as a few other items. Those additional items include:
- USB-C cable
- Soldering Iron and solder
- Allen Wrenches (list sizes)
- Flush Cut Snips
- Pliers, adjustable wrench or the correct size socket/wrench (10mm) for the rotary encoder hardware.
- about 3 hours time

Now that you have everything you need, lets get started!

-----

### Combine Case Sections

The case is divided into 3 sections and which are attached together with the top plate. **We plan on completing this step for you but you may have to finish it.**

![](/assets/FinnGus/bring_3d_printed_parts_together.gif)

Use the M3x6mm socket head screws to attach the top plate to each of the 3 case sections. You will be creating/cutting the threads into the plastic. Be sure not to apply too much pressure otherwise you might strip the threads you are creating. Start with the 2 holes close to each other in the center-top and center-bottom of the board (belly and back). This way, if you do strip the hole, it is not an issue since another hole is right next to it. Use this to practice and get a feeling for the correct amount of tension.
![](done)
![](done)   
With the case section assembled, set it aside for now.

-------

### Prepare the PCB

The PCB is the most complicated part so we've broken it down into partial steps

#### 1. Flash the firmware

Let's start with flashing the firmware onto the included Pro Micro to make sure that is working. Plug it into your computer using a USB-C cable.

We already have a [generic guide for flashing firmware](/firmware-download-and-update-guide.html) which is here. Follow that guide and use the FinnGus firmware which can be downloaded from that page. Since their is no reset button on the pro micro, reset the device by connecting the pins RESET and GND with a metal object (a bent paper clip works well)
![](done)
[Download and install Vial](https://get.vial.today) and make sure your computer recognizes the device as a FinnGus before moving on.

#### 2. Solder in the chip and Pro Micro

The kit includes a socket for both the Pro Micro and the I/O expansion chip. 

Prepare the Pro Micro socket by cutting one of the connecting bits of plastic so the USB port does not interfere with it. DO NOT USE FLUSH CUTS. Use a hacksaw. The plastic is brittle and breaks easily. Because of this we have already completed this step for you.
![](done)

Place the Pro Micro socket into the PCB like shown and solder it into place. Be sure the socket is flush. Start with a corner, and verify. Solder the other corner and verify again. Finally, solder the rest of the pins.
![](done)
![](get from screen grab)

Place the Pro Micro UPSIDE DOWN with the components facing away from you. Insert legs from the included diodes into each hole and use flush cuts to snip the excess off. Finally solder the cut diodes legs to the Pro Micro. 

![](get images from screen grab)
Place the DIP socket into the PCB like shown and solder it into place. Like the Pro Micro socket, make sure it is flush.
![](waiting on shipment)
Insert the I/O expansion chip into the DIP socket.
![](waiting on shipment)
#### 3. Solder in the Diodes
You'll repeat this step for each diode

1. bend it like shown.
![](do a screen grab or a small gif)
2. Insert it into the PCB being careful it is the correct orientation. The black bar on the diode matches with the thicker white bar on the PCB.  
![](done)
3. After the diode is inserted bend the leads outwards so it stay in place

Finally after each diode has been inserted, solder each one.
![](get from screen grab)
Bend the diodes legs straight and use flush cuts to them off. Be careful not to scratch the PCB when doing this.
![](get from screen grab)

#### 4. Screw in the stabilizers TODO swap 4 and 5

Install the stabilizers. They usually screw in but some might clip in. TODO link to stabilizer tutorial 
![](done)


#### 5. Solder in the Encoder

Flip the PCB to the front side facing you. Insert the rotary encoder into the footprint as shown. Make sure the encoder is as perpendicular as possible before soldering the connections.  
![](done)
![](done)

#### 6. Verify and Test

While not strickly necessary. I like to test the PCB at this point before I solder in the switches.

Plug in the keyboard. Open Vial and select the keyboard in the top drop down menu. From there select the **matrix tester** tab. This will show you every keypress. Test each key by using a metal object and connecting the switch pads together. 
![](done)
![](grab screenshot. maybe.)

---------------------

### Install the Switches into the Top Plate

Insert the switches you'd like to use with the LEDs facing south
![](done)
Check that all the pins are not bent and facing straight up.
![](done)
Make sure they line up with the layout you'd like to use. Dry fit the PCB to make sure everything lines up/works.  Make sure you haven't forgotten the stabilizers. Be as careful as possible to not scratch the PCB with the switch leads.

----------------------

### Solder 1/2 of the corner switches

Make sure you havn't forgetten the stabilizers!

The next step is to solder the PCB to the switches but it's recommended to do it in a particular way.

Start with 1 switch in the "corners" of the PCB. Solder only 1 lead (1 out of 2). The goal is to make sure the PCB is siting up against the back of each switch before moving on.

-----------------------

### Solder the Switches

After the PCB is in place and up against the switches, solder the rest of the switches. I like to solder half of each switch first and then come back and finish each switch

----------------------

### Screw in the Encoder section of the PCB

The Encoder is not PCB mounted so that section of the PCB has to be supported. Use the include M3x6mm socket head screws and screw the PCB to the case near the encoder as shown below
![](done)

-------------------

### Screw in the Knob

Use the Allen wrench included to bring the set screw inside the knob so that it barely pokes through the internal hole. Place the knob on the encoder shaft so that the set screw interfaces with the flat part of the encoder shaft. After it is in place, tighten the set screw.  **Be careful not to over tighten with the 3D printed knobs or it will strip. Error on the side of too loose since it can be tightened later.**

![](done)
![](done)

--------------------

### Install the keycaps

Install the keycaps. Below is the default key layout.
![](done)

---------------------

### Test

Open Vial and navigate to the matrix tester one last time. Press every key and make sure they all work.

-------------------------

### Install the Clear Backplate

Remove the protective paper from the clear acrylic backplate. Flip the FinnGus so the backside is facing you and use the M3x8mm button socket heads.

------------------------

### Enjoy

That's it! You've Done it! Congratulations! Head on over to the user guide to get an idea of how to use VIAL and program your keyboard to your liking!

----------------------

### Troubleshooting

Nothing yet. If you have issues, reach out to us and this will be updated accordingly.