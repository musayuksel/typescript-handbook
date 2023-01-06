//1- public -------------------------------------
class PublicGreeter {
  // A public member can be accessed anywhere:
  public name: string; //default, we can omit the public keyword
  constructor(name: string) {
    this.name = name;
  }
  public greet() {
    console.log(`Hello, ${this.name}`);
  }
}

// 2- protected -------------------------------------
// members are only visible to subclasses of the class they’re declared in.
class ProtectedGreeter {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  protected getName() {
    return this.name;
  }
  protected greet2() {
    //I will override this method in the subclass
    console.log(`Hello, ${this.name}`);
  }
}
class SpecialGreeter extends ProtectedGreeter {
  constructor(name: string) {
    super(name); //I can access the protected property name
  }
  greet() {
    console.log(`Hello, ${this.getName()}`); //I can access the protected method getName()
  }
  greet2() {
    console.log('override greet2');
  }
}
const specialGreeter = new SpecialGreeter('Max');
specialGreeter.greet(); //OK
// specialGreeter.getName(); //Error, I can't access the protected method getName()
specialGreeter.greet2(); //OK, because I override the method in the subclass and it is public

// 3- private -------------------------------------
// is like protected, but doesn’t allow access to the member even from subclasses:
class Base2 {
  private x = 0;
}
class Derived2 extends Base2 {
  //   x = 1; //Error, I can't extend a class with a private property
}
//cross instance private access
class DoSomething {
  private x = 10;
  public sameAs(other: DoSomething) {
    return other.x === this.x;
  }
}

// CAVEATS -------------------------------------
// private and protected are only enforced during type checking.
// They are removed from the compiled JavaScript code.
// private also allows access using bracket notation during type checking.
// This makes private-declared fields potentially easier to access for things like unit tests,
// with the drawback that these fields are soft private and don’t strictly enforce privacy.
class MySafe {
  private secretKey = 12345;
  #verySecretKey = 54321; //private fields, best practice
}
const mySafe = new MySafe();

// Not allowed during type checking
// console.log(mySafe.secretKey);//Error
// OK
console.log(mySafe['secretKey']);
// console.log(mySafe['#verySecretKey']); //Error, private fields are not allowed to access using bracket notation

//3- static -------------------------------------
// static members are accessed using the class name, not an instance of the class:
class MyClass2 {
  static x = 0;
  private static y = 0; //we  can use private|protected|public with static members
  static printX() {
    console.log(MyClass2.x);
  }
}
console.log(MyClass2.x); //OK
MyClass2.printX(); //OK
// TypeScript (and JavaScript) don’t have a construct called static class the same way as C#.
// Unnecessary "static" class
class MyStaticClass {
  static doSomething() {}
}

// Preferred (alternative 1)
function doSomething() {}

// Preferred (alternative 2)
const MyHelperObject = {
  dosomething() {},
};

//3-1 static blocks -------------------------------------
class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }

  static {
    try {
      const lastInstances = () => 1; //some logic to get the last instances of
      Foo.#count += lastInstances();
    } catch {}
  }
}

const foo2 = new Foo();
console.log(foo2.count); //1
