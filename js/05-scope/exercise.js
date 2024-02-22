/**
 * let, const, var
 * const - forbids reassignment
 * var - does not have block scope
 */
let i = 0;

while (i < 3) {
  var a = 4;
  i++;
}

console.log(a);
