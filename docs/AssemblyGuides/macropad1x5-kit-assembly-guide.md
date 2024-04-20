# Macropad1x5 Kit by LS Keyboards And Pikatea Assembly Guide
### Introduction
Welcome to the Macropad1x5 assembly guide! Here we walk you through the steps needed to get your new macropad up and running.

*Disclaimer: Please read these instruction carefully before moving on to the assembly. The order of steps matters and it is much easier to ask a question on [Discord](https://discord.com/invite/wJgKSBYz23) or via email than it is to fix problems later.*
### What is included in this kit
1. Electronics Kit: PCB, button, headers (2), capacitors (2), resistors  (4), glue pad, cable tie
2. Knob and hex wrench
3. Switches
4. Keycaps
5. (Optional) Pro Micro with pin headers
6. Rotary encoder
7. Acrylic parts
8. (Optional) LED kit: LEDs (4), resistors (4+1+1), mosfet

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_12.09.48_1024x1024.png?v=1625393943)
### What you need
- Soldering iron and solder
- Glue for acrylic/hard plastic (superglue works but might leave residue)
- Flush cutters
- Scissors
- Micro USB cable
- Some time
- Nice to have: Multimeter to check for shorts at the mosfet and quickly identify the resistors.

### Case Assembly
Take out the acrylic parts and make sure you understand what goes where. The encoder cutout in the frontplate is larger than the switch cutouts and has rounded corners. The two side panels are different

- The side panel with the **larger cutouts** goes on the **encoder side**. It holds the little bracket to take the force from pressing the encoder button.
- The side panel with the **small cutouts** goes on the **opposite side** behind the switches. Here, the USB cable can be attached with a cable tie to provide strain relieve for the USB connection.

The encoder can go on either side, just make sure to put the side panels accordingly. Remove the foil from all parts.

Dry fit all parts according to the following picture. The tab width on the top and front panels are different, making the side panels only fit in one orientation. No force is needed to fit the tabs! Put the correct side panel on each side.
![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/Screenshot_from_2021-07-03_18-38-35_480x480.png?v=1625330385)

Make a glue test! The frame and the squares from the switch cutouts make ideal test pieces to see if your glue works well with acrylic. We have found that glue for acrylic or hard plastics works best (e.g. Acrifix). Super glue works as well but can leave marks when it gets on matte parts. Use the glue according to its instructions and see if it makes a good connection. Pay attention to how much glue you need. Excess glue is difficult to remove during assembly.

Start with gluing the side panels to the top panel one by one. Apply a thin, even layer of glue on all contacting surfaces, for example using a toothpick. Hold the parts in place for a minute or so. Don’t rush this and be careful not to get glue on the visible parts.

Continue with the front panel. Here you need to apply the glue on both sides at the same time before fitting it. It should stay in place and look like the case below. Put the case assembly to a quiet place to let the glue harden.

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-03_19.00.05_480x480.png?v=1625332278)
### PCB Assembly
Open the Electronics Kit (the larger zip bag) and get the PCB, the resistors, the capacitors, the button and the headers. The glue pad and cable tie are only needed in the end.

- If you haven't soldered before, don't worry. It's not that difficult. I recommend watching [Part 1](https://www.youtube.com/watch?v=J5Sb21qbpEQ&t=1s) and [Part 2](https://www.youtube.com/watch?v=fYz5nIHH0iY) of the soldering tutorial by EEVblog. It is a great, general introduction to soldering that goes quite into depth (We're soldering normal through-hole components here, so you can skip quite a few things like the magnifying glass).

It's easiest to start with the lowest parts on the PCB, i.e. the resistors and capacitors. The four resistors are all the same (10kΩ) and go into the positions labelled **R1, R2, R3 and R4**. The same applies to the capacitors at **C1 and C2**.

Solder these parts on the side that is labelled! ("Macropad1x5 V1" etc. as shown below) This is important, the PCB won't fit in the case with parts on the wrong side.

If you are building a flipped version (encoder on the right), R1 needs to be soldered with some distance to the PCB to avoid interference with the bracket. Make a fitment test in the case and move R1 out of the way. 

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_12.36.18_crop_e31d3597-0573-41a9-acf0-fd9f07b806ea_600x600.jpg?v=1625395228)

If you got the LED kit, some more parts are needed: The mosfet goes into Q1. Pay attention to the correct orientation, as outlined on the PCB. Try not to touch the mosfet's legs as it's sensitive to ESD damage. *The mosfet pads are pretty close together, so make sure to check for shorts after soldering*. The LED kit has three different resistors: R5 is the same as the previous ones at 10kΩ (brown, black, orange, gold), R6 is 470Ω (yellow, purple, brown, gold) and R7 to R10 are 150Ω (brown, green, brown, gold). Depending on the type of switches you have, you'll need to solder the LEDs now or later. Box switches have a cutout and need to get soldered after the LEDs. *If you have box-type switches, solder the LEDs now*. The long leg has to go into the round pad, the short leg into the square pad. Other switches have holes for the LED legs and thus need to get soldered before the LEDs.

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_12.52.41_1024x1024.png?v=1625396180)

