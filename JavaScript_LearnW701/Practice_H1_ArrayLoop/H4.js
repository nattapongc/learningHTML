const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = [];

let func_n = function (n) {
  x.push(n);

  if (x.length == 10) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] % 2 == 0) {
        console.log(x[i]);
      }
    }
    rl.close();
  }
};

rl.on("line", func_n);
