// normal function declaration
function add(num1, num2) {
  return num1 + num2;
}
// function expression 
const addition = function (num1, num2) {
  return num1 + num2;
}
const result = addition(10, 20);
// console.log(result)

// arrow-function 
// const arrowFunction = (num1, num2) => num1 + num2
// const relult = arrowFunction(10, 20)
// console.log(relult)

// arrow function pactice
const multiArroFunction = (num1, num2) => num1 * num2
const result2 = multiArroFunction(5, 5);
console.log(result2);

// division 
const div = (num1, num2) => num1 / num2
const result3 = div(70, 2);
console.log(result3);


// greatter than check arro function 
const firsBigNumber = (x, y) => x > y
const isBig = firsBigNumber(9, 3)
console.log(isBig);

// multi-line arrow function
const multiLine = (x, y) => {
  const multi = x * y;
  const againMulti = x * 2;
  const relult = multi + againMulti;
  return relult;

}