// JavaScript’s handling of this is indeed unusual:
class MyClass3 {
  name = 'MyClass3';
  getName() {
    return this.name;
  }
}
const myClass3 = new MyClass3();
const myObj = {
  name: 'obj',
  getName: myClass3.getName,
};

// Prints "obj", not "MyClass3"
console.log(myObj.getName());

// ARROW FUNCTIONS -------------------------------------
// Arrow functions don’t bind their own this, so they can’t be used to implement methods:
class MyClass4 {
  name = 'MyClass4';
  getName = () => this.name;
}
const myClass4 = new MyClass4();
const myObj2 = myClass4.getName;
console.log(myObj2());

// This has some trade-offs:

// The this value is guaranteed to be correct at runtime, even for code not checked with TypeScript
// This will use more memory, because each class instance will have its own copy of each function defined this way
// You can’t use super.getName in a derived class, because there’s no entry in the prototype chain to fetch the base class method from

// this PARAMETERS -------------------------------------
// this parameters are a way to tell the compiler that a function will be called with a specific this value:
class MyClass5 {
  name = 'MyClass5';
  getName(this: MyClass5) {
    return this.name;
  }
}
const myClass5 = new MyClass5();
const myObj3 = {
  name: 'obj',
  getName: myClass5.getName,
};
// Prints "obj", not "MyClass5"
console.log(myObj3.getName());
