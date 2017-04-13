// write fn that takes two arrays as
// and reorders with respect to order
// array = ['C', 'D', 'E', 'F', 'G']
// order = [3, 0, 4, 1, 2]
// result = ['D', 'F', 'G', 'C', 'E']

var fn = function(array, order) {
	var result = [];
	order.forEach(function(i) {
		result.push(array[i]);
	});
	return result;
}

console.log(fn(['C', 'D', 'E', 'F', 'G'], [3, 0, 4, 1, 2]))