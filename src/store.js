let value;
//Funktionen store ska ta en parameter
function store(value) {
    if (arguments.length !== 1) {
        throw new Error('Invalid number of parameters');
    }

}

function retrieve() {

}
module.exports = { store, retrieve };