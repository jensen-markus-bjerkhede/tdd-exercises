require('jest');

const { capitalize } = require('../src/capitalize.js');


it('should return a string with first letter capitalized and the rest small', () => {
	// arrange
	const input = 'may the force be with you';
	const expected = 'May the force be with you';

	// act
	let actual = capitalize(input);

	// assert
	expect(actual).toBe(expected);
})

it('should return undefined if the string contains non-letter characters', () => {
	// arrange
	const input = 'C3-P0';
	const expected = undefined;

	// act
	let actual = capitalize(input);

	// assert
	expect(actual).toBe(expected);
})
