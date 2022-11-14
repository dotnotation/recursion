// given an array of strings
// capitalize the first letter of each string in the array
//ex. capitalizeFirst(['car', 'taco', 'banana'])

function capitalizeFirst(arr){
    // take first element of array 
    // shift the first element 
    // toUpperCase
     return arr[0].charAt(0).toUpperCase() + arr[0].slice(1)

}