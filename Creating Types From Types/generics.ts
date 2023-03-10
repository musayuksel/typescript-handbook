function identity<Type>(arg: Type): Type {
  return arg;
}
// we can call the function in two ways:
// 1. Pass all of the arguments, including the type argument:
const output = identity<string>('myString'); //return type is string
// 2. Let type argument inference set the value for us: More common
const output2 = identity('myString'); //return type is string

// Working with Generic Type Variables
function loggingIdentity<Type>(arg: Type): Type {
  // console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}
// solution: we can use the type parameter in another way:
function loggingIdentity2<Type>(arg: Type[]): Type[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

// GENERIC CLASSES-----------------------------
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;

  constructor(zeroValue: NumType, add: (x: NumType, y: NumType) => NumType) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => {
  console.log('SUM:' + (x + y));
  return x + y;
});

// GENERIC CONSTRAINTS-----------------------------
// we can use generic constraints to require the type argument to have certain properties
interface Lengthwise {
  length: number;
}
function loggingIdentity3<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// USING TYPE PARAMETERS IN GENERIC CONSTRAINTS-----------------------------
// we can declare a type parameter that is constrained by another type parameter
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
const x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
// getProperty(x, 'm');//error, m is not a property of x
