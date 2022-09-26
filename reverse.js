// accepts a string
// returns the string in reverse

function reverse(str){
    if (str === "") return ""
    return reverse(str.substr(1)) + str.charAt(0)
    // substr returns a portion of the string starting at the specified index and extending for a given number of characters afterwards
    // ex. reverse("awesome") str.substr(1) = "wesome" 
    // charAt returns a new string consisting of the single letter located at the specified index
    // ex. reverse("awesome") str.charAt(0) = "a"
    // putting it together
        // reverse("awesome")
        // str.substr(1) = "wesome"
        // str.charAt(0) = "a"
        // "wesomea"
}

// other solution
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}