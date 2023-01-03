function printId(id: number | string) {
  console.log('Your ID is: ' + id);
}

printId(101);
printId('202');
//   printId({ myID: 22342 });  // Error, object is not a number or string
