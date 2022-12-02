while (true) {
  let n1 = Number(prompt("Type the first number"));
  let n2 = Number(prompt("Type the second number"));

  if (n1 == 69 || n2 == 69) {
    break;
  } else {
    let op = prompt("Type in the operation");
    let result;

    if (op === "+") {
      result = n1 + n2;
    } else if (op === "-") {
      result = n1 - n2;
    } else if (op === "*") {
      result = n1 * n2;
    } else if (op === "/") {
      result = n1 / n2;
    } else {
      console.log("Not a valid operation");
    }
    alert("Result is " + result);
  }
}
