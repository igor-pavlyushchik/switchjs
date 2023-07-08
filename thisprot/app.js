let log = console.log;

// new F() - 'this' is the returned object
function F() {
  log(this);
}
//F();
// let fObj = new F();
// log(fObj);
log("F.call()");
F.call();
F.call(this);
log("F.call(null): ");
F.call(null);

let objEx = {
  a: "a1",
};
let objEx2 = {
  a: "a2",
};
// let Fex = function () {
//   log(this);
// };
// Fex.call(objEx);
let Fex = function (a, b) {
  log(a, b); //1,2
  log(this.a); //a1
};
Fex.call(objEx, 1, 2);
let f2 = Fex.bind(objEx2); // returns the copy of function Fex with objEx2 context
f2(4, 5);
// Implicit binding
let obj = {
  a: 1,
  f: function () {
    log(this);
  },
  g() {
    log(this);
  },
};
obj.f();
let f3 = obj.f;
f3(); //direct reference to function f. - Window

function addOne() {
  this.count++;
}
addOne.count = 0;
addOne();
addOne();
log(addOne.count); //0
log(window.count); //NaN (was not set to initial 0, tried to increm undefined)

function f4() {
  log(this.a);
}
let obj1 = {
  a: 1,
  f4: f4, //direct reference to f4();
};
let obj2 = {
  a: 2,
  obj1: obj1,
};
let obj3 = {
  a: 3,
  f4: obj1.f4, //direct reference to f4();
};
obj1.f4(); // 1 - implicit binding
obj2.obj1.f4(); //1 - implicit binding
obj3.f4(); //3 - implicit binding lost

//Arrow functions.
let f5 = () => {
  log(this);
};
f5();
f5.call(obj1);
log("function f6");
function f6() {
  return () => {
    console.log(this.a);
  };
}
let x = f6.call(obj1);
x(); // obj1.a = 1

// Prototype
let obj7 = {
  prop1: () => console.log("prop1"),
};
let obj8 = {
  prop2: () => console.log("prop2"),
};
obj7.prop1();
obj7.toString();
Object.setPrototypeOf(obj8, obj7);

obj8.prop2();
obj8.prop1();

for (let prop in obj8) {
  log(prop);
}
Object.getPrototypeOf(obj8).prop1();
log(Object.getOwnPropertyNames(obj8));
log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj7)));
//Object.create();
//Object.assign();

let myObj = {}; //new Object()
log(myObj.constructor); // function Object(){}
log(myObj.__proto__); //
log(myObj.__proto__ === myObj.constructor.prototype);

function Cat() {
  //constructor for kitty;
}
let kitty = new Cat();
log(kitty.__proto__ === Cat.prototype); //true
log(kitty.__proto__ === kitty.constructor.prototype); //true
log(kitty.__proto__);
log(Cat.prototype);
log(kitty.__proto__.__proto__ === Object.prototype); //true
log(Object.prototype.__proto__); //null
function Animal() {}
Object.setPrototypeOf(Cat.prototype, Animal.prototype);
log(kitty.__proto__);
log(kitty.__proto__.__proto__);
log(kitty.__proto__.__proto__.__proto__);
log(kitty.__proto__.__proto__.__proto__.__proto__);

class Vehicle {
  constructor(_wheels) {
    this.numWheels = _wheels;
  }
  get wheels() {
    return this.numWheels;
  }
  set wheels(_wheels) {
    this.numWheels = _wheels;
  }
  static accelerate() {
    log("go faster");
  }
  static decelerate() {
    log("go slower");
  }
  justAMethod() {
    //like a function
  }
}
let car = new Vehicle(4);
log(car.wheels);
car.wheels = 7;
log(car.wheels);
Vehicle.accelerate();

class Car extends Vehicle {
  constructor(_wheels, _make, _model, _year) {
    super(_wheels);
    this.make = _make;
    this.model = _model;
    this.year = _year;
  }
  info() {
    log(
      "The",
      this.make,
      this.model,
      "was made in ",
      this.year,
      " and has ",
      this.wheels,
      " wheels."
    );
  }
}
let ferrari = new Car(4, "Ferrari", "Testarossa", 1985);
ferrari.info();
Car.accelerate(); //go faster

let PersonC = class {
  constructor(nm, id) {
    this.name = nm;
    this.id = id;
  }
  getDetails() {
    return `${this.name} :: ${this.id}`;
  }
};
let bob = new PersonC("Bob", 123);
log(bob.getDetails());

let EmployeeC = class extends PersonC {
  // EmployeeC links to PersonC prototype
  constructor(nm, id, salary) {
    super(nm, id);
    this.salary = salary;
  }
  employeeInfo() {
    // the method exists on prototype of EmployeeC
    return `${this.name} :: ${this.id} :: ${this.salary}`;
  }
};
let noomi = new EmployeeC("Noomi", 456, 85000);
console.log(noomi.employeeInfo());
//The same in old js (with prototypes)//
let PersonP = function (nm, id) {
  this.name = nm;
  this.id = id;
};
PersonP.prototype.getDetails = function () {
  return `${this.name} :: ${this.id}`;
};
let fred = new PersonP("Fred", 321);
log(fred.getDetails());
log(PersonP.prototype);

let EmployeeP = function (nm, id, salary) {
  PersonP.call(this, nm, id);
  this.salary = salary;
};
Object.setPrototypeOf(EmployeeP, PersonP.prototype); //extends
EmployeeP.prototype.employeeInfo = function () {
  return `${this.name} :: ${this.id} :: ${this.salary}`;
};
