// accepts a number
// returns that number in the Fibonacci sequence
// The Fibonacci sequence starts at 1 
// every number thereafter is equal to the sum of the previous two numbers
// ex. fib(4) = 3
// fib(10) = 55

function fib(num, temp){
    if (temp === num) return temp
    if (temp === 0 || undefined) temp = 1
    return fib(num, temp * temp)
}