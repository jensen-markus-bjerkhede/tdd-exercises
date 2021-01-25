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

it('När man anropar store ska värdet på parametern sparas', () => {
    // arrange
    const expected = store('something');
    // act 
    const actual = value;
    //assert
    expect(actual).toBe(expected);
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
    const savedByStore = store('something');
    // act
    const actual = retrieve();
    // assert
    expect(actual).toBe(savedByStore);
});