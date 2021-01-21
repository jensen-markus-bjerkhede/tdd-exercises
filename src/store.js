let savedValue;

function store(value) {
	if( value !== undefined )
		savedValue = value;
}

function retrieve() {
	return savedValue;
}

module.exports = { store, retrieve };
