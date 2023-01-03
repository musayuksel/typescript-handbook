"use strict";
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
// greet("Maddison", Date());//will throw error because Date is not a string
greet("Maddison", new Date());
