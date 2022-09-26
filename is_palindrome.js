// returns true if the string is a palindrome
// accepts a string

function isPalindrome(str){
    // true: str.length <= 1, str.length === 2 and str[0] === str[1], if palindrome
    // compare the first and last characters
    // then slice off those characters
    // repeat until one of the other ifs is met
    if (str.length <= 1) return true
    if (str.length === 2 && str[0] === str[1]) return true
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false
}