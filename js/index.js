function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 8,
     center: {lat: -19.9194127, lng: -43.934697799999995}
   });
   var geocoder = new google.maps.Geocoder;
   var infowindow = new google.maps.InfoWindow;

   document.getElementById('submit').addEventListener('click', function() {
     geocodeLatLng(geocoder, map, infowindow);
   });
 }

 function geocodeLatLng(geocoder, map, infowindow) {
   var lat = document.getElementById('lat').value;
   var lng = document.getElementById('lng').value;

   var latlng = new google.maps.LatLng(lat, lng);  

   geocoder.geocode({'location': latlng}, function(results, status) {
     if (status === 'OK') {
       if (results[1]) {
         map.setZoom(11);
         var marker = new google.maps.Marker({
           position: latlng,
           map: map
         });
         infowindow.setContent(results[1].formatted_address);
         infowindow.open(map, marker);
       } else {
         window.alert('No results found');
       }
     } else {
       window.alert('Geocoder failed due to: ' + status);
     }
   });
 }