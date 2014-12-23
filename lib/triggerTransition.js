var transitionWatcher = require('./transitionWatcher.js');

module.exports = function(els, className, jitter, callback) {
	callback = callback || function() {};
	if (!className) return callback();

	var i, n = els.length;
	var leave = /-leave$/.test(className);
	for (i = 0; i < n; i++) {
		els[i].className += ' ' + className;
		if (!leave) els[i].style.visibility = 'visible';
	}

	var completed = 0;
	var delay = Math.round(Math.random() * jitter);

	setTimeout(function() {
		for (i = 0; i < n; i++) {
			var el = els[i];
			transitionWatcher(el, transitionEnd);
			el.className = el.className.replace(className, className + '-active');
		}
	}, delay);

	function transitionEnd(el) {
		if (!leave) el.className = el.className.replace(className + '-active', '').replace(className, '');
		if (++completed === n) callback();
	}
};