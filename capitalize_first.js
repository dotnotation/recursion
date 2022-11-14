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
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }