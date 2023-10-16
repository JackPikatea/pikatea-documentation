# Sketchy Sketchy (with 3D printed case) Build Guide Supplement

This build guide largely follows the [original build guide for the acrylic case written by DCPEDIT](https://github.com/dcpedit/sketchy-sketchy/tree/main/case). <div style="background-color: yellow; color: black;">Below are notable changes and differences that you should be aware while you follow that original guide.</div>

 If you've got questions, just reach out and ask.

## MCU orientation and programming
We decided to use an RP2040 based board for more memory called the "Elite Pi". This is how it is orientated on the PCB. Notice the "Elite Pi" artwork is facing towards you. It's recommended to program the MCU before soldering it to the circuit board. 
To program, plug in the "Elite Pi" MCU and copy this [firmware file](https://www.mediafire.com/file_premium/euq50ppy7a1j7uq/pikatea_sketchy_vial.uf2/file) into the drive that shows up. Download and install [Vial](http://get.vial.today) and verify the keyboard shows up in the program before moving on.

![](/assets/SketchySketchy/PXL_20231014_145556977.jpg)

## LCD screens

These screens are mounted a bit differently than instructed in the original documentation. Use the entire length of the header (circled in green) so that the LCD is further away from the PCB. Solder just the middle pin on both sides so that you can easily align and make sure the LCD is straight and parallel to the PCB. After it's in the right spot, solder the rest of the pins.

![](/assets/SketchySketchy/PXL_20231014_150051488.jpg)

## Case Construction
Obviously the case construction is completely different. Follow these pictures.

1. Base

![](/assets/SketchySketchy/PXL_20231014_150543488.jpg)

2. Add foam

![](/assets/SketchySketchy/PXL_20231014_150603845.jpg)

3. place plate and PCB assembly

![](/assets/SketchySketchy/PXL_20231014_150611941.jpg)

4. Add top

![](/assets/SketchySketchy/PXL_20231014_150619180.jpg)

5. Screws and Feet

Use the included M3x16mm screws for the 3 bottom holes and the included M3x30mm screws for the 4 top holes. Be careful not to strip the screws in the plastic. 

![](/assets/SketchySketchy/PXL_20231014_150731073.jpg)
![](/assets/SketchySketchy/PXL_20231014_151526832.jpg)

6. Success

![](/assets/SketchySketchy/PXL_20231014_151539264.jpg)
