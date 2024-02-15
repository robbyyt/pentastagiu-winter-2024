function createAdder(num) {
  const num3 = 4;
  return function (num2) {
    return num + num2 + num3;
  };
}

const addtwo = createAdder(2);

console.log(addtwo(3));

function createCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
