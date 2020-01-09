'use strict';


function displayRiverList() {
    console.log(`ran displayRiverList`);
    $('#js-check-all').click(function() {
        $('input:checkbox').not(this).prop('checked', this.checked);
    });

    // for later:
    // surely these can all be expressed in a single loop, something like this?
    // let elements = document.querySelectorAll('input[type=checkbox]');
    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].change(function() {
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
            // $('#js-choose-header').hide();
            // $('#js-get-info-btn').hide();
        } else {
            $('#js-class1-rivers').show();
            // $('#js-choose-header').show();
            // $('#js-get-info-btn').show();
        }
    });
    $('#js-class2').change(function() {
        if(this.checked != true) {
            $('#js-class2-rivers').hide();
            // $('#js-choose-header').hide();
            // $('#js-get-info-btn').hide();
        } else {
            $('#js-class2-rivers').show();
            // $('#js-choose-header').show();
            // $('#js-get-info-btn').show();
        }
    });
    $('#js-class3').change(function() {
        if(this.checked != true) {
            $('#js-class3-rivers').hide();
            // $('#js-choose-header').hide();
            // $('#js-get-info-btn').hide();
        } else {
            $('#js-class3-rivers').show();
            // $('#js-choose-header').show();
            // $('#js-get-info-btn').show();
        }
    });
    $('#js-class4').change(function() {
        if(this.checked != true) {
            $('#js-class4-rivers').hide();
            // $('#js-choose-header').hide();
            // $('#js-get-info-btn').hide();
        } else {
            $('#js-class4-rivers').show();
            // $('#js-choose-header').show();
            // $('#js-get-info-btn').show();
        }
    });
    $('#js-class5').change(function() {
        if(this.checked != true) {
            $('#js-class5-rivers').hide();
            // $('#js-choose-header').hide();
            // $('#js-get-info-btn').hide();
        } else {
            $('#js-class5-rivers').show();
            // $('#js-choose-header').show();
            // $('#js-get-info-btn').show();
        }
    });

    // for later:
    // again, this could be a loop?
    $('#js-check-all').change(function() {
        if(this.checked != true) {
            $('#js-class1-rivers').hide();
            $('#js-class2-rivers').hide();
            $('#js-class3-rivers').hide();
            $('#js-class4-rivers').hide();
            $('#js-class5-rivers').hide();
            // $('#js-choose-header').hide();
            // $('#js-get-info-btn').hide();
        } else {
            $('#js-class1-rivers').show();
            $('#js-class2-rivers').show();
            $('#js-class3-rivers').show();
            $('#js-class4-rivers').show();
            $('#js-class5-rivers').show();
            // $('#js-choose-header').show();
            // $('#js-get-info-btn').show();
        }
    });

    // the below doesn't work because it lacks the .change(function()) of the above code?
    // if($('#js-class1').checked != true || $('#js-class2').checked != true || $('#js-class3').checked != true || $('#js-class4').checked != true || $('#js-class5').checked != true || $('#js-check-all').checked != true) {
    //     $('#js-choose-header').hide();
    //     $('#js-get-info-btn').hide();
    // } else {
    //     $('#js-choose-header').show();
    //     $('#js-get-info-btn').show();
    // }


    watchForm();
    scrollDown();
    scrollUp();
}

function scrollDown() {
    $('.scroll-down').click(function() {
        $('html, body').animate({
            scrollTop: $('#js-form').offset().top
        }, 'slow');
        return false;
    });
}

function scrollUp() {
    $('.scroll-up').click(function() {
        $('html, body').animate({
            scrollTop: $('#js-form').offset().top
        }, 'slow');
        return false;
    });
}

function watchForm() {
    $('form').submit(event => {
        console.log(`ran watchForm`);
        event.preventDefault();
        const userTripType = $('input[name="tripType"]:checked').val();
        
        // for later:
        // could declare userRiver and userRiverName here
        // or create a separate function that could be called in each function where userRiver and userRiverName are currently being established repeatedly

        if (userTripType === 'private') {
            displayPrivateInfo();
            getLocation();
        } else if (userTripType === 'outfitter') {
            displayOutfitterInfo();
        }
       
        $('html, body').animate({
            scrollTop: $('#js-river-name').offset().top
        }, 'slow');
        return false;
    });
}


function displayPrivateInfo() {
    console.log(`ran displayPrivateInfo`);
    $('#results').removeClass('hidden');
    $('#js-pic-divider').removeClass('hidden');
    const userRiver = $('input[name="riverName"]:checked').val();
    const userRiverName = riverDescrip.find(userRiverName => userRiverName.id === userRiver);
    $('#js-private-links').empty();
    if($('#js-private').hasClass('hidden')) {
        $('#js-private').removeClass('hidden');
    }
    if($('#js-directions').hasClass('hidden')) {
        $('#js-directions').removeClass('hidden');
    }
    $('#js-private-links').append(`<li>Beta: <a href="${userRiverName.creekin}" target=”_blank” rel=”noopener noreferrer”>California Creeks</a></li>`);
    $('#js-private-links').append(`<li>Beta: <a href="${userRiverName.awa}" target=”_blank” rel=”noopener noreferrer”>American Whitewater</a></li>`);
    $('#js-private-links').append(`<li>Flow: <a href="${userRiverName.flow}" target=”_blank” rel=”noopener noreferrer”>Dreamflows</a></li>`);
    displayRiverInfo(userRiver);
    getWeather(userRiver);
    $('#js-outfitter').addClass('hidden');
}

