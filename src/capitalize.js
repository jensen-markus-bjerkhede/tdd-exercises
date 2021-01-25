function capitalize(string) {
    if (arguments.length !== 1) {
        throw new Error('Must contain one parameter');
    }
    if ((typeof string === 'string' && string.length < 1) || string.charAt(0).match(/[a-zåäö]/i)) {
        throw new Error('Must contain one parameter');
    }
}
module.exports = { capitalize }