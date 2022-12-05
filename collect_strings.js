// takes in an object
// returns an array of all the values that are a string

function collectStrings(obj){

    let results = []

    for (var key in obj){
        if (typeof obj[key] === 'string'){
            results.push(obj[key])
        }
    }

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