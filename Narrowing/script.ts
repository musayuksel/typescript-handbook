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
