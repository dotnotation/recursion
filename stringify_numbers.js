// takes in an object
// find all values that are numbers
// convert those numbers into strings
// returning an object

function stringifyNumbers(obj){
    // iterate through each key value pair
    let result = {}

    for (var key in obj){
        if (typeof obj[key] === 'number'){
            result[key] = obj[key].toString()
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            result[key] = stringifyNumbers(obj[key])
        } else {
            result[key] = obj[key]
        }
    }

    return result
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

//Colt Steele's solution
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }