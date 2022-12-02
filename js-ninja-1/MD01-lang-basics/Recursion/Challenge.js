//implement recursive factoial function
function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let num = Number(prompt("Type a number: "));
if (num > 0) {
  alert(factorial(num));
}
