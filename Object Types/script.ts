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

// INDEX SIGNATURES-----------------------------
// Index signatures are a way of describing the “dictionary” pattern common in JavaScript:
//IF we don't know the property names in advance
interface weDoNotKnow {
  name: string;
}
const weDonotKnow: weDoNotKnow = {
  name: 'Bob',
  // age: 23,//error
};
//SOLUTION
interface StringArray {
  [index: number]: string; //index signature
  //   I can add any key value pair as long as the value is a string
}
// Or more complex:
interface StringArray2 {
  [index: number]: string | number;
}
const myArray: StringArray = {
  // or ARRAY OF STRING ['Bob', 'Fred']
  0: 'Bob',
  1: 'Fred',
};
const secondItem = myArray[1]; //Fred

// EXTENDING INTERFACES-----------------------------
// DRY code
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// INTERSECTION TYPES-----------------------------
// Intersection types are a way of combining multiple types into one.
// This allows you to add together existing types to get a single type that has all the features you need.
interface ColorfulShape {
  color: string;
}
interface CircleShape {
  radius: number;
}
type ColorfulCircle = ColorfulShape & CircleShape;
const cc: ColorfulCircle = {
  color: 'red',
  radius: 5,
};
