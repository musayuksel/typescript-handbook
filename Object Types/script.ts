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

// PROPERTY MODIFIERS-----------------------------
// 1-OPTIONAL PROPERTIES
interface PaintOptions {
  shape: 'circle' | 'square';
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...do something...
  //the best practice is handle the undefined case
  const newP = opts.xPos === undefined ? 0 : opts.xPos;
}
//OR destructuring and default value
function paintShapeBetter({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  // ...do something...
}
paintShape({ shape: 'circle' }); // OK
paintShape({ shape: 'square', xPos: 100 }); // OK
paintShape({ shape: 'square', xPos: 100, yPos: 100 }); // OK

// 2-READONLY PROPERTIES
// While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking.
interface SomeType {
  readonly prop: string;
  readonly arrayProp: string[];
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
  // But we can't re-assign it.
  //   obj.prop = 'hello';//error

  // We can mutate the array though.
  obj.arrayProp.push('hello');
  obj.arrayProp[2] = 'hello'; //OK
  // obj.arrayProp = ['hello'];//error
}
