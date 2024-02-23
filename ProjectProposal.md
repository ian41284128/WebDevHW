
![fez room](https://static.wikia.nocookie.net/polytron-fez/images/6/66/Fez_GomezRoom2D.png/revision/latest?cb=20130518034217)

# Project Proposal: Portfolio Room

## Concept:

I want my portfolio site to feel like a physical space that conveys who I am, like my room. It will be a physical space, and my projects and other information about me can be found throughout the space.

### How?

I will use the CSS transform3D and rotate3D functions to create four divs that look like walls, with portfolio content on each wall. A viewer will be able to click on the sides of the screen to cycle between the walls, and the room will rotate to position the next wall in the center of the page.

### Problem: 
Drawing the html on flat surfaces won't sell the 3D-ness of a room when the space is rotating.

### Solution: 
Considering modeling the room in 3D and rendering the 3D model in a canvas. If we can do this, then we can draw the html on top of the canvas and sync up the html's position with the 3D position of the object.

# The Look

## Wall 1: Window

Intro page, title information floating in the window space.

Outside the time of day will depend on the real world time of day. The colors of the page, and what's visible out the window will change between four states: *day, dusk, night, dawn*

![dawn](https://static.wikia.nocookie.net/gensin-impact/images/2/20/Login_Menu_Dawn.png/revision/latest/scale-to-width-down/185?cb=20220310021821)
![day](https://static.wikia.nocookie.net/gensin-impact/images/4/46/Login_Menu_Day.png/revision/latest/scale-to-width-down/185?cb=20220309163521)
![dusk](https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Login_Menu_Dusk.png/revision/latest/scale-to-width-down/185?cb=20220310021851)
![night](https://static.wikia.nocookie.net/gensin-impact/images/1/19/Login_Menu_Night.png/revision/latest/scale-to-width-down/185?cb=20220309163443)

## Wall 2: Doorway

Wall mirror with profile picture,
about page displayed on open wall space.

## Wall 3: Bed

Clickable wall posters showing projects, zooms into scrollable information and screenshots.

## Wall 4: Desk

Contact info, in progress stuff?

---
[Mood Board](https://www.pinterest.com/hylianchicken/webdevfinal/)

### Portfolio content:

* Keep it Together web game (poster)
* IOS parallax game (poster)
* 2020 capstone? (poster)
* React site (desk)
* Raytracer (poster)

# How?
Problems:
* how to handle different aspect ratios?
    * Zoom?
* What if 3D model is too hard?
    * Can always make it more traditional page style, while preserving the room aesthetic.

    3js