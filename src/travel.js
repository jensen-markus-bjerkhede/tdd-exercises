let data = {
	origin: undefined
};

/* 5a. Attempts to define the user's current location. The
* parameter must be a non-empty string. Returns true if successful.
*/
function setOrigin(origin) {
	if( (typeof origin) != 'string' || origin == '' ) {
		return false;
	}
	data.origin = origin;
	return true;
}
function resetOrigin() {
	data.origin = undefined;
}

/* 5b. Attempts to book a trip (buy a ticket) to the destination.
* The parameter must be a non-empty string that is not equal
* to the origin position. Returns true if successful.
*/
// bookTrip(destination);

/* 5c. Attempts to travel from an origin to a destination.
* Requires both origin and destination to be set. Should
* throw an Error if either origin or destination has not
* been set. Returns false if origin and destination have been
* set, but have incorrect values; otherwise returns true.
*/
// goOnTrip();

/* 5d. Returns the current position of the user. Before a trip
* has been made, the position is equal to origin. After a
* trip it is equal to destination. May throw an exception.
*/
function getPosition() {
	if( data.origin === undefined )
		throw new Error('You must call setOrigin first');
	return data.origin;
}


module.exports = { setOrigin/*, bookTrip, goOnTrip*/, getPosition, resetOrigin };
