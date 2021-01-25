require('jest');
const { store } = require('../src/store.js');
//Funktionen store ska ta en parameter
//Man anropar den ska värdet på parametern sparas
//Funktionen retrieve ska inte ha några parametrar
//När den anropas ska den returnera värdet som man senast sparade med store

it('Funktionen store ska ta en parameter', () => {
    // arrange
    const af = () => {
        store('something', 'somethingelse');
    };
    // act & assert
    expect(af).toThrow('Invalid number of parameters');
});

it('När man anropar den ska värdet på parametern sparas', () => {
    // arrange	
    const expected = 'something';
    // act
});