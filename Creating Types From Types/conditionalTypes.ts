// Conditional types take a form that looks a little like conditional expressions (condition ? trueExpression : falseExpression) in JavaScript:
// SomeType extends OtherType ? TrueType : FalseType;
//It is very useful when we use with GENERIC TYPES

interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel; //*** */

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  //argument type is number or string
  //return type is IdLabel or NameLabel
  throw 'unimplemented';
}
const label1 = createLabel(123); //label1 is IdLabel
