# Math and special numeric values

A good think to know is that math is safe in javascript in the sense that it will never result in a fatal error, but that does not mean that weird stuff cannot happen.

## What will be the output of the following code snippets?

```javascript
console.log(9 / 0);
```

```javascript
console.log(-9 / 0);
```

```javascript
console.log("1" * 10);
console.log("yeet" * 10);
```

```javascript
console.log(0.1 + 0.2);
console.log((0.1).toFixed(20));
```

## Note for the presenter:

Showcase how using powers of two for division works: `(1/4).toFixed(30)`.

## Read more:

- https://stackoverflow.com/questions/7223359/are-0-and-0-the-same
- https://javascript.info/number
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
