let employee = [];

while (true) {
  let name = prompt("Employee's name:");
  if (name == "q") {
    break;
  }
  let ID = prompt("Employee's ID:", "ID");
  let salary = Number(prompt("Employee's salary:", "value"));

  employee.push({ name, ID, salary });
}

console.log("================full table================");
console.log(employee);

//'item' refers to the object in question
let notInternship = employee.filter(function (item) {
  return item.salary > 1500;
});
console.log("================no interns================");
console.log(notInternship);
