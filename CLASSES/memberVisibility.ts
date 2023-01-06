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
