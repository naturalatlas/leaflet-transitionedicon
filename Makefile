all:
	../node_modules/.bin/webpack
	rm -rf ./images
	cp -R ../node_modules/leaflet/dist/images ./images
	cp -R ../node_modules/leaflet/dist/leaflet.css ./leaflet.css