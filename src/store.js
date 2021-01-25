let savedValue;

function store(value) {
    if (arguments.length !== 1) {
        throw new Error('Invalid number of parameters');
    }
    savedValue = value;
}

function retrieve() {
    if (arguments.length > 0) {
        throw new Error('Invalid number of parameters');
    }
    return savedValue;
}
module.exports = { store, retrieve };