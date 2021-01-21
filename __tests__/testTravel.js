require('jest');

const { setOrigin, bookTrip, goOnTrip, getPosition, resetOrigin } = require('../src/travel.js');


describe('setOrigin', () => {
	/* 5a. Attempts to define the user's current location. The
	* parameter must be a non-empty string. Returns true if successful.
	*/
	it('should return true for a non-empty string', () => {
		// arrange
		const input = 'Göteborg';
		const expected = true;

		// act
		const actual = setOrigin(input);

		// assert
		expect(actual).toBe(expected);
	})

	it('should return false for an empty string', () => {
		// arrange
		const input = '';
		const expected = false;

		// act
		const actual = setOrigin(input);

		// assert
		expect(actual).toBe(expected);
	})

	it('should return false for null', () => {
		// arrange
		const input = null;
		const expected = false;

		// act
		const actual = setOrigin(input);

		// assert
		expect(actual).toBe(expected);
	})
})


describe('getPosition', () => {
	/* 5d. Returns the current position of the user. Before a trip
	* has been made, the position is equal to origin. After a
	* trip it is equal to destination. May throw an Error.
	*/
	it('should return origin before trip', () => {
		// arrange
		const origin = 'Malmö';
		setOrigin(origin);

		// act
		const actual = getPosition();

		// assert
		expect(actual).toBe(origin);
	})

	// it should return destination after trip
	// TODO: wait until we've written test case for bookTrip

	it('should throw Error if origin not set', () => {
		// arrange
		resetOrigin();
		const af = () => {
			getPosition();
		}

		// act + assert
		expect(af).toThrow();
	})
})


// describe('bookTrip', () => { })
// describe('goOnTrip', () => { })
