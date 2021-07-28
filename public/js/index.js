function initMap() {

    const myLatlng = { lat: 32.6998, lng: -117.175 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatlng,
    });
    // Create the initial InfoWindow and marker
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,
    });
    let marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });

    infoWindow.open(map);

    function placeMarker(location) {

        marker = new google.maps.Marker({
            position: location.latLng,
            map: map
        })


    }
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        infoWindow.open(map);

        placeMarker(mapsMouseEvent)
    });

    marker.addListener("click", function (mapsMouseEvent) {
        var infoWindow = new google.maps.InfoWindow();
        infoWindow.close();
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.open(map, this);

        // assuming you also want to hide the infowindow when user mouses-out

    });
}
