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
