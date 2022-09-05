// takes in a base and an exponent
// return the power of the base to the exponent
// mimic the functionality of Math.pow()
// no negatives
// ex. power(2, 0) = 1
// power(2, 2) = 4
// power(2, 4) = 16
// recursion so we want to call our function within the function

function power(base, exp){
    if(exp === 0) return 1
    return base * power(base, exp-1)
    // so we want to take the base and times it by the base number and repeat it exp amount of times
    // so the base will be times by itself for the amount of exp there is 
}