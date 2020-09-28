// Edu and Miyu

// Write a JavaScript program to get the first n Fibonacci numbers using recursion
// the fibonacci sequence involes adding the past two numbers in a list to
//create the next one. 

// https://www.mathsisfun.com/numbers/fibonacci-sequence.html#:~:text=The%20Fibonacci%20Sequence%20is%20the,21%2C%2034%2C%20...

const fibonacciRecursive = function(n) {
    if (n <= 2) {
        return [0, 1]
    } else {
        let s = fibonacciRecursive(n-1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s
    }
}



console.log(fibonacciRecursive(6));