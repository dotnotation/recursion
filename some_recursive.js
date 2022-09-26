// accepts an array and a callback
// returns true if a single value in the array returns true when passed to the callback
// returns false otherwise
// callback: isOdd = val => val % 2 !== 0
// ex. someRecursive([1, 2, 3, 4], isOdd) = true

function someRecursive(arr, call){
    if (call(arr) === true) return true
    if (arr.length !== 0) return someRecursive(arr.slice(1), call)
    return false
}