// Parameter type annotation
function greetMe(name: string): void {
  console.log('Hello, ' + name.toUpperCase() + '!!');
}

greetMe('maddison');
// greetMe();//Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.
// greetMe(35); //will throw error because 35 is not a string

// ANONYMOUS FUNCTIONS

const userNames = ['Alice', 'Bob', 'Eve'];
userNames.forEach((userName) => {
  //TS will infer the type of userName
  //This process is called contextual typing because the context that the function occurred within informs what type it should have.
  console.log(userName.toUpperCase());
});

// OPTIONAL AND DEFAULT PARAMETERS

function buildName(firstName: string, lastName?: string, age: number = 0) {
    //lastName is optional
    if (lastName) return firstName + ' ' + lastName + ' ' + age;
    else return firstName+ ' ' + age;
}

let result1 = buildName('Bob'); // works correctly now