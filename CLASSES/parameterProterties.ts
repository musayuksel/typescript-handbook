// TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value.
// These are called parameter properties
// and are created by prefixing a constructor argument with one of the visibility modifiers public, private, protected, or readonly
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary here. It is just a shortcut for the following:
    // this.x = x;
    // this.y = y;
    // this.z = z;
  }
}
const params = new Params(1, 2, 3);
console.log(params); //Params {x: 1, y: 2, z: 3}
// console.log(params.z); //Error, I can't access the private property z
// console.log(params.y); //Error, I can't access the protected property y
