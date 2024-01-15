# Data types in JavaScript

# Primitive data types

Data types in JavaScript dictate how information is handled. Understanding these types ensures your code runs smoothly without errors, enabling accurate operations and preventing mistakes.

## 1. Number

The number type is used to represent both integer (`3`) and floating point (`3.14`) numeric values.

```javascript
const a = 4;
const b = 1.5;

console.log(a * b);
```

There are some special numeric values in javascript which we'll talk about during our exercises: `NaN`, `Infinity`, `-Infinity` and `-0`.

## 2. String

JavaScript's string type holds sequences of characters, representing text. Unlike some languages that have a separate character type, JavaScript lets you model a single character as a string with just one character. This simplifies things by having a uniform approach to handling individual characters or longer text.

Strings must be surrounded by quotes. Both `'` and `"` can be used.

```javascript
let str = "Hello";
let phrase = `can embed another ${str}`;
```

## 3. Boolean

The boolean type only has two possible values: `true` or `false`. Usually used to store the result of certain "checks". We looked at it briefly when we covered language basics such as loops.

```javascript
let i = 0;
while (i < 3) {
  // i < 3 will output true when i is less than 3, and false otherwise
  console.log("ho");
}
```

In JavaScript, there is also the concept of `truthy` and `falsy` values which we'll cover later in the course.

## 4. Undefined

Undefined is a special value in JavaScript that makes up its own type. It is meant to denote that a value has not been assigned to a variable.

```javascript
let a;
console.log(typeof a); // outputs "undefined"
```

## 5. Null

Null is also a special value that makes up its own type. It is similar to undefined in the sense that it denotes an "empty" value, but the main difference is that a `null` value is usually set intentionally as opposed to an `undefined` value which can be empty for a multitude of reasons. (however this is not always the case)

```javascript
let a = null;
console.log(typeof a); // outputs "object" (an old bug which probably won't ever be fixed 😂)
```

## 6. BigInt

BigInt is a useful type for working with large integers (in cryptography, for example).

To create a BigInt value, one can call the `BigInt` function or just append an `n` at the end of an integer literal `24n`.

## 7. Symbol

Useful for creating unique primitive values.

# References

- https://javascript.info/types
- https://stackoverflow.com/questions/7223359/are-0-and-0-the-same

## Objects (complex types)

There are multiple types of objects in javascript. Even functions are theoretically just objects that are callable.

Some types of objects we are going to be looking at:

- dictionaries: `{a: 2, b: 3}`
- arrays: `[1,2,3]`
- maps
- sets
