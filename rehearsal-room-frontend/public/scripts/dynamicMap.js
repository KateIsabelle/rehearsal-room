function initMap() {
  // Map options
  const options = {
    zoom: 13,
    center: { lat: 49.2827, lng: -123.1207 }
  }
  // New map
  const map = new google.maps.Map(document.getElementById('map'), options);

  // loadPins(pinsArr, map);
}