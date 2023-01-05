// BASIC TYPE
const s = ['hello', 'world'];
let n: typeof s = ['bob', 'fred']; //n is a string array

//RETURN TYPE
type f = () => string;
type T0 = ReturnType<f>; // T0 is string

function f3() {
  return { x: 10, y: 3 };
}
type T1 = ReturnType<typeof f3>; // T1 is { x: number, y: number }
