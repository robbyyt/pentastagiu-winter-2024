# Functions

Functions are common across all programming languages and they are a way to encapsulate repeating logic.

```javascript
function sayHi(name) {
  console.log(`Hi, ${name}!`);
}
```

A function is composed of:

- the function keyword (we will look at an alternative syntax later)
- the name (optional)
- a list of parameters (can be empty)
- the function can either return things

**Some interesting facts/use-cases**

Functions can take a variable number of parameters.

```javascript
function printNumbers(num1, num2, ...restOfNums) {
  return console.log(num1, num2, ...restOfNums);
}
```

Functions can return functions.

```javascript
function greeter() {
  return function () {
    return "Hi";
  };
}
```

Functions are "first-class" objects in javascript, which means that they are similar to normal values.

```javascript
const sayHi = function () {
  console.log("Hi");
};
```

Functions can be defined using an alternative syntax, called arrow function.

```javascript
const sayHi = () => {
  console.log("Hi");
};
```

**WARNING:** There are some fundamental differences between arrow functions and regular ones which we will cover later in the course.
