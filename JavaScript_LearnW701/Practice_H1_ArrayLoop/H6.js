const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = [];

let func_n = function (n) {
  x.push(parseInt(n));

  if (x.length == 10) {
    let sum = x.reduce((acc,n) => acc + n)
    console.log(sum);
    rl.close();
  }
};

rl.on("line", func_n);
