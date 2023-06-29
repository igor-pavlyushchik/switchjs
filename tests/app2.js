/**
 * Hoisting
 * var vs let (and const)
 */

let log = console.log;
f();
//fe(); error here
var v1;
log(v1);
// var is always hoisted to the toppest position and we can define below log
// and it ill anyway be hoisted and undefined printed.

let L1; //undefined is assigned at this line, not before
log(L1);

function f() {
  //function declaration;
  log("function f");
}

var fe = function () {
  //function expression;
  log("function fe");
};
var fe2 = function e() {
  //function expression with the name;
  x = "hello"; //global var!!!
};
fe();
// function declaration is hoisted, function expression is not hoisted;
