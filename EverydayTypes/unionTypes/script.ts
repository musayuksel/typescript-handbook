function printId(id: number | string) {
  console.log('Your ID is: ' + id);
}

printId(101);
printId('202');
//   printId({ myID: 22342 });  // Error, object is not a number or string

function printId2(id: number | string) {
  // console.log('Your ID is: ' + id.toUpperCase()); //error because id is a union type
  if (typeof id === 'string') {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
