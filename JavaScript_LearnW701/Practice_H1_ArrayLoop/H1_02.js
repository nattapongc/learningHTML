const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let xxxx = function(n){
    x.push(n);
    if(x.length >= 10)
    {
        let even = false;
        even = x.some((n)=> {return n%2 == 0})
        if(even == true)
        {
            console.log("have");
        }
        else
        {
            console.log("don't have")
        }
        rl.close();
    }
}

x = [];
rl.on("line", xxxx)