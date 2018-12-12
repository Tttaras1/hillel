function weather() {
    let textContainer = document.querySelector('.header__weather');
    let container = document.querySelector('[name="city"]');
    let autocomplete = new google.maps.places.Autocomplete(container);
    google.maps.event.addListener(autocomplete, 'place_changed', checkWeather);
    if (localStorage.ltd && localStorage.lng) {
        let ltd = localStorage.ltd;
        let lng = localStorage.lng;
        checkWeather(ltd, lng);
    }
    function checkWeather(ltd, lng) {
        let place = autocomplete.getPlace();
        ltd = ltd || place.geometry.location.lat();
        lng = lng || place.geometry.location.lng();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${ltd}&lon=${lng}&appid=ec27c25d830d93288cf58c3b568da350`, true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                let data = JSON.parse(xhr.responseText);
                // console.log(data);
                let temperature = Math.round(data.main.temp - 273.15);
                let weather = data.weather[0].description;
                textContainer.innerHTML = ('Current temperature: ' + temperature + 'C;' + weather + '<br />' + data.name);
            } else {
                console.log('error:' + xhr.status);
            }
        }
        xhr.send()
        if (localStorage.ltd != ltd && localStorage.lng != lng) {
            localStorage.setItem('ltd', ltd);
            localStorage.setItem('lng', lng)
        }
    }

}

google.maps.event.addDomListener(window, 'load', weather);