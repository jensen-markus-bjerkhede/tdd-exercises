require('jest');

const { calculateInterest } = require('../src/exercise-0.js');

it('it should throw an error if interest has a bad value', () => {

    // act
    const actual = calculateInterest('Markus');

    // assert
    expect(actual).toThrow('Bad value for interest');
});

// it should throw an error if years has a bad value
// it should throw an error if wrong number of parameters
// it should return 1 if years == 0
// it should return correct interest rate otherwise