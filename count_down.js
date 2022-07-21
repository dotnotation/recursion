function countDown(num){
    if(num <= 0){
        console.log("All done!")
        return
    }
    console.log(num)
    num--
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