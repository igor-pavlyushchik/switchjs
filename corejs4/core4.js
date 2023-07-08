let log = console.log;

/*
1. Write a JavaScript function that demonstrates the concept of this 
by creating an object with a method that uses this to access 
its own property.
*/
let a = "a2";
let obj1 = {
  a: "a1",
  myMethod() {
    log(this.a);
  },
};
obj1.myMethod();
/*
2. Write a JavaScript function that demonstrates the concept 
of prototype by adding a new method to the prototype of an object 
and accessing it from an instance of that object.
*/
let Car = function () {};
let car = new Car();
function speed() {
  log("fast");
}
Car.prototype.speed = speed;
car.speed();
/*
3. Write a JavaScript function that demonstrates the usage of the call 
method to invoke a function with a specific "this" value 
and additional arguments.
*/
log("subtask: ", 3);
let context = { a: "a1" };
let f = function (b) {
  log(this.a);
  log(b);
};
f.call(context, "b1");
/*
4. Write a JavaScript function that demonstrates the usage of the apply 
method to invoke a function with a specific "this" value 
and an array of arguments.
*/
log("subtask: ", 4);
let context2 = { a: "a2" };
let f2 = function (arg1, arg2) {
  log("Expected a2, b2, b3: ", this.a, arg1, arg2);
};
f2.apply(context2, ["b2", "b3"]);

/*
5. Write a JavaScript function that demonstrates the usage of the 
`bind method to create a new function with a specific "this" value.
*/
let person = {
  firstName: "John",
  secondName: "Doe",
  hi: function (greeting) {
    log(greeting, this.firstName, this.secondName);
  },
};
let person2 = {
  firstName: "Cristiano",
  secondName: "Ronaldo",
};
let newHi = person.hi.bind(person2, "Hello");
newHi();

/*
6. Write a JavaScript constructor function that creates instances of a 
Book object with properties for title and author.
*/

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
let book = new Book("Moby Dick", "Melville");
log(book);
/*
7. Explain the concept of prototypes in JavaScript and how they are used 
to achieve inheritance and share properties and methods between objects.
*/

/*
Answer: Prototypes are the mechanism by which JavaScript objects inherit 
features from one another.

There exists a prototype chain in which each object has a prototype 
and if we add some property or a method to the upper link of the chain
every object down the stream has this property of a method.
*/
var speak = function (saywhat) {
  console.log(saywhat);
};

class Dog {
  constructor() {
    var name, breed;
  }
}

class Cat {
  constructor() {
    var name, breed;
  }
}

Object.prototype.speak = speak;
let dog1 = new Dog();
let cat1 = new Cat();
dog1.speak("woof");
cat1.speak("meow");

/*
8. Create a JavaScript class called Rectangle that represents a rectangle 
with properties for width and height. 
Include a static method calculateArea that calculates and returns the area 
of the rectangle.
*/

class Rectangle {
  constructor(width, height) {
    (this.width = width), (this.height = height);
  }
  static calculateArea(rectangleInstance) {
    return rectangleInstance.width * rectangleInstance.height;
  }
}

let rectangle = new Rectangle(2, 5);

log(Rectangle.calculateArea(rectangle));
