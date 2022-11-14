// accepts an array of arrays
// returns a new array with all the values flattened
// ex. flatten([1, 2, 3, [4, 5]]) = [1, 2, 3, 4, 5]

function flatten(arr){
    // .flat() creates a new array with all sub-array elements concated into it recursively up to the specified depth
    // could use spread operator and concat [].concat(...arr)
    // what condition stops this from running/ how to check if arr is completely flat/ check if array depth is 1
    return arr.flat(Infinity)
    // this technically works but isn't recursive
}

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
            // iterate through oldArr
            console.log(Array.isArray(oldArr[i]), "old", oldArr, "new", newArr)
          if(Array.isArray(oldArr[i])){
            // if it is an array
                newArr = newArr.concat(flatten(oldArr[i]))
                console.log("if", newArr, "old", oldArr)
                // concat returns a new array and is used to merge arrays
          } else {
              // if it is just a number
                newArr.push(oldArr[i])
                console.log("else", newArr, "old", oldArr)
                // push adds elements to the end of an array and returns the length of updated array
          }
    } 
    return newArr;
} 

// Colt Steele's solution without comments
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }

// if it is not in a nested array, the number gets pushed to the end of our newArr
// if during iteration a nested array is hit, it get flattened

//  else [1] old (4) [1, 2, 3, Array(3)]
//  else (2) [1, 2] old (4) [1, 2, 3, Array(3)]
//  else (3) [1, 2, 3] old (4) [1, 2, 3, Array(3)]
//  else [4] old (3) [4, 5, Array(2)]
//  else (2) [4, 5] old (3) [4, 5, Array(2)]
//  else [6] old (2) [6, 7]
//  else (2) [6, 7] old (2) [6, 7]
//  if (4) [4, 5, 6, 7] old (3) [4, 5, Array(2)]
//  if (7) [1, 2, 3, 4, 5, 6, 7] old (4) [1, 2, 3, Array(3)]
//  (7) [1, 2, 3, 4, 5, 6, 7]