function autocomplete() {
    let ltd, lng;
    let container = document.querySelector('[name="city"]');
    let autocomplete = new google.maps.places.Autocomplete(container);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        let place = autocomplete.getPlace();
        ltd = place.geometry.location.lat();
        lng = place.geometry.location.lng();
        let xhr = new XMLHttpsRequest();
        xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=48.464717&lon=35.0461&appid=ec27c25d830d93288cf58c3b568da350', true);
        xhr.send();
        if (xhr.status != 200) {
            console.log(xhr.responseText)
            console.log(xhr.status)
            console.log('error')
        } else {
            console.log(123);
        }
    })
}

google.maps.event.addDomListener(window, 'load', autocomplete);