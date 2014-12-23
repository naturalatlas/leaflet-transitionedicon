var transitionEvent = require('./transitionEvent.js');
var watching = 0;
var interval;

module.exports = function(el, callback) {
	var called;
	var done = function(e) {
		if (e && e.target !== el) return;
		if (called) return;

		called = true;
		el.removeEventListener(transitionEvent, done);
		callback(el);
	};

	el.addEventListener(transitionEvent, done, false);
	setTimeout(done, 1000);
};