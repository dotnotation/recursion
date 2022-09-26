// accepts an array of arrays
// returns a new array with all the values flattened
// ex. flatten([1, 2, 3, [4, 5]]) = [1, 2, 3, 4, 5]

function flatten(arr){
    // .flat() creates a new array with all sub-array elements concated into it recursively up to the specified depth
    // could use spread operator and concat [].concat(...arr)
    // what condition stops this from running/ how to check if arr is completely flat
    if (arr.length === 0) return arr
    return flatten(arr.flat())
}