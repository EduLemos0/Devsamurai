let arr = [];
let amount = 0;

function avg(arr, amount) {
  let sum = 0;
  for (x = 0; x < amount; x++) {
    sum += arr[x];
  }
  return sum / amount;
}

while (true) {
  let num = prompt("Type a number or 'q' to quit");

  if (num == "q") {
    alert(avg(arr, amount));
    break;
  }
  num = Number(num);
  arr.push(num);
  amount++;
}
