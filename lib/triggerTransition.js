var requestAnimationFrame = require('./requestAnimationFrame.js');
var transitionEvent = require('./transitionEvent.js');

module.exports = function(icon, shadow, className, jitter, callback) {
	if (!className) return callback();
	icon.className += ' ' + className;
	shadow.className += ' ' + className;
	var delay = Math.round(Math.random() * jitter);

	setTimeout(function() {
		requestAnimationFrame(function() {
			icon.addEventListener(transitionEvent, transitionEnd, false);
			shadow.addEventListener(transitionEvent, transitionEnd, false);
			icon.style.display = 'block';
			icon.className = icon.className.replace(className, className + '-active');
			shadow.style.display = 'block';
			shadow.className = shadow.className.replace(className, className + '-active');
		});
	}, delay);

	function transitionEnd(e) {
		var el = e.currentTarget;
		if (e.target !== el) return;
		el.removeEventListener(transitionEvent, transitionEnd);
		el.className = el.className.replace(className + '-active', '').replace(className, '');
		if (callback) callback();
	}
};