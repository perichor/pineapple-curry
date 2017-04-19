// write a function that translates english to pig-latin

var vowels = {
	a: true,
	e: true,
	i: true,
	o: true,
	u: true
};

var pigLatter = function(statement) {
	var words = statement.split(' ');
	var result = ''

	words.forEach(function(word) {
		var letters = word.split('');

		for (var i = 0; i < letters.length; i++) {
			if (vowels[letters[i]]) {
				result = result + word.slice(i);
				result = result + word.slice(0, i) + 'ay ';
				i = i + letters.length;
			}
		}
	});
	return result;
};

console.log(pigLatter('I am a duck'))