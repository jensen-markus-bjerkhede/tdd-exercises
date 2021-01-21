function isWaterBoiling(degrees) {
	if( (typeof degrees) !== 'number' ) {
		throw new Error('Illegal input');
	}
	else if( degrees >= 100 ) {
		return true;
	}
	return false;
}

module.exports = { isWaterBoiling };
