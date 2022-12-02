while (true) {
  let n1 = prompt("Type a number or 'q' to quit");
  if (n1 == "q") {
    alert("End of operation");
    break;
  } else {
    let n2 = Number(prompt("Type the second number"));
    n1 = Number(n1);
    let op = prompt("Type the operation that you wish");
    let ans = 0;

    if (op == "+") {
      ans = sum(n1, n2);
    } else if (op == "-") {
      ans = sub(n1, n2);
    } else if (op == "*") {
      ans = mult(n1, n2);
    } else if (op == "/") {
      ans = div(n1, n2);
    } else {
      alert("Error");
    }
    alert("Result is " + ans);
  }
}

function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}
function mult(n1, n2) {
  return n1 * n2;
}
function div(n1, n2) {
  return n1 / n2;
}
