/* Function which takes a number and return an array of numbers from Fibonacci sequence using iteration */
let fibsArray = [];
function fibs(number) {
    let num1 = 0;
    let num2 = 1;
    let num3;
    for (let i = 1; i <= number; i++) {
        fibsArray.push(num1);
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return fibsArray;
}
console.log(fibs(8));


/* Function which takes a number and return an array of numbers from Fibonacci sequence using recursion */
let fiboRecArray = [];

function fibsRec(n) {
    if (n <= 1) {
        return n;
    }
    
    return (fibsRec(n - 1) + fibsRec(n - 2));    
}
            
for (let i = 0; i < 8; i++) {
    fiboRecArray.push(fibsRec(i));
}
console.log(fiboRecArray);