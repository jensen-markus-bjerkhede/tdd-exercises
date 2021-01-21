require('jest');

const { isWaterBoiling } = require('../src/fusionPower.js');

// Returns true if water would be boiling at the specified temperature
// Throws an Error on illegal input
// isWaterBoiling(degreesCelsius);

it('should return true for 100 degrees', () => {
	// arrange
	const input = 100;
	const expected = true;

	// act
	const actual = isWaterBoiling(input);

	// assert
	expect(actual).toBe(expected);
})
it('should return false for 50 degrees', () => {
	// arrange
	const input = 50;
	const expected = false;

	// act
	const actual = isWaterBoiling(input);

	// assert
	expect(actual).toBe(expected);
})
it('should throw an Error for illegal input', () => {
	// arrange
	const input = '55';
	const af = () => {
		isWaterBoiling(input);
	}

	// act + assert
	expect(af).toThrow('Illegal input');
})



// Medan du jobbar, diskutera med en klasskamrat. Ni kan fundera på följande frågor:
// Vilka värden kan parametern degreesCelsius ha?
// Vilka värden kan funktionen returnera?
// När bör funktionen kasta ett Error med ett beskrivande felmeddelande?
// Behövs fler sorters Error? Motivera ert svar.
// Finns det värden som är viktigare att testa än andra? Varför?
