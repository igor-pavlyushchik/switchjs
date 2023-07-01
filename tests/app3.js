//let log = console.log;
log(1);
const names = ["john", "jake", "jane", "peter"];

for (nm of names) {
  log("Hello there " + nm);
}

let user = {
  name: "John",
  age: 30,
};

for (prop in user) {
  log(prop);
  log(user[prop]);
}

const user2 = {
  name: "Edwin",
  age: 24,
  married: false,
  purchases: ["phone", "car", "laptop"],
  sayName: function () {
    console.log(this);
  },
};

user2.sayName();
