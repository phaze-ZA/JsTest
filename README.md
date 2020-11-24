# JsTest

## Getting Started

If this is your first time running the app, run the command "`npm run firstrun`" from within the root of the app. This will kick off an npm install to install all of the required packages and then will use webpack to build an output and serve the output from localhost:8080. It will also open the site in your default browser (preferably chrome).

After this if you want to run the app again, just use "`npm run  start`". This will use webpack and serve the output again. The app does have a watch task running so any changes will be compiled and be able to be viewed in real time. 

## About The App

The app makes use of **es6** and **PIXI js**. I chose es6 as it's something I'm growing more familiar with and PIXI because it's something that is used frequently in our games in Derivco and was a fairly easy library to pick up with the time I had. 

I had originally planned to go with Typescript, but after some serious overthinking I decided to scrap the project and start in a more familiar territory. That being said, it was good to experiment with Typescript during this project.

I've used a psuedo-MVC pattern as this is a pattern I've been becoming more and more familiar with as I grow in my development and worked well for the task at hand.

I have made a video diary of my experience writing this app, this may supplement the project and/or provide some insight into my thinking (they're incredibly long, I don't expect you to watch the whole thing):

Session 1: https://youtu.be/2IWT4jdgjqo

Session 2: https://youtu.be/grCyjd-IzQE

Session 3: https://youtu.be/grCyjd-IzQE

Session 4.1:https://youtu.be/xc3dgOhEAlI

Session 4.2:https://youtu.be/wZGvBw_m9fU

These videos are unlisted for privacy but were streamed using twitch - to my two viewers, good friends of mine who provided moral support.

## Assumptions Made

Wins pay from left to right

Any win combination interrupted by a non-winning symbol (i.e. 7, BAR, CHERRY) voids the win

