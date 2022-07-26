// Helper Method

function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if (helperInput.length === 0) {
            return
        }
        // base case

        if (helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        // check if the first input is odd
        // push the result to the outer function

        helper(helperInput.slice(1))
        // calling the recursive function on everything except for that first element
        // this creates a subarray
        // eventually the array will be empty which will trigger the base case
    }

    helper(arr)

    return result
}

// Pure Recursion 

function collectOddValues(arr){
    let newArr = []
    // this will technically be reset on each recursive call

    if (arr.length === 0){
        return newArr
    }

    if (arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    // say our array was [1, 2, 3, 4, 5]
    // basically this is the current array value .concat and then calling the collectOddValues recursively on the rest of the array
    // [1].concat(collectOddValues([2, 3, 4, 5]))
    // we are slicing off the first element of the array which is 1
    // then we are calling our function on the rest of the array [2, 3, 4, 5]
    // then the array goes back through the function
    // the let newArr = [] will be empty on this next call
    // then we finally get back to line 43
    // [].concat(collectOddValues([3, 4, 5]))
    // the newArr will be empty this time because 2 is an even number so it isn't being pushed into newArr
    // the next call will be [3].concat(collectOddValues([4, 5]))
    // once you get to 5 and have an empty arr, then you will hit line 35
    // once you return an empty array, then the top of the call stack has been hit
    // [5].concat(collectOddValues([5])) will return 5, the even values will return nothing
    // after the call stack is complete, you will have an array of the odd numbers
    return newArr
}