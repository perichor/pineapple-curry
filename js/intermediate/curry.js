// curry
// usage:
// const add = (a, b) => a + b
// const curried = curry(add)
// console.log(curried((2)(2))) // => 4

// your code here
var curry = function(fn) {
	return function(...args) {
		return fn(...args);
	}
};

