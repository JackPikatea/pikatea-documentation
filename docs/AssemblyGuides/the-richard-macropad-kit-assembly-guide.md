# The Richard Kit Assembly Guide

Congrats on receiving your phallic shaped macropad kit! Let's put it together, together! Please email support or ask on Discord if you have any questions. 

<div style="background-color: yellow; color: black;">It is VERY VERY important that you follow the correct order of operations. It is extremely difficult/impossible to assemble your macropad if you solder the components in the wrong order.</div>
<br>

<div style="background-color: yellow; color: black;">If you purchased your macropad before January 2024, <a href="/AssemblyGuides/the-richard-macropad-v1-kit-assembly-guide.html">follow the Version 1 guide here</a></div>

<!-- You can watch a short video from one of the streams we did which outlines most of the information but please follow along with the written guide as well.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wGTiLKsTsus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

## What's in the Box
* (1) 3D Printed Case
* (1) Printed or Acrylic Backplate
* (1) PCB
* (1) RP2040 Pro Micro with headers
* (3) M3x8mm Button Head Screws
* (2) Encoders with hardware
* (2) Knobs (if included in order)
* (6) Switches (if included in order)
* (6) Keycaps (if included in order)

## Gather Required Materials
You will need everything that comes with the kit as well as a few other items. Those additional items include:

* Soldering iron and solder
* roll of tape
* 10mm socket, wrench or pliers
* rubber band

Now that oyu have everything you need, let's get started!

<div style="background-color: yellow; color: black;">AGAIN, it's absolutely critical that you do these steps in order</div>

## Solder the Kailh Hotswap Sockets

![](/assets/Richard/PXL_20240120_194053044.jpg)

## Test/Flash the MCU

Download the [latest firmware](https://www.mediafire.com/file_premium/jixgtmup0igltj4/pikatea_the_richard_v4_vial.uf2/file) file (.uf2).  Download and install the latest version of Vial from [https://get.vial.today](https://get.vial.today). While holding the boot button on the MCU, plug it into a computer. There should be a new directory that shows up on the computer. Copy the .uf2 file to this directory. The MCU should automatically disconnect but unplug and re-plug in the MCU anyways. Open Vial and verify that you can see "The Richard Macropad" at the top before continuing. Contact us through support or Discord before continuing if you are encountering issues.

## Solder the MCU

Place the headers into the PCB as shown and then add the MCU to stabilize them. Use snips to cut up the included headers the the right sizes. Wrap a rubber band around the assembly to hold everything in place. Solder it all together.

![](/assets/Richard/PXL_20240120_194159953.jpg)
![](/assets/Richard/PXL_20240120_194211573.jpg)
![](/assets/Richard/PXL_20240120_194321317.jpg)
![](/assets/Richard/PXL_20240120_194325611.jpg)

## Install the Switches

Install the switches into the case in the following orientation. Make sure all the switch pins are straight and not bent or twisted

![](/assets/Richard/PXL_20230710_013506211.jpg)

## Combine Assembly

Combine the PCB and the switches/case together. 

![](/assets/Richard/Insert image)

## Install the Rotary Encoders

Next up is the rotary encoders. Bend the set of 2 pins slightly as shown. Insert both encoders into the holes with the set of 2 pins facing outwards. hand tighten the washer and nut to hold the encoder in place for soldering. Don't tighten this with any tools just yet. The washer has a slight bend in it so be careful to place the raised part in the center facing towards the front of the macropad.

![](/assets/Richard/PXL_20230710_014424380.jpg)
![](/assets/Richard/PXL_20230710_014401763.jpg)

After the rotary encoder is in place, it is time to solder it. The 2 bent pins on the rotary encoder are resting just above the pads were they need to be soldered to. The 3 shorter pins on the rotary encoder are placed just to the side of the pads where they need to be soldered to. **They do not go through the small holes.** Take a look at the picture shown from a similar product for a better explanation.

![](/assets/Richard/PXL_20230710_014630039.jpg)
![](/assets/GB3/gb3-assembly-18-encoder-solder.jpg)

Tighten the encoder with a wrench, pliers or 10mm socket. Do not over tighten. Turning the nut about 1/4 of a full turn after hand tightening should be more than fine.

## Attach the Knobs

Use the Allen wrench included with the kit to bring the set screw inside the knob so that it barely pokes out. Place the knob on the encoder shaft so that the set screw interfaces with the flat part of the encoder shaft. After it is in place, tighten the set screw. **Be careful not to over tighten with the 3D printed knobs or it will strip. Error on the side of too loose since it can be tightened later.**. Do this for both knobs.

![](/assets/GB3/gb3-assembly-20-knob.jpg)
![](/assets/GB3/gb3-assembly-21-knob.jpg)
![](/assets/Richard/PXL_20230710_014657325.jpg)

## Add the Keycaps
Add the keycaps to your macropad and click the switches a bunch because it's fun and satisfying.

## Add The Backplate
Install the 3D printed backplate using the M3x10mm socket head screws. Get each screw started before tightening them down. **Error on the side of too loose (the 3D print can crack or slip!)**. 

![](/assets/Richard/Insert image)
![](/assets/Richard/Insert image)
![](/assets/Richard/Insert image)

## Done
That's it! You've built The Richard Macropad. Head over to the [programming guide](/programming.html) for instructions on programming and usage

