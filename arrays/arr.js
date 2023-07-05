let log = console.log;

const alphabet = ["a", "b", "c", "d", "e"];
log(alphabet.length);
//array.forEach(function(currentValue, index, array), thisArg);
alphabet.forEach((e) => log(e));

////////
const scores = [50, 60, 70, 80, 90, 100];
const logScore = (score) => console.log("Score over 65: ", score);
scores.forEach((element) => {
  if (element > 65) {
    logScore(element);
  }
});
// Compare function:
// array.sort(function(a,b){return a-b})
// or array.sort((a,b) => a - b)
const pets = ["dog", "cat", "rabbit", "hamster"];
const grades = [88, 94, 72, 99, 53, 77];
log(pets.sort());
log(pets);
// array by default sorted as strings!!!
grades.sort((a, b) => b - a); // sorted highest to lowest
log(grades);
// Reverse
const condiments = ["ketchup", "mustard", "relish", "mayo"];
log(condiments.reverse());
//to keep original array, we use spread operator (to quickly create a copy of an array);
const employees = ["Adam", "Carter", "Davis"];
const reversed = [...employees];
log(reversed);
log("Reversed: ", reversed.reverse());
// find() and findIndex()
// Callback Function
// function (element, index, array);
const underEighty = grades.find((element) => element < 80);
log(underEighty);
const overEighty = grades.findIndex((element) => element > 80);
log(overEighty);
const students = [
  { name: "John", grade: 75 },
  { name: "Jane", grade: 93 },
  { name: "Samantha", grade: 90 },
  { name: "Michael", grade: 94 },
];
//1. sort students by grades desc
//2. after sort reverse the array
//3. find a student in the array who has a grade over 90.

students.sort((s1, s2) => s2.grade - s1.grade);
log("students by grades desc: ", students);
students.reverse();
log("after sort reverse the array: ", students);
const overNinety = students.find((s) => s.grade > 90);
log("find a student in the array who has a grade over 90: ", overNinety);
//array.includes(value); boolean
const careers = ["teacher", "doctor", "engineer"];
log(careers.includes("doctor"));
// some() and every()
const states = [
  "Califormia",
  "New York",
  "New Jersey",
  "Alaska",
  "New Mexico",
  "Montana",
];
const someStates = states.some((s) => s.startsWith("New"));
log(someStates);
const everyState = states.every((s) => s.startsWith("New"));
log(everyState);
////////
const bowlingScores = [154, 204, 300, 184, 286];
// does arr includes 300
// are some scores under 150
// is every score an even number
log(bowlingScores.includes(300));
log(bowlingScores.some((s) => s < 150));
log(bowlingScores.every((s) => s % 2 === 0));
// push() and pop()
const drinks = ["coffee", "tea", "soda", "water"];
log(drinks.push("wine"));
log(drinks);
const seasons = ["spring", "summer", "fall", "winter"];
log(seasons.pop());
log(seasons);
///////// push(), pop(), unshift(), shift()
const foods = [
  { food: "raspberries", type: "fruit" },
  { food: "orange", type: "fruit" },
  { food: "brocolli", type: "vegetable" },
  { food: "quinoa", type: "grain" },
];
const blackBeans = { food: "black beans", type: "legume" };
const chiaSeeds = { food: "chia seeds", type: "seed" };

//remove last in the foods
log(foods.pop());
//remove first in the foods
log(foods.shift());
//add blackBeans to the beginning
log(foods.unshift(blackBeans));
//add chiaSeed to the end
log(foods.push(chiaSeeds));
log(foods);
//
const friends = [
  { firstname: "Jane", lastname: "Doe" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Alex", lastname: "Trebek" },
];
const fullname = friends.map((friend) => {
  return friend.firstname + " " + friend.lastname;
});
log(fullname);
const fullname2 = friends.map((f) => `${f.firstname} ${f.lastname}`);
log(fullname2);
const fullname3 = friends.map((f) => f.firstname + " " + f.lastname);
log(fullname3);
// reduce()
const bills = [1200, 29.99, 65.93, 17.32, 44.76];
const totalBills = bills.reduce((acc, el) => acc + el);
log(totalBills);
// flatmap()
const wordJumble = ["shampoo", "conditioner", "soap"];
/*
You want to create a word jumble which requires you to split the
following array of words into individual letters. You want a new
array, that is flattened to a single level.
use string method .split()
*/
const splitWords = wordJumble.flatMap((word) => word.split(""));
log(splitWords);
// Map, Filter, Reduce and FlatMap
const movies = [
  {
    title: "Avatar",
    year: "2009",
    rating: "PG-13",
  },
  {
    title: "I Am Legend",
    year: "2007",
    rating: "PG-13",
  },
  {
    title: "300",
    year: "2006",
    rating: "R",
  },
  {
    title: "The Avengers",
    year: "2012",
    rating: "PG-13",
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    rating: "R",
  },
];
// new arr with just titles
const titles = movies.map((m) => m.title);
log("new arr with just title: ", titles);
// new arr with PG-13 movies
const pg13movies = movies.filter((m) => m.rating === "PG-13");
log("new arr with PG-13 movies: ", pg13movies);
// how many movies has rating 'R'
const countOfRMovies = movies.filter((m) => m.rating === "R").length;
const countOfRMovies2 = movies.reduce((acc, movie) => {
  if (movie.rating === "R") {
    acc++;
  }
  return acc;
}, 0);
log("how many movies has rating 'R': ", countOfRMovies);
log("how many movies has rating 'R' with reduce: ", countOfRMovies2);
