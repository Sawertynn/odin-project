const sumAll = function(a, b) {
    // x = parseInt(a)
    // y = parseInt(b)
    // if (x !== a || y !== b) {
    //     return 'ERROR'
    // }
    if (!Number.isInteger(a) || a < 0 || !Number.isInteger(b) || b< 0) {
        return 'ERROR';
    }
    low = Math.min(a, b)
    high = Math.max(a, b)

    return (a + b) / 2 * (high - low + 1);
};

// Do not edit below this line
module.exports = sumAll;
