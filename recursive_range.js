// accepts a numbers
// adds all numbers from 0 to the number passed
// ex. recursiveRange(6) = 21
// recursiveRange(10) = 55

function recursiveRange(num){
    // if num equals 0 return 
    if (num === 0) return num
    // call recursiveRange add num plus num -1
    return num + recursiveRange(num - 1)
}