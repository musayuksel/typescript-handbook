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

// CONDITIONAL TYPE CONSTRAINTS-----------------------------

// type MessageOf<T> = T['message']; //*** Error*/
type MessageOf<T extends { message: unknown }> = T['message']; //OK, we
interface Email {
  message: string;
}
const email: MessageOf<Email> = 'Hello World'; //OK

type MessageOf2<T> = T extends { message: unknown } ? T['message'] : never; //OK

// INFERRING WITH CONDITIONAL TYPES-----------------------------
// Conditional types provide us with a way to infer from types we compare against in the true branch using the infer keyword.
// For example, we could have inferred the element type in Flatten instead of fetching it out “manually” with an indexed access type:
type Flatten<T> = T extends Array<infer U> ? U : T; //*** This is ADVANCED, Learn infer */

// DISTRIBUTIVE CONDITIONAL TYPES-----------------------------
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>; // string[] | number[] which should be (string | number)[]
// The problem is that the conditional type is evaluated once for each type in the union, and then the results are unioned together.
//  To avoid that behavior, you can surround each side of the extends keyword with square brackets.

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type StrArrOrNumArr3 = ToArrayNonDist<string | number>; // (string | number)[]
