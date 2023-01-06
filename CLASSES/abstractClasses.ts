// An abstract method or abstract field is one that hasn’t had an implementation provided.
// These members must exist inside an abstract class, which cannot be directly instantiated.
// When a class doesn’t have any abstract members, it is said to be concrete.
abstract class BaseAbstract {
  abstract getName(): string;

  printName() {
    console.log('Hello, ' + this.getName());
  }
}
// const b = new BaseAbstract();//ERROR, I can't instantiate an abstract class

class DerivedAbstract extends BaseAbstract {
  getName() {
    //I need to implement the abstract method
    return 'world';
  }
}

// subtype relationships between classes exist even if there’s no explicit inheritance:
class Person6 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Employee {
  name: string;
  age: number;
  salary: number;
  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

// OK ????
const person4: Person6 = new Employee('Max', 30, 100000);
