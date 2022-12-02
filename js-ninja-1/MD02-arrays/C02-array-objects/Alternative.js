let worker = [];
let amount = 0;

while (true) {
  let name = prompt("Employee's name:");
  if (name == "q") {
    break;
  }
  let ID = prompt("Employee's ID:");
  let salary = parseFloat(prompt("Employee's Salary:"));

  worker.push({ name, ID, salary });
  amount++;
}

//calculate average of salary in the company
let avg = 0;

worker.forEach((item) => {
  avg += item.salary;
});

console.log(avg);

// console.log(worker);
