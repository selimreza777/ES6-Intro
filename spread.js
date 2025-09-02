/*
 --------------
* spread operator
* --------------
*/

// const numbers = [87, 56, 3, 91];
// console.log(numbers);
// console.log(...numbers);

// // max boro shonkha 
// // const max =Math.max(32,23,56,44,656,777,2562);
// const max =Math.max(...numbers)
// console.log(max)

const firstNumber = [1, 2, 3, 4, 5];

// const secondNumber = firstNumber;
// secondNumber.push(6);
// console.log(firstNumber);

// array copy korar jonno 
// const first = [1, 2, 3, 4, 5];
// const second = [...first];
// const third = [...first, 55, 55, 66];
// // second.push(6);
// // console.log(first);
// // console.log(second);
// // console.log(third);

const age = [45, 45, 1];
const price = [98, 65, 45];
const all = [...age, 555, ...price]
const person = { name: 'omega', age: 25 }
const employee = { designation: 'dev', ...person }
console.log(employee);

const total = (a, b, c) => a + b + c;
const result = total(45, 56, 21)
const digit = [67, 56, 45]
total(...digit)

// number chorai te pari 
const numberIs = [4, 5, 6];
let numberAll = [1, 2, 3, ...numberIs, 7, 8];
console.log(numberAll)


