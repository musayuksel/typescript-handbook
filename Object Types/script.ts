// Can be anonymous
function greet(person: { name: string; age: number }) {
  return 'Hello ' + person.name;
}

// Can be a named interface
interface Person {
  name: string;
  age: number;
}
function greet2(person: Person) {
  return 'Hello ' + person.name;
}

// Can be type aliased
type Person2 = {
  name: string;
  age: number;
};
function greet3(person: Person2) {
  return 'Hello ' + person.name;
}
