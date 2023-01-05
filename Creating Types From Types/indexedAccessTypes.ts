type Person3 = { age: number; name: string; alive: boolean };
type Age = Person['age']; //Age is number
type AliveOrName = Person3['alive' | 'name']; //AliveOrName is boolean | string
type PersonKeys = keyof Person3; //PersonKeys is "age" | "name" | "alive"

// NUMBER INDEX SIGNATURES
const persons = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
];
type Person4 = typeof persons[number]; //Person4 is { name: string; age: number; }
const someName = 'name'; //You can only use types when indexing, meaning you can’t use a const to make a variable reference:
// type Person5 = typeof persons[number]['name']; //Error
type Person5 = typeof persons[number]['name']; //Person5 is string
