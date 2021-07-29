var marker;
var infowindow;

function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(32.7281, -117.1833);
    var mapOptions = {
        center: myCenter, zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(map, event.latLng);
    });
}

function placeMarker(map, location) {
    if (!marker || !marker.setPosition) {
        marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    } else {
        marker.setPosition(location);
    }
    if (!!infowindow && !!infowindow.close) {
        infowindow.close();
    }
    infowindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + Math.round(location.lat() * 10000) / 10000 + '<br>Longitude: ' + Math.round(location.lng() * 10000) / 10000

    });
    document.getElementById('latitude').value = Math.round(location.lat() * 10000) / 10000;
    document.getElementById('longtitude').value = Math.round(location.lng() * 10000) / 10000;
    infowindow.open(map, marker);
}
