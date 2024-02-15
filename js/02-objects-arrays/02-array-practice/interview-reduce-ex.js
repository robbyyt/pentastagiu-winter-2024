/**
 * Transform this array into an object.
 * the key value pairs would be like this: (1, Andrew), (2, John)
 * Why would we do this?
 * HINT:
 */
const persons = [
  { id: 1, name: "Andrew" },
  { id: 2, name: "John" },
];

const expectedResult = {
  1: "Andrew",
  2: "John",
};

const result = persons.reduce((acc, curr) => {
  const id = curr.id;
  const name = curr.name;

  acc[id] = name;

  return acc;
}, {});
