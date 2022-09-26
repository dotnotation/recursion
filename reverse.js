// accepts a string
// returns the string in reverse

function reverse(str){
    if (str === "") return ""
    return reverse(str.substr(1)) + str.charAt(0)
}