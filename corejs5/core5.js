let log = console.log;
log("Home Task 5: Core JS. Part 5");

log("Subtask 1");
/*
1. Explain the difference between synchronous and asynchronous JavaScript
code execution and provide an example for each.
*/
/*
Synchronous tasks executed in order as statements go. And the second one
is waiting for the first one to finish executing and only then is takes
its' turn.
Example:
*/
log("One");
log("Two");
/*
Asynchrounous tasks execution allows to execution next statements 
immediately and doesn't block the flow because of previous statements
not finished executing.
*/
log("One");
// commented next line to not pollute output of the next tasks.
//setTimeout(() => log("Two from subtask 1"), 1);
console.log("Three");
log("Subtask 2");
/*
2. Write JavaScript code that uses the setTimeout function to log a message 
after a specified delay, and then clear the timeout using clearTimeout.
*/
log("One");
const myTimeout = setTimeout(() => log("Timedout"), 1000);
clearTimeout(myTimeout);
log("My timeout cleared and 'Timedout' has not been printed.");

log("Subtask 3");
/*
3. Write JavaScript code that uses the setInterval function to repeatedly 
log a message at a specified interval, and then clear the interval 
using clearInterval.
*/
log("Example is in index.html");
log("You may stop the timer on the page.");
//const date = new Date();
//let handle = setInterval(() => log(date), 1000);
//clearInterval(handle);
log("Subtask 4");
/*
4. Write JavaScript code that demonstrates the basic syntax of ES6 Promises 
by creating a simple promise that resolves with a value and handles 
the fulfillment and rejection cases.
*/
const shouldResolve = true;

let promise = new Promise(function (resolve, reject) {
  if (shouldResolve) {
    resolve("We resolved it.");
  } else {
    reject("We rejected it.");
  }
});

log(promise);
log("Subtask 5");
/*
5. Write JavaScript code that demonstrates the usage of the `async` 
and `await` keywords to handle asynchronous operations in a 
synchronous-looking manner.
*/
/* commented below solution to not inerfeer with subtask 6.
async function fetchJoke() {
  let res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
  let json = await res.json();
  log(json.joke);
}

async function fetchApi() {
  await fetchJoke();
  log("Finished fetching joke");
}

fetchApi();
*/
log("Subtask 6");
/*
6. Create a custom Error class called ValidationError that extends 
the built-in Error class. Use this class to throw an error called 
ValidationError with a custom error message when input validation fails.
*/

const ValidationError = class extends Error {
  constructor(errorMessage) {
    super(errorMessage);
    this.name = "ValidationError";
    this.message = errorMessage;
  }
};

function validateThatInputIsNumber(input) {
  if (isNaN(input)) {
    throw new ValidationError(input + " is not a number");
  }
  return true;
}

log(validateThatInputIsNumber(123));
log(validateThatInputIsNumber("My String"));
