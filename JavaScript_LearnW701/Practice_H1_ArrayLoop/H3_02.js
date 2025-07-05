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
        x.reverse();
        for(let i = 0;i < x.length;i++)
        {
            console.log(x[i]);
        }
        rl.close();
    }
    
}

rl.on("line",func_n)