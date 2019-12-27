'use strict';

function watchForm() {
    $('form').submit(event => {
        console.log(`ran watchForm`);
        event.preventDefault();
        // create a variable to store private vs outfitter
        // create a variable to store class

        // create a function to display rivers based on class selected

        // if private call fn displayPrivateInfo()
        //  - call fn getDirections()
        //  - call fn getWeather()

        // if outfitter call fn displayOutfitterInfo()
        //  - call fn getWeather()

    });
}

function displayPrivateInfo() {

    // call fn displayRiverInfo()

    // call fn getDirections()
    // call fn getWeather()

    // call fn getPrivateLinks()
    // this fn will access a STORE-1 array with preset links to dreamflows, ca creeks, american whitewater, a wet state for each river
}

function displayOutfitterInfo() {

    // call fn displayRiverInfo()

    // call fn getWeather()

    // call fn getOutfitterLinks()
    // this fn will access a STORE-2 array with preset links to appropriate companies for each river
}

function displayRiverInfo() {
    // display river name and description (and a photo? can I find whitewater photos that aren't proprietary?)
}

function getDirections() {
    // create a variable for user selected river
    // get take-out location (from an array of locations? (STORE-3?))
    
    // fetch directions from TomTom API

    // call fn displayDirections
}

function displayDirections() {
    
}

function getWeather() {
    // get take-out location (from an array of locations? (STORE-3?))

    // fetch weather from OpenWeather API

    // call fn displayWeather()
}

function displayWeather() {

}

function getPrivateLinks() {
    // access an array with links to dreamflows, ca creeks, american whitewater, a wet state for each river
    
    // call fn displayPrivateLinks()
}

function displayPrivateLinks() {

}

function getOutfitterLinks() {
    // access an array with links to appropriate outfitters for each river

    // call fn displayOutfitterLinks()
}

function displayOutfitterLinks() {
    
}


$(watchForm);