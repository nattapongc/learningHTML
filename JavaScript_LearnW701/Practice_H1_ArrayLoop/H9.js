const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = [];

let func_n = function (n) {
  x.push(parseInt(n));

  if (x.length == 10) {
    let max = Number.NEGATIVE_INFINITY;
    max = Math.max.apply(null,x);
    console.log(max);
    rl.close();
  }
};

rl.on("line", func_n);
