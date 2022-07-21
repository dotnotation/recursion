function countDown(num){
    // on the first pass, the first if statement is skipped because num = 5
    if(num <= 0){
        console.log("All done!")
        // if we didn't return, the code below would run when we didn't want it to
        // thus we need a return to end the function
        return
    }
    // we console log 5
    console.log(num)
    // then subtract 1 from 5 and now num = 4
    num--
    // we then call the function from within our function and pass in the new num which is 4 and run through everything again
    countDown(num)
}

countDown(5)
// this will print out 5, 4, 3, 2, 1, All done!

// without recursion
function countDown(num){
    for (var i = num; i > 0; i--){
        console.log(i)
    }
    console.log("All done!")
}