require('jest');
const { store, retrieve } = require('../src/store.js');

it('Funktionen store ska ta en parameter', () => {
    // arrange
    const af = () => {
        store('something', 'somethingelse');
    };
    // act & assert
    expect(af).toThrow('Invalid number of parameters');
});
it('Funktionen retrieve ska inte ha några parametrar', () => {
    // arrange
    const af = () => {
        retrieve('something');
    };
    // act & assert
    expect(af).toThrow('Invalid number of parameters');
});
it('När retrieve anropas ska den returnera värdet som man senast sparade med store', () => {
    // arrange	
    const expected = 'something';
    // act
    store(expected);
    const actual = retrieve();
    // assert
    expect(actual).toBe(expected);
});