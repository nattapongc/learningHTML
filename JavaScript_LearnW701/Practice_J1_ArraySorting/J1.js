const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = [];

let func_n = function (n) {
  x.push(parseInt(n));

  if (x.length == 10) {
    x.sort((a,b) => { //default sorting, sort on alphabet
        if(a < b) return -1;
        if(a == b) return 0;
        if(a > b) return 1;
    });
    process.stdout.write("[");
    for(let i = 0;i < x.length;i++)
    {
        if(i == x.length-1)
        {
            process.stdout.write(x[i]+"");
        }
        else
        {
            process.stdout.write(x[i]+",");
        }
    }
    process.stdout.write("]");
    rl.close();
  }
};

rl.on("line", func_n);