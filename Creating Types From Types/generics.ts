function identity<Type>(arg: Type): Type {
  return arg;
}
// we can call the function in two ways:
// 1. Pass all of the arguments, including the type argument:
const output = identity<string>('myString'); //return type is string
// 2. Let type argument inference set the value for us: More common
const output2 = identity('myString'); //return type is string
