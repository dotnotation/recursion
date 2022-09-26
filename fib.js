// accepts a number
// returns that number in the Fibonacci sequence
// The Fibonacci sequence starts at 1 
// every number thereafter is equal to the sum of the previous two numbers
// ex. fib(4) = 3
// fib(10) = 55

function fib(num){
    if (num <= 2) return 1
    return fib(num - 1) + fib(num - 2)
}