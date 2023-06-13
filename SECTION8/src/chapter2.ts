/**
 * key of 연산자
 */

interface Person {
  name: string;
  age: number;
}
// function getPropertyKey(person: Person, key: "name" | "age") {
//   return person[key];
// }

function getPropertyKeys(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "user",
  age: 18,
};

getPropertyKey(person, "name");

type Persons = typeof person1;

function getPropertyKey(person: Person, key: keyof Persons) {
  return person[key];
}

const person1 = {
  name: "user",
  age: 18,
};

function getPropertyKey2(person: Person, key: keyof typeof person2) {
  return person[key];
}

const person2 = {
  name: "user",
  age: 18,
};
