const employeeData = {
  name: 'papiya',
  id: 234,
  salarry: 345456,
  gender: 'women',
  experience: 6
}
// seal holo tomake object er man modify korte debe notun kono kichu deleate ba add korte debe na
Object.seal(employeeData);
// delete employeeData.id
// delete employeeData.gender


// 2 experience bose gace   
employeeData.experience = employeeData.experience + 2;
employeeData.location = 'dhaka';
console.log(employeeData)