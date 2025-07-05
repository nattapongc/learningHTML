const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let xxxx = function(n){
    x.push(n);

    if(x.length == 10)
    {
        for(let i = 0;i < x.length;i++)
        {
            console.log(x[i]);
        }
        rl.close();
    }
}


x = [];
rl.on("line", xxxx)

