let log = console.log;

/*
task1. 1. Write a JavaScript function that takes two numbers
as parameters and returns their sum.
*/
function sumOfTwo(a, b) {
  return a + b;
}
log(sumOfTwo(1, 3));

/* 
task2. Write a JavaScript function that checks if a variable is of type
'string' and returns true if it is, false otherwise.
*/
let stringVar = "myString";
let notStringVar = 1;

function isString(a) {
  return typeof a === "string";
}

log("stringVar: " + isString(stringVar));
log("notStringVar: " + isString(notStringVar));

//
/*
task3. Write a JavaScript function that checks if a given value is
a primitive data type (number, string, boolean, null, or undefined)
 and returns true if it is, false otherwise.
*/

let isPrimitive = (val) => {
  if (val === null) {
    return true;
  }

  if (typeof val == "object" || typeof val == "function") {
    return false;
  } else {
    return true;
  }
};

log("isPrimitive check:");
log(isPrimitive(null));
log(isPrimitive("1"));
log(isPrimitive(2));
log(isPrimitive(new String(1)));
log(isPrimitive(new Object()));

/*
task4. Explain the concept of hoisting in JavaScript and provide
an example to demonstrate the difference between hoisting with var
and hoisting with let (or const).
*/
log(hoistedVar);
log("hoistedVar (declared with var) is undefined before definition.");
log("notHoistedVar (declared with let) throws error before definition.");
log(
  "Uncaught ReferenceError: Cannot access 'notHoistedVar' before initialization"
);
//log(notHoistedVar);
var hoistedVar;
let notHoistedVar;

/*
5. Compare and explain the differences between var, let, and const
when declaring variables in JavaScript.
*/
log(
  "var is hoisted, and can be addressed before definition(as underfined) - bad practice"
);
log("let - can not be addressed before definition.");
log("const is like let, but cannot be changed or reassigned.");

/*
6. Write a JavaScript function that checks if a given value is an object
and returns true if it is, false otherwise.
*/
let isObject = (val) => {
  if (val === null) {
    return false;
  }

  if (typeof val == "object" || typeof val == "function") {
    return true;
  } else {
    return false;
  }
};
log(isObject(null));
log(isObject("1"));
log(isObject(2));
log(isObject(new String(1)));
log(isObject(new Object()));
