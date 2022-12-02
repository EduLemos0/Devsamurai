let start = Number(prompt("Type starting value"));
let inc = Number(prompt("Type increment value"));
let max = Number(prompt("Type maximum value"));

let ans = 0;

for (x = start; x < max; x += inc) {
  console.log(Math.log(x));
}

//not really a challenge. But hey, I'm a beginner
