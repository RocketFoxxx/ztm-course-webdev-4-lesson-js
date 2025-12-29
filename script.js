// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("John");


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
dragons.filter(name => name.includes('John'))

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power = (x) => x**10000; //infinity

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

let str = "aaaatt";
str.padStart(10);

const obj = {
	name: "Lauris",
	age: "11",
	date: "22.11.1111"
}

Object.values(obj).forEach((value) => {
	console.log(value);
})


Object.entries(obj).forEach((entry) => {
	console.log(entry);
})

Object.entries(obj).map((item) => {
	return item[1] + item[0];
})

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = 'ðŸ¢';
let rabbit = 'ðŸ‡';
turtle.padStart(startLine);
rabbit.padStart(startLine);

// when you do:
console.log(startLine);
turtle.padStart(startLine);
rabbit.padStart(startLine);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// // #3) Get the below object to go from:
// let obj2 = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }

// let newArray = Object.entries(obj2).map((val) => {
// 	const a = [val[0] + " " + val[1];
// 	return a.join(" ");
// })

// console.log(newArray);