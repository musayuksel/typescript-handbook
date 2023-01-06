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
