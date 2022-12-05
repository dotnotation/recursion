// Given an array of words
// Return a new array containing each word capitalized
// By capitalized, every letter in every word is capital
// all letters in the even array are lower case to begin with
// no special characters or spaces
// ex. let words = ["i", "am", "learning", "recursion"]
// returns ["I", "AM", "LEARNING", "RECURSION"]

function capitalizeWords(arr){
    // iterate through arr
    // if it is just one word, can just upper case
    if (arr.length === 1){
        return [arr[0].toUpperCase()]
    } 
    
    let result = capitalizeWords(arr.slice(0, -1))
    // this will return the array minus the last element
    // this will be run until the array is just the first element which will then run line 12-13
    // then it will go to line 20
    result.push(arr.slice(arr.length - 1)[0].toUpperCase())
    // push adds to the end of the array
    // this will go through the remaining elements of the array and capitalize it
    return result
}