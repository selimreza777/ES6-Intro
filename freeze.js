const employeeData = {
  name: 'papiya',
  id: 234,
  salarry: 345456,
  gender: 'women',
  experience: 6
}
Object.freeze(employeeData);
// delete employeeData.id
// delete employeeData.gender


// 2 experience bose gace   
employeeData.experience = employeeData.experience + 2;
employeeData.location = 'dhaka';
console.log(employeeData)