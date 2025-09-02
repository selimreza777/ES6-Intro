// function sum(num1, num2) { //num1 , num2 = bole prameter
//   const total = num1 + num2;
//   console.log(num1, num2, total);
// }
// sum(23, 24, 56, 45, 23,35); // 23, 34 = bole arguments

function multiply(num1 = 1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}
multiply(10);

function fullName(fast, second = '1') {
  const name = fast + '' + second;
  console.log(name);
}
fullName("kamruzzamn")

/*
* add , substarct  ---> 0
*
* multiply ---> 1
*
* string ----> ''
*
* array =[]
*
* object = {}
*/ 