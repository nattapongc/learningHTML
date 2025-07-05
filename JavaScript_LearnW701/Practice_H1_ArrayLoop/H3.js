const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x = [];

let func_n = function(n){
    x.push(n);

    if(x.length == 10)
    {
        for(let i = x.length-1;i >= 0;i--)
        {
            console.log(x[i]);
        }
        rl.close();
    }
    
}

rl.on("line",func_n)