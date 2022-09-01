/** @param {string} input */

function isIsogram(input) {
	const foo = input.toLowerCase();

	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			if (foo.charAt(i) === foo.charAt(j)) {
				return false;
			}
		}
	}

	return true;
}

const input = "ovo";

console.log(isIsogram(input));
