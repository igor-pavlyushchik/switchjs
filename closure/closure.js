let log = console.log;
log("hi");

(function () {
  log("foo4");
})();

//kung(); // kung does not exist in a global scope!
// Uncaught ReferenceError: kung is not defined

//iKnow(); should be called by function var name.

//we can add paranthesis and make function executable, they change function
//declaration to function expression.
//var iKnow = (function kung() {
//    log("foo2");
//})();
// we don't need function name here it'll be anonymous function.
/*
var iKnow = (function () {
  log("foo3");
})();
*/
//
//if we wrap the function expression in parenthesis - we don't need function name and we don't need variable to assign the function.
// THIS is self executing function or anonymous closure.
// it doesn't have a name and any its' variables may be accessed only from inside.
/*
(function () {
  log("foo4");
})();
*/

myDog(); //works but bad practice
function myDog() {
  var dogName = "Fido";
  log(dogName + " says woof");
}

var ray = (function () {
  var DEFAULTS = {
    say: "default hello",
    speed: "normal",
  };
  log("hello from function before return");
  return {
    speak: function () {
      var myArguments = arguments[0] || "";
      var statement = myArguments.say || DEFAULTS.say;
      log(statement);
      return this;
    },
    run: function () {
      var myArguments = arguments[0] || "";
      var running = myArguments.speed || DEFAULTS.speed;
      log("running..." + running);
      return this;
    },
  };
})();
