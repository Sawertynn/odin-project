const removeFromArray = function(arr, ...args) {
    // let result = Array.from(arr);
    // result.filter((item) => ! args.includes(item))
    return arr.filter((item) => ! args.includes(item));
};

let ans = removeFromArray([1, 2, 3, 4], 3)
console.log(ans)

// Do not edit below this line
module.exports = removeFromArray;
