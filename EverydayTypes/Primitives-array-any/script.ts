const userName: string = 'John';
const userAge: number = 25;
const isMember: boolean = true;
const userHobbies: string[] = ['Sports', 'Cooking'];
// The type names String, Number, and Boolean (starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.
//Note that [string] is a different thing; refer to the section on Tuples.

let myObject: any;
myObject.name = 'John';
myObject();
//using any is NOT recommended, because it defeats the purpose of using TypeScript. It is better to use unknown type instead of any.