Solder the small push/reset button.

Solder the headers. These can be a bit difficult to hold in place. Some tape can help. Or, what I like to do is to hold the PCB and header in one hand, the soldering iron in the other and move move both toward the solder wire which is held by a clip or third hand somewhere. This way you can make sure that the headers go on nicely aligned.

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_13.01.45_crop_1024x1024.jpg?v=1625396813)

Solder the headers to the Pro Micro. This is easiest done in place on the PCB as shown here. This way the alignment works out for sure.

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_13.17.44_crop_1024x1024.jpg?v=1625397759)

Now flip the board to solder the encoder. Use flush cutters to trim the button legs as one of them is quite close to the encoder.

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_13.11.12_crop_1024x1024.jpg?v=1625397310)
### Test the Electronics(Very Important!!!)
Before permanently fixing the PCB to the case by soldering the switches, you should test the electronics. Follow [this guide](/DownloadsAndFiles/firmware-download-and-update-guide.html) to download and flash the firmware to the microcontroller. In case the Pro Micro's LED lights up, but nothing is recognized by the computer, eg in the device manager in Windows, try a different cable and/or make sure the one you are using transmits data. We've seen a few cases where cables from power banks were 'charge-only' and thus didn't work.

Then connect the Pro Micro to a computer using a USB cable and simulate keypresses by shorting two switch pads on the PCB with a wire or tweezers. The computer should register the keypresses 1, 2, 3 and 4 for the buttons. Turning the encoder should change the volume. Pressing the encoder button should mute the volume. The macropad should automatically be recognized in Vial and show the keymap.

Test the LEDs by inserting them into the slots and using slight pressure to make a connection since they might be soldered later. (With MX style switches the LEDs are soldered after the switches, with BOX style switches they are soldered before.) Go to the Lighting tab in Vial and use the Brighness slider to verify that the mosfet is doing it's job. A short at the mosfet could cause the backlight to be always on or off.

In case one of the functions does not work, check the parts placement and solder joints. Fix bad joints by reflowing them with some fresh solder. Remove shorts with solder wick. If you have questions, come ask on Discord.

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_13.46.54_crop_1024x1024.jpg?v=1625399456)
### Macropad Assembly
Now we can move on to put everything together. Push the switches into their spots in the front panel. The LED cutouts face downwards if the encoder is on the left and upwards if the encoder is on the right.

Push the PCB against the switches. Check if the underside of the switches sits flush on the PCBs. You may have to trim the legs of components, especially headers and the button, with the flush cutter. Unplug and pull out the Pro Micro. Solder the switches to the PCB.

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_13.58.14_crop_1024x1024.jpg?v=1625400036)
If you have LEDs and non-Box switches, now is the time to solder the LEDs. The long leg has to go into the round pad, the short leg into the square pad. Test the LEDs by attaching the Pro Micro and plugging it in. They are turned on by default.
Push spacers between front panel and PCB. As acrylic has some tolerance on its thickness, spacers are included in three thicknesses. Have a look which one fits best in between front panel and PCB. Add a drop of glue to the spacer and push it into the spots shown in the image below.
Glue the acrylic bracket behind the encoder. As the encoder doesn't clip into the front panel like the switches, the bracket takes the force from pushing the encoder button and directs it into the case.
![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_14.16.39_crop_1024x1024.png?v=1625401862)
Add the knob to the encoder. Align the set screw with the flat area on the encoder shaft. Don’t push the knob all the way to the bottom, else the button does not actuate. Adjust this as necessary and tighten the screw with the included hex wrench.
Add keycaps by pushing them onto the switch stems.
*Once you know which cable your are going to use, use the cable tie to provide strain relieve on the Pro Micro's USB port as shown below. Any pull on the cable now goes into the case instead the USB port which is known to be a weak point.*
![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_14.36.43_crop_1024x1024.jpg?v=1625402370)


Finally, find a good spot for mounting the macropad! Cut the glue pad into three or four parts, attach them to the top panel and mount the pad to a flat surface. The pads have quite a lot of holding force, so be careful when aligning and positioning: You only want to do it once. If you are not sure about the position, use very thin strips of the pad at first.

If you one day want to remove the macropad it can help to heat up the glue pads with a fan.

![](https://cdn.shopify.com/s/files/1/0322/9637/0235/files/2021-07-04_14.46.20_crop_1024x1024.jpg?v=1625402879)
We hope you enjoy your new, self built macropad! As a next step you can check out the [Programming Guide](/programming.html), to program your own favorite functions and get the most functionality out of the macropad.

<Footer/>