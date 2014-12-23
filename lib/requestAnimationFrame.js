// Source: React.js (BSD)
module.exports = window.requestAnimationFrame || function(callback) {
	var currTime = Date.now();
	var timeDelay = Math.max(0, 16 - (currTime - lastTime));
	lastTime = currTime + timeDelay;
	return global.setTimeout(function() {
		callback(Date.now());
	}, timeDelay);
};

// Works around a rare bug in Safari 6 where the first request is never invoked.
requestAnimationFrame(function() {});
