function complexFunction(callback: (message: string) => void) {
  //it will get a function as a parameter that takes a string and returns void
  // ...
  callback('Hello World');
}
function printString(message: string) {
  console.log(message);
}
complexFunction(printString);
