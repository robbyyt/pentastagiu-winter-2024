let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Daniel: "!!!!",
};

/**
 * 1. iterate through object keys
 * 2. for each, verify it is a number
 * 3. modify it in place
 */
function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(salaries);

console.log(salaries);
