// Initialize the map
function initialize() {
  const mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(0, 35),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    minZoom: 2
  };

  // Create map instance
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Info window
  const infoWindow = new google.maps.InfoWindow();

  // Marker for Kenya, Mwachon
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(0.158724, 35.609349),
    map,
    title: 'Kenya, Mwachon'
  });

  // Marker click event
  marker.addListener('click', () => {
    infoWindow.setContent(marker.title);
    infoWindow.open(map, marker);
  });

  // Adjust center on window resize
  window.addEventListener('resize', () => {
    map.setCenter(mapOptions.center);
  });
}

// Load the map when the page finishes loading
window.addEventListener('load', initialize);
