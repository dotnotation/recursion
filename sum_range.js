function sumRange(num){
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

// base case: 1
// remember that the base case is the bottom of the well, the stopping point so the function doesn't run forever
// recursive call: num + sumRange(num - 1)


// sumRange(3)
//  return 3 + sumRange(2)
//      return 2 + sumRange(1)
//          return 1
// now that all the returns have been figured, you go back to the call stack to line 13
// line 13 would then = 3
// which would then let us run line 12 which would = 6
// our return for sumRange(3) = 6
