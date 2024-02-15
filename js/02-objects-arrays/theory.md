# Objects and arrays

## Objects

```javascript
const person = { name: "John Doe", age: 20, 'some-property':  };
```

Objects are non-primitive values and are often used to represent complex data which doesn't fall into any of the primitive data types.

Objects have multiple properties which are represented using key-value pairs. In the example above, we have a person that has a `name` and an `age`. The `name` and `age` literals are the keys while `John Doe` and 20 are the.

### Working with objects

- Accessing properties can be done in two ways:
  - Dot notation: `person.age`
  - Square brackets: `person["some-property"]`
    - square brackets are useful for accessing properties with keys that are multi-word or non-primitive (but for now let's only think about strings as keys)
- adding properties: `person.height = 180`
- deleting properties: `delete person.age`
- modifying properties: `person.age = 21`
- checking if a property is in an object `"age" in person`
- iterating over keys `for (const key in person)`

The object we described are "basic". There are some special types of objects that JS offers:

- Array
- Error
- Date
- Map
- Set

These "special" objects have more targeted use cases, but they are objects!

## Arrays

Arrays are ordered collections of elements.

```javascript
const arr = new Array();
const arr = [];
const fruits = ["Apple", "Orange", "Plum", 3];
```

### Useful array operations

- Push
  - appends to the end of the array
  - `fruits.push();`
  - can also be used to add multiple elements
- Pop
  - removes an element from the end
  - `fruits.pop()`
- Shift
  - extracts the first element of the array
  - `fruits.shift()`
- Unshift
  - adds an element to the beginning of the array
  - works for adding multiple elements
