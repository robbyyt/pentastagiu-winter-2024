/**
 * console.log(a);
 *
 * var a = 2;
 *
 * is equivalent to
 */

var a;

console.log(a);

a = 2;

/**
 * functions (with the function keyword) are also hoisted
 */

abc();

function abc() {
  console.log("abc");
}

function foo() {
  var z = 3;

  return z;
}

// This will throw an error
// console.log(z);
