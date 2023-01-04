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
