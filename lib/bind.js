module.exports = function(self, fn) {
	return function() {
		fn.apply(self, arguments);
	};
};