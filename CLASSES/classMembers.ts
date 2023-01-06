// TypeScript offers full support for the class keyword introduced in ES2015.
// A field declaration creates a PUBLIC writeable property on a class:
class Person {
  //   name: string; //error, we can change the strictPropertyInitialization to false in tsconfig.json
}

const person = new Person();
person.name = 'Maximilian';

// Constructor Functions
class GoodPerson {
  fistName: string;
  lastName: string;
  //   constructor(fistName: string, lastName: string) {
  //     this.fistName = fistName;
  //     this.lastName = lastName;
  //   }
  constructor(fistName = 'userName', lastName = 'userLastName') {
    //default values
    this.fistName = fistName;
    this.lastName = lastName;
  }
}

// SUPER CALLS
class GoodPerson2 extends GoodPerson {
  age: number;
  constructor(fistName = 'userName', lastName = 'userLastName', age = 0) {
    super('Max', 'Mustermann');
    this.age = age;
  }
}

//METHODS
class GoodPerson3 extends GoodPerson {
  age: number;
  constructor(fistName = 'userName', lastName = 'userLastName', age = 0) {
    super('Max', 'Mustermann');
    this.age = age;
  }
  incrementAge() {
    this.age++;
  }
}

// ACCESSORS - GETTERS AND SETTERS
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
//NOTE:
//  TypeScript has some special inference rules for accessors:

// 1- If get exists but no set, the property is automatically readonly
// 2- If the type of the setter parameter is not specified, it is inferred from the return type of the getter
// 3- Getters and setters must have the same Member Visibility

// INDEX SIGNATURES-----------------------------
//Same as in interfaces
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}
const myClass1 = new MyClass();
myClass1.name1 = true;
myClass1.name2 = false;
myClass1.check('name1'); //true
myClass1.check('name2'); //false
