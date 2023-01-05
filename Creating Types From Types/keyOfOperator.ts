// The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:
type P = keyof { x: number; y: number };
const p: P = 'x'; // p type is string and can only be 'x' or 'y'

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
const m: M = 'hello'; // m type is string and can be any string
const m2: M = 1; // m2 type is number and can be any number
// Note that in this example, M is string | number — this is because JavaScript object keys are always coerced to a string,
// so obj[0] is always the same as obj["0"].
