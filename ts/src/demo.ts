let log = console.log;

/*
1. Implement a class hierarchy using inheritance and demonstrate 
method overriding and calling super methods.
*/

class Boy {
  name: string;
  about(): void {
    console.log(this.name + " is an intelligent boy!");
  }
}

class Student extends Boy {
  rollnumber: number;
  marks: number;
  constructor(rollnumber: number, marks: number, name1: string) {
    super();
    this.rollnumber = rollnumber;
    this.name = name1;
    this.marks = marks;
  }
  about(): void {
    super.about();
    console.log(this.name + " scores well!");
  }
}

let student = new Student(2, 95, "Bob");
student.about();

/*
2. Create a TypeScript interface representing a database entity with 
properties such as ID, name, and description. 
Implement the interface in a class.
*/

interface Item {
  id: number;
  name: string;
  description: string;
}

class Box implements Item {
  id: number;
  name: string;
  description: string;
}

/*
3. Implement a generic class for a stack data structure that supports 
operations like push, pop, and peek. Demonstrate type safety and usage 
of the stack class by implementing Generics.
*/
log("subtask 3.");
class Stack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}

let stack = new Stack<number>();
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
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const targetMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
  constructor(private counter = 0) {}

  @logs()
  public currentCount(newValue: number): number {
    return this.counter + newValue;
  }
}

const c = new Counter();
log(c.currentCount(1));
log(c.currentCount(3));
/*
5. Create a TypeScript module that exports multiple functions and classes. 
Import the module in another file and demonstrate usage of the exported 
entities.
*/
log("subtask 5.");
import { ZipCodeValidator1 } from "./ZipCodeValidator";
import { ZipCodeValidator2 } from "./ZipCodeValidator";
let myValidator1 = new ZipCodeValidator1();
let myValidator2 = new ZipCodeValidator2();
log(myValidator1.isAcceptable("90210"));
log(myValidator2.isAcceptable("90210"));
/*
6. Use the keyof keyword to create a function that accepts an object 
and a key, and returns the value corresponding to the key from the object.
*/
log("subtask 6.");
interface Person {
  name: string;
  age: number;
}

function printPersonProperty(person: Person, property: keyof Person) {
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

interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
const fetchEmployees = async (): Promise<Array<Employee> | string> => {
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
