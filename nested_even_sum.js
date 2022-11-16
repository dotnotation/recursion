// return the sum of all EVEN numbers in an OBJECT
// The object may contain nested objects

function nestedEvenSum(obj, sum=0){
  // access via keys
  // for each key check if it is a number
  // if it is a number, check to see if it is even or divisible by 2
  // if it is even, add it to the sum
  // if the key is not a number, recursively call the function to go to the next key?
  // need a sum variable to return
  for (var key in obj){
    
  }
  return sum
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10