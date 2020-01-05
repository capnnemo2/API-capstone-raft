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
    getWeather(userRiver);

    // call fn getPrivateLinks() - NOPE - use userRiver to display links from riverDescrip
}

function displayOutfitterInfo() {
    console.log(`ran displayOutfitterInfo`);
    $('#results').removeClass('hidden');
    const userRiver = $('input[name="riverName"]:checked').val();
    displayRiverInfo(userRiver);
    getWeather(userRiver);

    // call fn getOutfitterLinks()  - NOPE - use userRiver to display links from riverDescrip
}

function displayRiverInfo(userRiver) {
    const userRiverName = riverDescrip.find(userRiverName => userRiverName.id === userRiver);
    $('#js-river-name').html(userRiverName.name);
    $('#js-river-descrip').html(userRiverName.description);
}

function getDirections() {
    console.log(`ran getDirections`);
    // getDirections gets the user location

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayDirections);
        // change above line: replace showPosition to displayDirections to change the success outcome
    } else {
        $('#js-user-location').html = `Sorry, geolocation is not supported by this browser.`;
    }

    // get take-out location (from array)

}

// function showPosition(position) {
//     console.log(`ran showPosition`);
//     $('#js-user-location').html("lat: " + position.coords.latitude + "<br>long: " + position.coords.longitude);
//     console.log(position);
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
// }

function displayDirections(position) {
    // this function will display the travel time and distance to the take-out
    console.log(`ran displayDirections`);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const userRiver = $('input[name="riverName"]:checked').val();
    const userRiverName = riverDescrip.find(userRiverName => userRiverName.id === userRiver);
    const userRiverCoords = userRiver.takeout;

    $('#js-user-location').html("lat: " + lat + "<br>long: " + long);

    const getTravelTimeURL = `https://api.tomtom.com/routing/1/calculateRoute/${lat}%2C${long}%3A${userRiverCoords}38.0051456%2C-121.2973056%3A38.826396%2C-120.949185/json?avoid=unpavedRoads&key=MmbpnXLGCMLejulVsu5VFZOlWUSUivGs`
    fetch(getTravelTimeURL)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => console.log(responseJson))
    .catch(err => {
        $('#js-directions-err-msg').text(`TomTom threw a temper tantrum and ${err.message}. Please try again in a few moments.`);
    });
    

}

function getWeather(userRiver) {
    const userRiverName = riverDescrip.find(userRiverName => userRiverName.id === userRiver);
    
    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
    const latitude = Math.round(`${userRiverName.lat}`);
    const longitude = Math.round(`${userRiverName.long}`);
    const queryString = `lat=` + latitude + `&lon=` + longitude;
    const weatherApiKey = `appid=f83705c417eaaaa1cacb48b69b90c169`;
    const searchWeatherURL = weatherURL + '?' + queryString + '&' + weatherApiKey;
    console.log(searchWeatherURL);

    fetch(searchWeatherURL)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayWeather(responseJson))
    .catch(err => {
        $('#js-err-msg').text(`The weather gods are indecisive: ${err.message}. Please try again later.`)
    });
}

function displayWeather(responseJson) {
    console.log(responseJson);
    $('#js-weather').html('Current weather at take-out:');
    const temp = Math.round((responseJson.main.temp - 273.15) * 9/5 + 32);
    const temp2 = Math.round((responseJson.main.feels_like - 273) * 9/5 + 32);
    $('#js-weather-details').append(`<li>The weather is: ${responseJson.weather[0].main}</li>`);
    $('#js-weather-details').append(`<li>Temperature: ${temp}°F</li>`);
    $('#js-weather-details').append(`<li>Feels like: ${temp2}°F</li>`);
    $('#js-weather-details').append(`<li>Wind speed: ${responseJson.wind.speed} mph</li>`);
    $('#js-weather-details').append(`<img src="https://openweathermap.org/img/wn/${responseJson.weather[0].icon}.png" alt="weather conditions icon">`);


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