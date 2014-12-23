# L.TransitionedIcon
[![NPM version](http://img.shields.io/npm/v/leaflet-transitionedicon.svg?style=flat)](https://www.npmjs.org/package/leaflet-transitionedicon)

A [Leaflet](http://leafletjs.com/) plugin that extends [L.Icon](http://leafletjs.com/reference.html#icon) to support transitioning with CSS3 transitions. The way it works is inspired by React's [ReactCSSTransitionGroup](http://facebook.github.io/react/docs/animation.html).

```sh
$ npm install leaflet-transitionedicon --save
```

### Usage

```js
var TransitionedIcon = require('leaflet-transitionedicon');

// marker template
var MyIcon = TransitionedIcon.extend({
    options: {
        // iconUrl: 'images/marker-icon.png',
        // iconRetinaUrl: 'images/marker-icon-2x.png',
        // shadowUrl: 'images/marker-shadow.png',
        // iconSize: [25, 41],
        // iconAnchor: [12, 41],
        // popupAnchor: [1, -34],
        // shadowSize: [41, 41],
        cssTransitionJitterIn: 0,
        cssTransitionJitterOut: 0,
        cssTransitionName: 'my-transition'
    }
});
```

The main options to note are:

   - `cssTransitionName` – The name to use for CSS classes (see below)
   - `cssTransitionJitterIn` – Milliseconds of jitter before the marker is displayed. Good for staggering results into view to prevent a bunch of icons coming into view all at once, which can be overwhelming.
   - `cssTransitionJitterOut` – Milliseconds of jitter to wait before removing a marker. Useful for staggering the removal of markers. 

Using `cssTransitionName`, the plugin will create the following classes with the appropriate timing to trigger transitions:

```css
.my-transition { } /* always on element, from birth to death */
.my-transition-enter { } /* start state */
.my-transition-enter-active { } /* tick after birth */
.my-transition-leave { } /* destruction starting */
.my-transition-leave-active { }  /* end state */
```

No other configuration is necessary. Simply add and remove markers from the map as usual:

```js
// add marker to map (transition in)
var marker = L.marker([lat, lon], {icon: new MyIcon()}).addTo(map);

// remove marker from map (transition out)
map.removeLayer(marker);
```

## License

Copyright &copy; 2014 [Brian Reavis](https://github.com/brianreavis) & [Contributors](https://github.com/naturalatlas/leaflet-transitionedicon/graphs/contributors)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.