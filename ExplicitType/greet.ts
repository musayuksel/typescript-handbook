function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
// greet("Maddison", Date());//will throw error because Date is not a string
greet("Maddison", new Date());