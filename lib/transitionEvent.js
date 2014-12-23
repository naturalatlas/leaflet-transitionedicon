module.exports = (function() {
	var el = document.createElement('div')
	var names = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'otransitionend',
		'transition': 'transitionend'
	};

	for (var name in names) {
		if (el.style[name] !== undefined) {
			return names[name];
		}
	}
})();