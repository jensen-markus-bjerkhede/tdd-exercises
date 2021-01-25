/*
Requirements
it should throw an error if interest has a bad value
it should throw an error if years has a bad value
it should throw an error if wrong number of parameters
it should return 1 if years == 0
it should return correct interest rate otherwise
*/

function calculateInterest(interest, years) {
    // 1 <= interest < 2
    if (arguments.length != 2) {
        throw new Error('Wrong amount of parameters');
    }
    if ((typeof interest) !== 'number') {
        throw new Error('Bad value for interest');
    }
    if (isNaN(years)) {
        throw new Error('Bad value for years');
    }
    // Proper value
    if (years === 0) {
        return 1
    } else {
        return interest * years;
    }

    // Bad value


}


function test_forBadInterest_shouldThrowException() {
    let interest = 'anka';
    let years = 15;
    // let expected  = exception
    try {
        let result = calculateInterest(interest, years);
        console.log('Did not throw an error for bad value for interest!');
    } catch {
        // Function acted according to requirements
        // Success!
        console.log('Test case: bad value for interest - success');
    }
}

test_forBadInterest_shouldThrowException();
module.exports = { calculateInterest };

/*
// Example usage:
calculateInterest(0.021, 0) → 1  // 100%, ingen förändring
calculateInterest(0.50, 1) → 1.5  // 50% ränta, +50% efter 1 år
calculateInterest(0.10, 2) → 1.21  // 10% första året, 10% andra året
// 1.1 * 1.1 == 1.21
*/