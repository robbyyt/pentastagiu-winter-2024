/**
 * var - adds the property to the window object
 * const/let - do not
 */

var a = 2;
const b = 3;

/**
 * 1. global this = window
 */
console.log("global this:", this);

/**
 * 2. Implicitly binding "this"
 */
const person = {
  name: "Rob",
  age: 24,
  getAge() {
    return this.age;
  },
};

console.log("person.getAge()", person.getAge());

const getAge2 = person.getAge;

var age = 35;
console.log("getAge2()", getAge2());

/**
 * 3. Explicitly binding "this"
 */

const boundGetAge = getAge2.bind(person);

console.log("boundGetAge()", boundGetAge());
console.log("getAge2.call(person)", getAge2.call(person));

const person2 = { name: "Daniel", age: 47 };
console.log("boundGetAge.call(person2)", boundGetAge.call(person2));

/**
 * 4. new binding
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const robert = new Person("Robert", 24);
console.log("robert", robert);
