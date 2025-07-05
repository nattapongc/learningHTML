const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let xxxx = function(n){
    x.push(n);

    if(x.length == 10)
    {
        x.forEach((n) => {console.log(n)});
        rl.close();
    }
}


let x = [];
rl.on("line", xxxx)

