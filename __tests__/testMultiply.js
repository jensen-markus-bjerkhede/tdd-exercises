require('jest');

const { multiply } = require('../src/multiply.js');

// 4 Skriv testfall till funktionen multiply(x, y), som tar två tal som parametrar och ska returnera deras produkt. Exempel: multiply(2, 5) === 10

it('should calculate the product of two numbers', () => {
	// arrange
	let a = 4, b = 15;   // 4*15==60
	const expected = 60;

	// act
	let actual = multiply(a, b);

	// assert
	expect(actual).toBe(expected);
})

it('should throw an Error if only one parameter', () => {
	let a = 132;
	const danger = () => {
		multiply(a);
	}
	expect(danger).toThrow();
})
it('should throw an Error if no parameters', () => {
	const danger = () => multiply()
	expect(danger).toThrow();
})

it('should throw an Error if first parameter not a number', () => {
	// arrange
	let a = 'boll', b = 12;
	const danger = () => multiply(a, b);

	// assert
	expect(danger).toThrow();
})
it('should throw an Error if second parameter not a number', () => {
	let a = 13, b = 'bil';
	const danger = () => multiply(a, b);

	// assert
	expect(danger).toThrow();
})



// multiply(5)  -->  kasta ett Error
// multiply()  -->  kasta ett Error
// multiply([1, 2], [3, -1])  -->  kasta ett Error
// multiply(2, Infinity)  -->  2*Infinity == Infinity
// multiply(15, NaN)  -->  NaN
