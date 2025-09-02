// const product = { name: 'shirt', price: 500, quantity: 4 }

// obj er property er vlue ja ace tar ekta variable hoyjai { price }

const { price, quantity } = { name: 'shirt', price: 800, quantity: 6 }

// console.log(price, quantity)


// const discount = product.price * 20 / 100;
// const yourPay = product.price - discount;
// const vatAmount = product.price * 7 / 100;
// const totalAmount = yourPay + vatAmount;

// const price =product.price;

// const discount = product.price * 20 / 100;
// const yourPay = product.price - discount;
// const vatAmount = product.price * 7 / 100;
// const totalAmount = yourPay + vatAmount;

// const price = product.price;

// const discount = product.price * 20 / 100;
// const yourPay = product.price - discount;
// const vatAmount = product.price * 7 / 100;
// const totalAmount = yourPay + vatAmount;


// destructuring er exapple {property k bolbo}
const student = { name: 'motin', roll: 56, sec: 'A' }
const { roll, sec } = student
// console.log(roll,sec)



const examMark =[34, 67, 78, 87];
const [first, second]= examMark;
const [physic, math]=[90,98];
console.log(physic)