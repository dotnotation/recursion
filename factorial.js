// 4! 
// which equals 4 * 3 * 2 * 1

// iteratively 
function factorial(num){
    let total = 1
    for (let i = num; i > 1; i--){
        total *= i
    }
    return total
}

// recursively 
function factorial(num){
    if (num === 1) return 1
    return num * factorial(num - 1)
    // we can't just have line 16 as we need the base case
}