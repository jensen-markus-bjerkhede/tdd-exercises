require('jest');

it('Must contain one parameter', () => {
    // arrange
    let af = () => {
        capitalize();
    }

    // act & assert
    expect(af).toThrow('Must contain one parameter');
});

it('If value is not valid letter throw error', () => {
    // arrange
    let af = () => {
        capitalize('6dasd');
    }

    // act & assert
    expect(af).toThrow('Illegal first character of string');
});
it('Should change first character to capital letter', () => {
    // arrange
    const expected = 'Markus';
    // act 
    const actual = capitalize('markus');
    // assert
    expect(actual).toBe(expected);
});


const { capitalize } = require('../src/capitalize.js');