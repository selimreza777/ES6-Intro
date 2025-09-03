
const numbers = [1, 2, 3, 4, 5, 6, 9]

// for of [dele ta arry er each element k loop kore all output debe]

for (const num of numbers) {
  // console.log(num)
}
// ----------------------------
const employeeData = {
  name: 'papiya',
  id: 234,
  salarry: 345456,
  gender: 'women',
  experience: 6
}
// for in [object upore marle ta object er property gula output debe]

for (const key in employeeData) {
  const value = employeeData[key]
    console.log(key, value)
}