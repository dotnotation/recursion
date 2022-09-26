// returns true if the string is a palindrome
// accepts a string

function isPalindrome(str){
    // true: str.length <= 1, str.length === 2 and str[0] === str[1], if palindrome
    if (str.length <= 1) return true
    if (str.length === 2 && str[0] === str[1]) return true
    return isPalindrome(str)
}