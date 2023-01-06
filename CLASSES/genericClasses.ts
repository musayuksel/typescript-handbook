// When a generic class is instantiated with `new`,
// its type parameters are inferred the same way as in a function call:
class Box2<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}
const box2 = new Box2('hello!'); //type of box2 is Box2<string>
