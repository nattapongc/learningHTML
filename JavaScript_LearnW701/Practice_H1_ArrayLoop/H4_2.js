const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = [];

let func_n = function (n) {
  x.push(n);

  if (x.length == 10) {
    let y = x.filter(function(n) {return n%2 ==0});

    y.forEach((n)=>{console.log(n)})
    rl.close();
  }
};

rl.on("line", func_n);
