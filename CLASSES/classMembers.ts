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
