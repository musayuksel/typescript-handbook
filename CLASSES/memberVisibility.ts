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
