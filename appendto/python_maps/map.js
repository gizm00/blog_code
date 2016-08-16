var map
var markers = []

// after the geojson is loaded, iterate through the map data to create markers
// and add the pop up (info) windows
function loadMarkers() {
  console.log('creating markers')
  map.data.forEach(function(feature) {
    
    // geojson format is [longitude, latitude] but google maps marker position attribute
    // expects [latitude, longitude]
    var latitude = feature.getGeometry().get().lat()
    var longitude = feature.getGeometry().get().lng()
    var titleText = feature.getProperty('title')
    var descriptionText = feature.getProperty('description')

    var marker = new google.maps.Marker({
      position: {lat: latitude, lng:longitude},
      title: titleText,
      map: map
     });
    
    var markerInfo = "<div><h3>" + titleText + "</h3>Amenities: " + descriptionText + "</div>"
    var infowindow = new google.maps.InfoWindow({
          content: markerInfo
        });
    marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    markers.push(marker)
  });
}

function initMap() {
    map_options = {
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      center: {lat: 42.9446, lng: -122.1090}
    }
    
    map_document = document.getElementById('map')
    map = new google.maps.Map(map_document,map_options);
    geojson_url = 'https://raw.githubusercontent.com/gizm00/blog_code/master/appendto/python_maps/collection.geojson'

    console.log('loading geojson')
    map.data.loadGeoJson(geojson_url, null, loadMarkers) 
 
}

google.maps.event.addDomListener(window, 'load', initMap);
