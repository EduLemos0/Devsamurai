let guests = [];

while (true) {
  let name = prompt("Type a name or 'q' to quit: ");
  if (name == "q") {
    break;
  }

  let age = Number(prompt("Type guest age : "));
  if (age < 18) {
    alert("Guest is too young");
    break;
  }
  //add age limiter

  let cpf = prompt("Type your cpf: ");

  guests.push({ name, age, cpf });
}

console.log(guests);
