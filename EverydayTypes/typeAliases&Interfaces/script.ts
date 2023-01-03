type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// INTERFACE
interface PointInterface {
  x: number;
  y: number;
}

// Exactly the same as the earlier example
function printCoordInterface(pt: PointInterface) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// DIFFERENCE BETWEEN TYPE ALIAS AND INTERFACE
// Type aliases can’t be extended or implemented from (nor can they extend/implement other types).
// Interfaces can extend other interfaces and can be extended by other interfaces.
interface PointInterface2 extends PointInterface {
  z: number;
}

type Point2 = Point & {
  z: number;
};
