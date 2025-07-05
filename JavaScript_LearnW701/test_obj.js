let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

let main = document.getElementById("main_frame");
main.style.width = vw + "px";
main.style.height = vh + "px";
main.style.backgroundColor = "#dddddd";
main.style.margin = "0px";
main.style.padding = "0px"

document.body.style.margin = "0px";
document.body.style.padding = "0px";

let divs = [];
for(let i = 0;i < 100;i++)
{
    let div = document.createElement("div");
    div.style.backgroundColor = "#ff0055";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.position = "absolute";
    div.style.top = (Math.random()*vh - 50) + "px";
    div.style.left = (Math.random()*vw - 50) + "px";
    main.appendChild(div);
    divs.push(div);
}

