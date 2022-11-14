// given an array of strings
// capitalize the first letter of each string in the array
//ex. capitalizeFirst(['car', 'taco', 'banana'])

function capitalizeFirst(arr){
    // take first element of array 
    // shift the first element 
    // toUpperCase
    // need to account for an empty array
    if (arr.length === 0){
        return "There is nothing to capitalize"
    }

    if (arr.length === 1){
        return arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
    }

    let recursive = capitalizeFirst(arr.slice(0, -1))
    console.log(recursive)
    const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1)
    recursive.push(string)
    return recursive
}

//solution from Colt Steele
function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
      // the first array element and the first element within that element
      // substr is deprecated
      // substr returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards
    }
    const res = capitalizeFirst(array.slice(0, -1));
    // returns the list of array minus the last element
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    // slice the array giving the array minus the last element
    // take the first array element, and the first element within that array and uppercase it
    res.push(string);
    return res;
  }