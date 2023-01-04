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