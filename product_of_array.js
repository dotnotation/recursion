// takes in an array of numbers
// returns the product of them all
// ex. productOfArray([1, 2, 3]) = 6
// productOfArray([1, 2, 3, 10]) = 60

function productOfArray(arr){
    //call the function to multiply each number together
    if (arr.length === 0) return 1
    // need to account for array being empty
    // call function recursively
    // slice array
    return arr[0] * productOfArray(arr.slice(1))
}