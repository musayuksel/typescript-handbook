function complexFunction(callback: (message: string) => void) {
  //it will get a function as a parameter that takes a string and returns void
  // ...
  callback('Hello World');
}
function printString(message: string) {
  console.log(message);
}
complexFunction(printString);

// CALL SIGNATURES-----------------------------
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}
// I can call it like this:
const myFn = (someArg: number) => {
  return someArg > 5;
};
myFn.description = 'checks if arg is greater than 5';

doSomething(myFn);

// GENERIC FUNCTIONS-----------------------------
function firstElement(arr: any[]) {
  //Returns any type
  return arr[0];
}

function firstElementGeneric<Type>(arr: Type[]): Type | undefined {
  //Returns the type of the array
  //Note that we didn’t have to specify Type in this sample. The type was inferred - chosen automatically - by TypeScript.
  return arr[0];
}
const stringType = firstElementGeneric(['a', 'b', 'c']); // returns string
const numType = firstElementGeneric([1, 2, 3]); // returns number
const undefinedType = firstElementGeneric([]); // returns undefined
const objType = firstElementGeneric([{ a: 1 }, { b: 2 }]); // returns {a: number}

// We can use multiple type parameters as well.
function myMapFunction<Input, Output>(
  arr: Input[],
  callback: (arg: Input) => Output
): Output[] {
  return arr.map(callback);
}
const stringToNumber = myMapFunction(['1', '2', '3'], (str) =>
  parseInt(str, 10)
); // returns number[]

// CONSTRAINTS-----------------------------
// We can use constraints to ensure that the type parameter is a subtype of another type.
function longest<Type extends { length: number }>(a: Type, b: Type) {
  //we assume that the type has a length property
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// SPECIFYING TYPE ARGUMENTS-----------------------------
// We can specify the type arguments explicitly.
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
// const arr = combine([1, 2, 3], ["hello"]);//error because the types are not the same
const arr = combine<number | string>([1, 2, 3], ['hello']); //works because we specify the type

//GUIDELINES FOR GENERIC FUNCTIONS-----------------------------
// When possible, use the type parameter itself rather than constraining it
function firstElement1<Type>(arr: Type[]) {
  return arr[0]; //Type is inferred = GOOD
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0]; //Type is constrained = BAD
}

// Always use as few type parameters as possible
// If a type parameter only appears in one location, strongly reconsider if you actually need it
function greet<Str extends string>(s: Str) {
  //BAD - redundant type parameter
  console.log('Hello, ' + s);
}

// OPTIONAL PARAMETERS-----------------------------
function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
f(undefined); // OK

// In JavaScript, if you call a function with more arguments than there are parameters,
// the extra arguments are simply ignored.
// TypeScript behaves the same way.
// Functions with fewer parameters (of the same types) can always take the place of functions with more parameters.
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  //index is optional. DON'T DO THIS
  //...
}

// FUNCTION OVERLOADS-----------------------------
// Write some number of function signatures (usually two or more), followed by the body of the function:
function makeDate(timestamp: number): Date;
function makeDate(m: number, day: number, year: number): Date;

function makeDate(mOrTimestamp: number, day?: number, year?: number): Date {
  if (day !== undefined && year !== undefined) {
    return new Date(year, mOrTimestamp, day);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);//error because we are missing the year
// The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have TWO or more signatures above the implementation of the function.

// The implementation signature must also be compatible with the overload signatures
// function fn(x: boolean): void;
// Argument type isn't right
// function fn(x: string): void; 


//  WRITING GOOD OVERLOADS-----------------------------
// 1. Always prefer parameters with union types instead of overloads when possible
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
len(""); // OK
len([0]); // OK

// len(Math.random() > 0.5 ? "hello" : [0]); //error because the type is not string or any[]