# JavaScript (and programming) fundamentals

This is some preliminary knowledge that will be needed to understand the course content.

# Variables

Variables are used to store different types of data.

```javascript
// Declaration
let message;

// Assignment
message = "Hello world";
```

# Conditional branching (if/else, switch, ternaries)

Statements such as `if` and `switch` are useful for running different code based on certain conditions.

```javascript
const age = 17;

if (age >= 18) {
  serveBeer();
} else {
  serveCola();
}
```

```javascript
const a = 4;

switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}
```

# Loops

Loops are used to execute code more than once.

```javascript
let i = 0;
while (i < 3) {
  console.log("ho");
}
```

```javascript
for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  console.log(i);
}
```

# Functions

Functions are used to encapsulate code that can be re-used.

```javascript
function showMessage() {
  alert("Hello everyone!");
}
```

## References

- https://javascript.info/
- https://www.w3schools.com/js/default.asp
