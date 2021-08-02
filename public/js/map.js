/* eslint-disable no-undef */
let marker;

function placeMarker(map, location) {
  if (!marker || !marker.setPosition) {
    marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  } else {
    marker.setPosition(location);
  }
  document.getElementById('latitude').value =
    Math.round(location.lat() * 10000) / 10000;
  document.getElementById('longitude').value =
    Math.round(location.lng() * 10000) / 10000;
}

// This function is called by the google maps API when it finishes loading
// eslint-disable-next-line no-unused-vars
function initMap() {
  const map = new google.maps.Map(document.getElementById('interactive-map'), {
    center: { lat: 32.7354, lng: -117.1491 },
    zoom: 10,
  });

  // Try to center map on user's current location
  // using HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(pos);
      },
      () => {
        console.log('The Geolocation service failed.');
      }
    );
  } else {
    // Browser doesn't support Geolocation
    console.log("Your browser doesn't support geolocation.");
  }

  google.maps.event.addListener(map, 'click', function (event) {
    placeMarker(map, event.latLng);
  });
}

// Create a static, non-interactable map using the Google Maps API
// Uses the data-latitude and data-longitude attributes for coordinates
function renderStaticMap() {
  const staticMaps = document.getElementsByClassName('static-google-map');
  if (staticMaps) {
    for (let i = 0; i < staticMaps.length; i++) {
      const staticMap = staticMaps[i];
      staticMap.innerHTML +=
        "<img width='100%' src='https://maps.googleapis.com/maps/api/staticmap?center=" +
        staticMap.dataset.latitude +
        ',' +
        staticMap.dataset.longitude +
        '&zoom=12&size=600x400&key=AIzaSyBeNBJQ5Gza1b_PNxX1_B4CKUcz6t9mozM&markers=color:red%7Clabel:%7C' +
        staticMap.dataset.latitude +
        ',' +
        staticMap.dataset.longitude +
        "'></img>";
    }
  }
}
renderStaticMap();
