/**
 * Arrow vs regular context
 * Arrow functions have lexical context
 */

const person = {
  name: "Zoe",
  getName() {
    return this.name;
  },
  getName2: () => {
    return this.name;
  },
};

console.log("getName", person.getName());
console.log("getName2", person.getName2());

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.printAge = () => console.log(this.age);
}

const rob = new Person("Rob", 24);
rob.printAge();
