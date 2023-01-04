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