function displayOutfitterInfo() {
    console.log(`ran displayOutfitterInfo`);
    $('#results').removeClass('hidden');
    $('#js-pic-divider').removeClass('hidden');
    const userRiver = $('input[name="riverName"]:checked').val();
    const userRiverName = riverDescrip.find(userRiverName => userRiverName.id === userRiver);
    if($('#js-outfitter').hasClass('hidden')) {
        $('#js-outfitter').removeClass('hidden');
    }
    $('#js-outfitter-links').empty();
    const arrLinks = userRiverName.outfitters;
    arrLinks.forEach(function(item) {
        $('#js-outfitter-links').append(`<li><a href="${item.link}" target=”_blank” rel=”noopener noreferrer”>${item.name}</a></li>`);
    });
    displayRiverInfo(userRiver);
    getWeather(userRiver);
    $('#js-private').addClass('hidden');
    $('#js-directions').addClass('hidden');
}

function displayRiverInfo(userRiver) {
    console.log(`ran displayRiverInfo`);
    const userRiverName = riverDescrip.find(userRiverName => userRiverName.id === userRiver);
    $('#js-river-name').html(userRiverName.name);
    $('#js-river-descrip').html(userRiverName.description);
}

function getLocation() {
    console.log(`ran getLocation`);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getTomTom);
    } else {
        $('#js-user-location').html = `Sorry, geolocation is not supported by this browser.`;
    }
}

    // for later:
    // find a way to trigger browser to ask for user location if they decline the first time
    // or catch the error to ask them for their
    // if location denied, promt user
function getTomTom(position) {
    console.log(`ran getTomTom`);
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const userRiver = $('input[name="riverName"]:checked').val();
    const userRiverName = riverDescrip.find(userRiverName => userRiverName.id === userRiver);
    const userRiverCoords = userRiverName.takeout;
    const getTravelTimeURL = `https://api.tomtom.com/routing/1/calculateRoute/${lat}%2C${long}%3A${userRiverCoords}/json?avoid=unpavedRoads&key=MmbpnXLGCMLejulVsu5VFZOlWUSUivGs`
    fetch(getTravelTimeURL)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayTomTom(responseJson))
    .catch(err => {
        $('#js-directions-err-msg').text(`TomTom threw a temper tantrum. Please try again in a few moments.`);
    });
}

function displayTomTom(responseJson) {
    console.log(responseJson);
    const travelTime = responseJson.routes[0].summary.travelTimeInSeconds;
    const travelHours = Math.floor(travelTime / 3600);
    const travelMins = Math.floor((travelTime - (travelHours * 3600)) / 60);
    $('#js-travel-time').html(`<span class="travel">Time to get to take-out</span><br>${travelHours} hr and ${travelMins} min`);
    const travelDistance = responseJson.routes[0].summary.lengthInMeters;
    const distanceMiles = Math.round(travelDistance / 1609);
    $('#js-travel-distance').html(`<span class="travel">Distance to take-out</span><br>${distanceMiles} miles`)
    const rawETA = responseJson.routes[0].summary.arrivalTime;
    const ETA = rawETA.slice(11, 16);
    $('#js-eta').html(`<span class="travel">Take-out ETA</span><br>${ETA}`)
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
    const temp = Math.round((responseJson.main.temp - 273.15) * 9/5 + 32);

    // maybe don't need feels like temp
    const temp2 = Math.round((responseJson.main.feels_like - 273) * 9/5 + 32);
    $('#js-weather-details').empty();

    const wind = Math.round((responseJson.wind.speed));

    // $('#js-weather-details').append(`<li>The weather is: ${responseJson.weather[0].main}</li>`);
    // $('#js-weather-details').append(`<li>Temperature: ${temp}°F</li>`);
    // $('#js-weather-details').append(`<li>Feels like: ${temp2}°F</li>`);
    // $('#js-weather-details').append(`<li>Wind: ${responseJson.wind.speed} mph</li>`);
    // $('#js-weather-details').append(`<img src="https://openweathermap.org/img/wn/${responseJson.weather[0].icon}.png" alt="weather conditions icon">`);

    $('#js-weather-details').append(
        `<div class="float"><img src="https://openweathermap.org/img/wn/${responseJson.weather[0].icon}.png" alt="weather conditions icon"></div><div class="weather-info"><p class="weather-blurb">${temp}°F</p><p class="weather-blurb">${responseJson.weather[0].main}</p><p class="weather-blurb">Wind: ${wind} mph</p></div>`);

}


$(displayRiverList);