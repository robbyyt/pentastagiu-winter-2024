# Type coercion

## Theory

Type coercion (or conversion) refers to the process of converting a value from one type to another one.

Coercion can be implicit or explicit. We'll start with explicit coercion as it is easier

## Explicit coercion

Explicitly converting a value to another type.

```javascript
console.log(Boolean("hi"));
console.log(String(123));
```

## Implicit coercion

Javascript also does implicit type coercion to prevent errors in some cases, most of which are centered around using operators without first checking the types of the given operands.

Perhaps the most popular operator is the equality operator, which has two variants: `==` and `===`.

There is only one difference between them, and that is...

Let's answer together by looking at the first snippet...

**INSERT ANSWER HERE**

There are a few important rules to keep in mind when it comes to implicit coercion, and we'll look at them here: https://medium.com/@ashbygreg/understanding-javascript-coercion-in-5-easy-steps-347f9f1a4e36

## Exercise

```javascript
console.log("1" == 1);
console.log("1" === 1);
```

```javascript
console.log([] == false);
```

## References

- https://wtfjs.com/
- https://kbpsystem777.github.io/You-Dont-Know-JS/
- https://medium.com/@ashbygreg/understanding-javascript-coercion-in-5-easy-steps-347f9f1a4e36
- https://medium.com/front-end-weekly/implicit-coercion-in-javascript-5077ad5510d#:~:text=Implicit%20Coercion%20is%20much%20more,is%20famous%20for%20this%20behavior.
