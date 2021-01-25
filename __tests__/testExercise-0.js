require('jest');

const { calculateInterest } = require('../src/exercise-0.js');

it('it should throw an error if interest has a bad value', () => {
    // arange
    const af = () => {
        calculateInterest('Markus', 'years');
    };
    // act & assert
    expect(af).toThrow('Bad value for interest');
});

it('should throw an error if years has a bad value', () => {

    const af = () => {
        calculateInterest(123123123123123, 'years');
    };
    expect(af).toThrow('Bad value for years');

});

it('should throw an error if wrong number of parameters', () => {
    const af = () => {
        calculateInterest(123123123123123);
    };
    expect(af).toThrow('Wrong amount of parameters');
});
it('should return 1 if years == 0', () => {
    // arrange
    const interest = 0.10;
    const years = 0;
    const expected = 1;

    // act
    const actual = calculateInterest(interest, years);

    // assert
    expect(actual).toBe(expected);
});

it('should return correct interest rate otherwise', () => {
    // arrange
    const interest = 0.5;
    const years = 1;
    const expected = 0.5;

    // act
    const actual = calculateInterest(interest, years);

    // assert
    expect(actual).toBe(expected);

});