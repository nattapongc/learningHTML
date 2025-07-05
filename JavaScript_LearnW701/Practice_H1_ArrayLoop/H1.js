const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let xxxx = function(n){ // this is asynchronous
    x.push(n);
    if(x.length >= 10)
    {
        let even = false;
        let i = 0;
        while(i < x.length)
        {
            if(x[i] % 2 == 0)
            {
                even = true;
                break;
            }
            i++;
        }
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