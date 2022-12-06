// takes in an object
// returns an array of all the values that are a string

function collectStrings(obj){

    let results = []

    for (var key in obj){
        if (typeof obj[key] === 'string'){
            results.push(obj[key])
        } else if (typeof obj[key] === 'object'){
            results = results.concat(collectStrings(obj[key]))
        }
    }
    
    return results
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

// collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}