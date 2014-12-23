var L = require('leaflet');
L.TransitionedIcon = require('../index.js');

var origin_lat = 51.505;
var origin_lon = -0.09;

// create map
var map = L.map('map').setView([origin_lat, origin_lon], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// marker template
var MyIcon = L.TransitionedIcon.extend({
	options: {
		iconUrl: 'images/marker-icon.png',
		iconRetinaUrl: 'images/marker-icon-2x.png',
		shadowUrl: 'images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
		cssTransitionBatches: 0,
		cssTransitionJitterIn: 1200,
		cssTransitionJitterOut: 300,
		cssTransitionName: 'my-transition'
	}
});

// add markers
function createMarkers() {
	var lat, lon;
	var count = 50 + Math.round(Math.random() * 5);
	var jitter = 0.03;
	var markers = [];
	for (var i = 0; i < count; i++) {
		lat = origin_lat + (Math.random() * jitter - (jitter / 2));
		lon = origin_lon + (Math.random() * jitter - (jitter / 2));
		markers.push(L.marker([lat, lon], {icon: new MyIcon()}).addTo(map));
	}

	var lifetime = 1000 + Math.round(Math.random() * 2000);
	setTimeout(function() {
		for (var i = 0; i < count; i++) {
			map.removeLayer(markers[i]);
		}
		setTimeout(createMarkers, 10);
	}, lifetime);
}

createMarkers();