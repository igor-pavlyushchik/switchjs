"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
let log = console.log;
/*
1. Implement a class hierarchy using inheritance and demonstrate
method overriding and calling super methods.
*/
class Boy {
  name;
  about() {
    console.log(this.name + " is an intelligent boy!");
  }
}
class Student extends Boy {
  rollnumber;
  marks;
  constructor(rollnumber, marks, name1) {
    super();
    this.rollnumber = rollnumber;
    this.name = name1;
    this.marks = marks;
  }
  about() {
    super.about();
    console.log(this.name + " scores well!");
  }
}
let student = new Student(2, 95, "Bob");
student.about();
class Box {
  id;
  name;
  description;
}
/*
3. Implement a generic class for a stack data structure that supports
operations like push, pop, and peek. Demonstrate type safety and usage
of the stack class by implementing Generics.
*/
log("subtask 3.");
class Stack {
  capacity;
  storage = [];
  constructor(capacity = Infinity) {
    this.capacity = capacity;
  }
  push(item) {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity");
    }
    this.storage.push(item);
  }
  pop() {
    return this.storage.pop();
  }
  peek() {
    return this.storage[this.size() - 1];
  }
  size() {
    return this.storage.length;
  }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
log("expected 2: " + stack.size());
log("expected 2: " + stack.peek());
log("expected 2: " + stack.pop());
log("expected 1: " + stack.size());
/*
4. Use decorators to implement logging functionality for a class,
where all method invocations are logged with their arguments
and return values.
*/
log("subtask 4.");
function logs() {
  return function (target, propertyKey, descriptor) {
    const targetMethod = descriptor.value;
    descriptor.value = function (...args) {
      console.log(`Calling ${propertyKey}`);
      console.log(`Input params: ${args}`);
      const result = targetMethod.apply(this, args);
      console.log(`Function returns: ${result}`);
      return targetMethod.apply(this, args);
    };
    return descriptor;
  };
}
class Counter {
  counter;
  constructor(counter = 0) {
    this.counter = counter;
  }
  currentCount(newValue) {
    return this.counter + newValue;
  }
}
__decorate(
  [
    logs(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number),
  ],
  Counter.prototype,
  "currentCount",
  null
);
const c = new Counter();
log(c.currentCount(1));
log(c.currentCount(3));
/*
5. Create a TypeScript module that exports multiple functions and classes.
Import the module in another file and demonstrate usage of the exported
entities.
*/
log("subtask 5.");
const ZipCodeValidator_1 = require("./ZipCodeValidator");
const ZipCodeValidator_2 = require("./ZipCodeValidator");
let myValidator1 = new ZipCodeValidator_1.ZipCodeValidator1();
let myValidator2 = new ZipCodeValidator_2.ZipCodeValidator2();
log(myValidator1.isAcceptable("90210"));
log(myValidator2.isAcceptable("90210"));
/*
6. Use the keyof keyword to create a function that accepts an object
and a key, and returns the value corresponding to the key from the object.
*/
log("subtask 6.");
function printPersonProperty(person, property) {
  log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Bob",
  age: 33,
};
printPersonProperty(person, "name");
printPersonProperty(person, "age");
/*
7. Implement an async/await function that fetches data from an API
and demonstrates error handling and handling of async operations.
*/
log("subtask 7.");
const fetchEmployees = async () => {
  const api = "http://dummy.restapiexample.com/api/v1/employees";
  try {
    const response = await fetch(api);
    const { data } = await response.json();
    return data;
  } catch (error) {
    if (error) {
      return error.message;
    }
  }
};
log(fetchEmployees());
/*
8. Create a TypeScript type declaration file for an external library
that lacks TypeScript support. Declare the necessary types and interfaces
to enable type checking and autocompletion for the library.
*/
log("subtask 8.");
const formattedDate = formatDate(new Date());
log(formattedDate);
