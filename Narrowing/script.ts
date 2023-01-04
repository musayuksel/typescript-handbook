// TYPE GUARDS---------------------------------------------
function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    // type of null is object
    for (const s of strs) {
      // but we can't iterate over it!
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // do nothing
  }
}

// TRUTHINESS---------------------------------------------
function printAll2(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  }
}

// EQUALITY---------------------------------------------
function printAll3(strs: string | string[] | null) {
  if (strs !== null) {
    // DON'T USE if(strs) because it will return false for empty string
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

// IN OPERATOR---------------------------------------------
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { fly?: () => void; swim?: () => void };

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    // narrow to Fish | Human
    return animal;
  }
  // narrow to Bird | Human
  return animal;
}

// INSTANCEOF OPERATOR---------------------------------------------
function logValue(x: Date | string) {
  if (x instanceof Date) {
    // narrow to Date
  } else {
    // narrow to string
    console.log(x.toUpperCase());
  }
}

//ASSIGNMENT---------------------------------------------
let myVariable = Math.random() < 0.5 ? 10 : 'hello world!'; // number | string
//le, TypeScript looks at the right side of the assignment and narrows the left side appropriately.

// CONTROL FLOW ANALYSIS - REACHABILITY-----------------------------------------
function foo(x: string | number) {
  if (typeof x === 'string') {
    // TypeScript knows that x is a string from this point on
    return x.toUpperCase();
  } else {
    return x;
  }
  return x; // error: Unreachable code detected.
}

// TYPE PREDICATES---------------------------------------------
type Fish2 = { swim: () => void };
type Bird2 = { fly: () => void };

function isFish(pet: Fish2 | Bird2): pet is Fish2 {
  //pet is Fish is our type predicate in this example.
  //A predicate takes the form parameterName is Type, where parameterName(pet) must be the name of a parameter from the current function signature.
  return (pet as Fish2).swim !== undefined;
}

declare function getSmallPet(): Fish2 | Bird2;
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()]; //zoo is an array of Fish2 | Bird2
const fishes = zoo.filter(isFish); // Fish2[]

// DISCRIMINATED UNIONS---------------------------------------------
interface Square {
  kind: 'square';
  size: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Circle;
// The kind property is a common property that discriminates the union.
function area(shape: Shape) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'circle':
      return Math.PI * shape.radius ** 2;
  }
}

//don't put all shapes in one interface
interface Shape2 {
  kind: 'square' | 'circle';
  radius?: number;
  size?: number;
}
function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
    // Object is possibly 'undefined'. because radius is optional
  }
}
