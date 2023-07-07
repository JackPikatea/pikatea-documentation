# The Richard Kit Assembly Guide

Congrats on receiving your phallic shaped macropad kit! Let's put it together, together! Please email support or ask on Discord if you have any questions. 

<div style="background-color: yellow; color: black;">It is VERY VERY important that you follow the correct order of operations. It is extremely difficult/impossible to assemble your macropad if you solder the components in the wrong order.</div>

You can watch a short video from one of the streams we did which outlines most of the information but please follow along with the written guide as well.

(insert embedded youtube video here)

## What's in the Box
![](image)

* (1) 3D Printed Case
* (1) Printed or Acrylic Backplate
* (1) PCB
* (1) RP2040-mini with headers
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

## Solder the Headers

The first step is to solder the headers to the PCB. ONLY the headers. DO NOT SOLDER THE MCU. Place the headers into the PCB as shown and then add the MCU to stabilize them. Wrap a rubber band around the assembly to hold everything in place.

![](image of headers and PCB)
![](image of headres, pcb, mcu and rubber band)

Solder only the headers to the PCB so that you end up with the following. DO NOT SOLDER THE MCU TO THE HEADERS YET

![](image of headers and PCB soldered together)

## Install the Switches

Install the switches into the case in the following orientation. 

![](image of switches in case)

## Solder the Switches

Solder the PCB and headers to the switches. Be careful not to burn the case with the soldering iron. The *tip* switch will be covered by the MCU so if you ever plan the remove or exchanges these switches, it may be worth while to socket the switch holes. Verify the *tip* switch is soldered well because you will never have access to it after you add the MCU.

![](image of switches soldered)

## Test the MCU

Download the latest firmware file (.uf2) from the [Firmware Downloads Page](). Download and install the latest version of Vial from [https://get.vial.today](https://get.vial.today). While holding the boot button on the MCU, plug it into a computer. There should be a new directory that shows up on the computer. Copy the .uf2 file to this directory. The MCU should automatically disconnect but unplug and re-plug in the MCU anyways. Open Vial and verify that you can see "The Richard Macropad" at the top before continuing. Contact us through support or Discord before continuing if you are encountering issues.

## Solder the MCU

Solder the MCU to the headers as shown below. This is the last of the critical order steps. Solder each pin being careful not to burn the case with your iron. Flux core solder helps a lot with this.

![](image of MCU soldered to the headers)

## Install the Rotary Encoders

Next up is the rotary encoders. Bend the set of 2 pins slightly as shown. 


