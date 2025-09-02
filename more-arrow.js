// 20% discount how to calculate 
// 20/100*100

// const getTax = (amount, taxRate) => amount * taxRate / 100;
// multiple parameter function declear
const add = (p, q) => p + q; //normal arrow-function[use beshi hobe]

//single - parameter ****inmporten
const getSquare = (x) => x * x
const getSub = (x, y) => x - y
const getDiv = x => x / 2

const getFastArray = box => box[3];
const logIt = () => console.log(78)
console.log(getSquare(8))
console.log(getSub(2, 3))
console.log(getDiv(12))
console.log(getFastArray([2, 4, 5, 8, 9]))
console.log(logIt())

// multi-line arrow function declaration
const doMath = (x, y) => {
  const makeDouble = x * 2;
  const againDouble = y * 2;
  const result = makeDouble + againDouble;
  return result;
}

// annymous function
// document.getElementById('').addEventListener('click', () => {

// })
document.getElementById('btn').addEventListener('click', event => {

})

// ()=>{

// }
