let log = console.log;

/*
1. Write a JavaScript function that takes an array of numbers
 as input and returns a new array where each element is multiplied by 2.
*/

function multBy2(a) {
  return a.map((a) => a * 2);
}
let arrayOfNumbers1 = [1, 2, 3];
log(multBy2(arrayOfNumbers1));

/*
2. Write a JavaScript function that takes an array as input 
and returns the length of the array.
*/

function lengthOfArray(a) {
  return a.length;
}
log("Length of the array: " + lengthOfArray(arrayOfNumbers1));

/*
3. Write a JavaScript function that takes an array of strings as input, 
sorts the strings in ascending order, and returns the sorted array.
*/

function sortStrings(s) {
  return s.sort();
}

let unsortedStringArray = ["q", "forest", "all", "get"];
log(sortStrings(unsortedStringArray));

/*
4. Write a JavaScript function that takes two arrays as input, 
combines them into a single array, and returns the result.
*/

function combineTwoArrays(a, b) {
  return a.concat(b);
}
let stringArr1 = ["q", "forest", "all", "get"];
let stringArr2 = ["someVal", "what", "js", "java"];
log(combineTwoArrays(stringArr1, stringArr2));

/*
5. Write a JavaScript function using an arrow function expression 
that takes two numbers as input and returns their sum.
*/
let add = (a, b) => a + b;
log("Arrow function outcome: " + add(1, 2));

/*
6. Write a JavaScript function that takes multiple arguments 
using the rest operator and returns the sum of all the arguments. 
If no arguments are provided, the function should return 0.
*/

function sumWithRest(...arg) {
  //   if (arg.length === 0) {
  //     return 0;
  //   }
  return arg.reduce((sum, el) => sum + el, 0);
}

log("sumWithRest() should be 0: " + sumWithRest());
log("sumWithRest(1, 2 should be 3: " + sumWithRest(1, 2));
log("sumWithRest(1, 2, 2) should be 5: " + sumWithRest(1, 2, 2));

/*
7. Write a JavaScript function that demonstrates the concept of 
variable scope by declaring a variable inside a block 
and trying to access it outside the block. 
Explain the output or error that occurs.
*/

function f() {
  function f2() {
    let someVar2 = 1;
  }
  log(someVar2);
}
/*
f();
Uncaught ReferenceError: someVar2 is not defined
We cannot access variables defined inside of inner scope.
*/

/*
8. Write a JavaScript function that demonstrates closure by creating 
an inner function that has access to the outer function's variables. 
Invoke the inner function and observe the output.
*/

function outerFunction() {
  let outerVar = "Outer var value, called from inner fucntion.";
  function innerFunction() {
    log(outerVar);
  }
  innerFunction();
}
outerFunction();

/*
9. Write a JavaScript function that uses recursion to calculate 
the factorial of a given number.
*/

function factorialRecursive(n) {
  if (n < 0) {
    throw new Error("Input should be a positive integer or 0.");
  }
  if (n === 0) {
    n = 1;
  }
  return n > 1 ? n * factorialRecursive(--n) : 1;
}

log("Factorial recursive, expected 24: " + factorialRecursive(4));
log("Factorial recursive, expected 1: " + factorialRecursive(1));
log("Factorial recursive, expected 2: " + factorialRecursive(2));
log("Factorial recursive, expected 1: " + factorialRecursive(0));
