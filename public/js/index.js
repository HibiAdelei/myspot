var marker;
var infowindow;

function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapOptions = {
        center: myCenter, zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
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
        content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
    });
    infowindow.open(map, marker);
}
