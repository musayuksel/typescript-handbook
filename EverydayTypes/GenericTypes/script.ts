//

type MyGenericType<T> = { value: T };

const myAddressWithObj: MyGenericType<{ street: string }> = {
  value: { street: 'hello' },
};
// myAddressWithObj.value.street;//OK

// we can use for example a function to get the address
const fetchAddress = async (): Promise<{ street: string }> => {
  const personInfo = await fetch('https://randomuser.me/api/');
  const personInfoJson = await personInfo.json();
  return personInfoJson.results[0].location;
};

const convertToArray = (value: any) => {
  //1.function gets ANY value and returns an array of ANY
  return [value];
};

const convertToArray2 = (value: string): string[] => {
  //2.function gets a STRING value and returns an array of STRING
  return [value];
};

const convertToArray3 = <T>(value: T): T[] => {
  //3.function gets a GENERIC value and returns an array of GENERIC
  return [value];
};
// USAGE:

type TUser = { name: string };
// I can pass a specific type
const constStingToArr = convertToArray3<TUser>({ name: 'hello' });

// MORE ADVANCED USAGE:s
const findIndex = <T>(array: T[], item: T): number =>
  //4.function gets a GENERIC array and a GENERIC callback and returns a number
  array.findIndex((arrayItem) => arrayItem === item);

//   MULTIPLE GENERIC TYPES
const convertToArray4 = <T, U>(value: T, value2: U): [T, U] => {
  //5.function gets a GENERIC value and returns an array of GENERIC
  return [value, value2];
};

// USAGE:
const constStingToArr2 = convertToArray4<TUser, string>(
  { name: 'hello' },
  'world'
);
