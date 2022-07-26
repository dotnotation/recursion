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