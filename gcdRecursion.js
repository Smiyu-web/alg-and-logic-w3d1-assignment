// Edu and Miyu

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers 
//using recursion. 

const gcdRecursive = function(a, b) {
    if (b === 0) {
        return a;
    }

    return gcdRecursive(b, a % b);
}          

console.log(gcdRecursive(36, 12));
