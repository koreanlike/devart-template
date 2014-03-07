# Hello Fonts!

## Sketch and Ideation

![First Sketch for Voicing Type](../project_images/sketch-000.png?raw=true "First Sketch for Voicing Type")

This first sketch was to explore the methods that can be used to map audio information to a character's shape and nodes. Base font was planned to be Helvetica, which has been widely used and has straightforward outlines.

Idea of typefaces' style that can be generated by Voicing Type was pending at the time, just because I wanted typefaces' shapes to be less experimental, but to be more usable daily basis.


## First Test

http://www.youtube.com/watch?v=8JAVKEq-KO0

To build the first working prototype of Voicing Type, my first agenda was simply extracting the path information from a font file. Since Voicing Type's initial prototype was written on [Processing](http://processing.org/), I was looking into Processing compatible Java libraries, and successfully found [Geomerative](http://www.ricardmarxer.com/geomerative/), a library that can read .ttf files and generate path information.

First test to modify a font seemed to be promising, even though there were no solid algorithms for modifying paths and nodes. [Minim](http://code.compartmental.net/tools/minim/), Java library to handle microphone inputs, was used to get real time audio input through laptop's microphone.