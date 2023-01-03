// Parameter type annotation
function greetMe(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!');
}

greetMe('maddison');
// greetMe();//Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.
// greetMe(35); //will throw error because 35 is not a string