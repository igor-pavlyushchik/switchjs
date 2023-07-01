let log = console.log;

/*
1. Write a JavaScript function that takes an array of numbers as input
and returns the sum of all even numbers in the array.
*/

function arrayValuesSum(a) {
  let mySum = 0;
  for (let k of a) {
    if (k % 2 == 0) {
      mySum += k;
    }
  }
  return mySum;
}

a1 = [1, 2, 4, 6, 7];
log("Expected 12: " + arrayValuesSum(a1));

function arrayValuesSumReduce(a) {
  return a.reduce(
    (partialSum, value) => partialSum + (value % 2 == 0 ? value : 0),
    0
  );
}
log("Function with reduce, expected 12: " + arrayValuesSumReduce(a1));

/*
2. Write a JavaScript function that takes two input values and returns
the concatenation of the two values as a string.
*/

function concatTwo(a, b) {
  return "" + a + b;
}
function concatTwoTemplate(a, b) {
  return `${a}${b}`;
}

log("Expected 12 : " + concatTwo(1, 2));
log("Expected one1 : " + concatTwo("one", 1));

log("Template Expected 12 : " + concatTwoTemplate(1, 2));
log("Template Expected one1 : " + concatTwoTemplate("one", 1));

/*
3. Write a JavaScript function that checks if a given number is positive,
negative, or zero and returns the corresponding string: "Positive",
"Negative", or "Zero".
*/
function f(a) {
  if (a > 0) {
    return "Positive";
  } else if (a < 0) {
    return "Negative";
  }
  return "Zero";
}
log(f(-1));
log(f(1));
log(f(0));
/*
4. Write a JavaScript function that calculates the factorial
of a given number using a while loop.
*/

function factorialWhile(a) {
  let result = 1;
  while (a > 1) {
    result *= a--;
  }
  return result;
}
log("Expected 1: " + factorialWhile(1));
log("Expected 6: " + factorialWhile(3));
log("Expected 120: " + factorialWhile(5));

/*
5. Create an object called person with properties name and age.
Add a method called greet that returns a greeting string
using the name property.
*/

let person = {
  name: "John",
  age: 30,
  greet() {
    return "Hi " + this.name;
  },
};
log(person.greet());

/*
6. Create a constructor function called `Car` that takes parameters
for `make`, `model`, and `year`. Add a method called `getInfo` 
that returns a string containing the car's details.
*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getInfo = function f() {
    return this.make + " " + this.model + " " + this.year;
  };
}

let car = new Car("Toyta", "Corolla", 2023);
log(car.getInfo());
