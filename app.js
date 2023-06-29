var life = 100;
var name = "var";
console.log("Hey Dev Ed2");
var checkout = true; // BOOLEAN
console.log(life);
var myvar;
console.log(myvar); // undefined
var box = null; // has value of nothing)) prints null in log
console.log(box);
const myConst = 100; // constant is unchangeable and unrediclarable;
console.log(myConst);
let life2 = 100;
life2 = life2 - 50;
console.log(life2);
//primitives: boolean, null, undefined, number, string, symbol
//Objects - everything in js, except 6 primitive types.
let nm = "bob"; // primitive, string literal
let nm2 = new String("bob"); // string object
nm.toUpperCase(); //possible because of autoboxing.
nm2.toUpperCase();
// Object:
let o = new Object(); //object constructor
let o2 = {
  prop1: 1,
  prop2: false,
  prop3: "string",
  prop4: function () {},
}; //object literal syntax - writing actual object value;
// a method is an object property that resolves in type function.
