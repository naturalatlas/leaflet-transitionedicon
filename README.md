# Leaflet.TransitionedIcon
[![NPM version](http://img.shields.io/npm/v/leaflet-transitionedicon.svg?style=flat)](https://www.npmjs.org/package/leaflet-transitionedicon)

A [Leaflet](http://leafletjs.com/) plugin that extends [L.Icon](http://leafletjs.com/reference.html#icon) to support transitioning with CSS3 transitions – great for easing markers into view ([demo](http://naturalatlas.github.io/leaflet-transitionedicon/)). It even supports jitter for staggering markers into view (to prevent visual overload). The way it works is inspired by React's [ReactCSSTransitionGroup](http://facebook.github.io/react/docs/animation.html).

```sh
$ npm install leaflet-transitionedicon --save
```

### Usage

```js
var TransitionedIcon = require('leaflet-transitionedicon');

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
        cssTransitionName: 'my-transition',
        cssTransitionBatches: 0
    }
});
```

The main options to note are:

   - `cssTransitionName` – The name to use for transition classes (see below)
   - `cssTransitionJitterIn` – Milliseconds of jitter before the marker is displayed.
   - `cssTransitionJitterOut` – Milliseconds of jitter to wait before removing a marker.
   - `cssTransitionBatches` – If not zero, the plugin will group transitions in and out into the specified number of batches. This only makes sense to use when jittering is enabled. Batching can be useful for aesthetic and/or performance reasons.

Using `cssTransitionName`, the plugin will apply classes that represent the transition lifecycle. For example implementation, check out the [demo code](./demo/index.html).

```css
.my-transition { } /* always on element, from birth to death */
.my-transition-enter { } /* start state */
.my-transition-enter-active { } /* tick after birth */
.my-transition-leave { } /* destruction starting */
.my-transition-leave-active { }  /* end state */
```

That's it – no other configuration is necessary. Simply add and remove markers from the map as usual:

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
