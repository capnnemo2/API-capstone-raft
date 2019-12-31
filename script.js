'use strict';


function displayRiverList() {
    // this part of the function should allow the 'all' checkbox to de/select all. and it works!
    console.log(`ran displayRiverList`);
    $('#js-check-all').click(function() {
        $('input:checkbox').not(this).prop('checked', this.checked);
    });

    // depending on which class checkboxes are selected, display the corresponding rivers

    // surely these can all be expressed in a single loop, something like this?
    // for (let i = 1; i < 6; i++) {
    //     $('#js-class[i]').change(function() {
    //         if(this.checked != true) {
    //             $('#js-class[i]-rivers').hide();
    //         } else {
    //             $('#js-class[i]-rivers').show();
    //         }
    //     });
    // }

    $('#js-class1').change(function() {
        if(this.checked != true) {
            $('#js-class1-rivers').hide();
        } else {
            $('#js-class1-rivers').show();
        }
    });

    $('#js-class2').change(function() {
        if(this.checked != true) {
            $('#js-class2-rivers').hide();
        } else {
            $('#js-class2-rivers').show();
        }
    });

    $('#js-class3').change(function() {
        if(this.checked != true) {
            $('#js-class3-rivers').hide();
        } else {
            $('#js-class3-rivers').show();
        }
    });

    $('#js-class4').change(function() {
        if(this.checked != true) {
            $('#js-class4-rivers').hide();
        } else {
            $('#js-class4-rivers').show();
        }
    });

    $('#js-class5').change(function() {
        if(this.checked != true) {
            $('#js-class5-rivers').hide();
        } else {
            $('#js-class5-rivers').show();
        }
    });

    $('#js-check-all').change(function() {
        if(this.checked != true) {
            $('#js-class1-rivers').hide();
            $('#js-class2-rivers').hide();
            $('#js-class3-rivers').hide();
            $('#js-class4-rivers').hide();
            $('#js-class5-rivers').hide();
        } else {
            $('#js-class1-rivers').show();
            $('#js-class2-rivers').show();
            $('#js-class3-rivers').show();
            $('#js-class4-rivers').show();
            $('#js-class5-rivers').show();
        }
    });

    watchForm();
}

function watchForm() {
    $('form').submit(event => {
        console.log(`ran watchForm`);
        event.preventDefault();
        // create a variable to store private vs outfitter
        const userTripType = $('input[name="tripType"]:checked').val();
        
        

        if (userTripType === 'private') {
            displayPrivateInfo();
            getDirections();
            //  - call fn getWeather()
        } else if (userTripType === 'outfitter') {
            displayOutfitterInfo();
            //  - call fn getWeather()
        }

    });
}


function displayPrivateInfo() {
    console.log(`ran displayPrivateInfo`);
    $('#results').removeClass('hidden');
    const userRiver = $('input[name="riverName"]:checked').val();
    displayRiverInfo(userRiver);

    // call fn getWeather()

    // call fn getPrivateLinks()
    // this fn will access a STORE-1 array with preset links to dreamflows, ca creeks, american whitewater, a wet state for each river
}

function displayOutfitterInfo() {
    console.log(`ran displayOutfitterInfo`);
    $('#results').removeClass('hidden');
    const userRiver = $('input[name="riverName"]:checked').val();
    displayRiverInfo(userRiver);

    // call fn getWeather()

    // call fn getOutfitterLinks()
    // this fn will access a STORE-2 array with preset links to appropriate companies for each river
}

function displayRiverInfo(userRiver) {
    const userRiverName = riverDescrip.find(userRiverName => userRiverName.id === userRiver);
    console.log(userRiverName.name);
    console.log(userRiverName.description);
    $('#js-river-name').html(userRiverName.name);
    $('#js-river-descrip').html(userRiverName.description);

}

function getDirections() {
    console.log(`ran getDirections`);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $('#js-user-location').html = `Geolocation is not supported by this browser.`;
    }

    // get take-out location (from array)
    
    // fetch directions from TomTom API

    // call fn displayDirections
}

function showPosition(position) {
    console.log(`ran showPosition`);
    $('#js-user-location').html("lat: " + position.coords.latitude + "<br>long: " + position.coords.longitude);
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
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


$(displayRiverList);