var bind = require('./lib/bind.js');
var triggerTransition = require('./lib/triggerTransition.js');
var requestAnimationFrame = require('./lib/requestAnimationFrame.js');
var transitionEvent = require('./lib/transitionEvent.js');
var L = window.L;

var _onAdd = L.Marker.prototype.onAdd;
var _onRemove = L.Marker.prototype.onRemove;

L.Marker.prototype.onAdd = function() {
	var self = this;
	_onAdd.apply(self, arguments);
	var iconInstance = self.options.icon;
	if (iconInstance && iconInstance._cssIn) {
		iconInstance._cssIn(self._icon, self._shadow);
	}
};

L.Marker.prototype.onRemove = function(map) {
	var self = this, args = arguments;
	var iconInstance = self.options.icon;
	if (iconInstance && iconInstance._cssOut) {
		iconInstance._cssOut(self._icon, self._shadow, function() {
			self._map = map;
			if (self._icon) {
				_onRemove.apply(self, args);
			}
		});
	} else {
		_onRemove.apply(self, args);
	}
};

/**
 * A subclass of L.Icon that adds support for CSS transitions.
 *
 * The transition states will be:
 *   1) "{cssTransitionName}-enter"
 *   2) "{cssTransitionName}-enter-active"
 *   3) "{cssTransitionName}-leave"
 *   4) "{cssTransitionName}-leave-active"
 *
 * Usage:
 *   var MyIcon = L.TransitionedIcon.extend({
 *       options: {
 *           cssTransitionJitterIn: 0,
 *           cssTransitionJitterOut: 0,
 *           cssTransitionName: 'my-transition'
 *       }
 *   });
 *
 * @type {L.Icon}
 */
module.exports = !transitionEvent ? L.Icon : L.Icon.extend({
	_cssIn: function(icon, shadow, callback) {
		var options = this.options;
		var transitionName = options.cssTransitionName;
		icon.className += ' ' + transitionName;
		shadow.className += ' ' + transitionName;
		triggerTransition(icon, shadow, transitionName + '-enter', options.cssTransitionJitterIn, callback);
	},
	_cssOut: function(icon, shadow, callback) {
		var options = this.options;
		triggerTransition(icon, shadow, options.cssTransitionName + '-leave', options.cssTransitionJitterOut, callback);
	}
});