// Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.
// implement CLAUSES -----------------------------
interface Pingable {
  ping(): void;
}
class Sonar implements Pingable {
  ping() {
    console.log('ping!'); //OK
  }
}

// class Ball implements Pingable {//ERROR, Ball does not implement ping()
//   pongPong() {
//     console.log('pong!');
//   }
// }

interface A {
  x: number;
  y?: number;
}
class C2 implements A {
  x = 0;
}
const c = new C2();
// c.y = 10;//Error implementing an interface with an optional property doesn’t create that property:

// EXTENDING CLASSES -----------------------------
class Animal {
  move() {
    console.log('Moving...');
  }
}
class Dog extends Animal {
  bark() {
    console.log('Barking...');
  }
}
const dog = new Dog();
dog.bark(); //OK
dog.move(); //OK

// OVERRIDING METHODS -----------------------------
class Dog2 extends Animal {
  // move(area: string){//error, we need to add the parameter area
  move(area?: string) {
    if (area) {
      console.log(`Moving to ${area}...`);
    } else {
      super.move(); //We can call the super method using super.methodName()
    }
  }
}
// IMPORTANT:
const dog2: Animal = new Dog2(); //we can give superclasses a more specific type than the subclass
