let vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
let vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
console.log(vw);
console.log(vh);

let main = document.getElementById("main_frame");
main.style.width = vw + "px";
main.style.height = vh + "px";
main.style.backgroundColor = "#dddddd";
main.style.margin = "0px";
main.style.padding = "0px";

document.body.style.margin = "0px";
document.body.style.padding = "0px";

let divs = [];

class SpaceShip {
  constructor() {
    this.div = document.createElement("div");
    this.size = Math.random() * 120;
    this.R = Math.random() * 255;
    this.G = Math.random() * 255;
    this.B = Math.random() * 255;
    this.x = Math.random() * vw - this.size;
    this.y = Math.random() * vh - this.size;
    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;

    this.ax = 0;
    this.ay = 2;

    this.div.style.backgroundColor =
      "rgb(" + this.R + "," + this.G + "," + this.B + ")";
    this.div.style.height = this.size + "px";
    this.div.style.width = this.size + "px";
    this.div.style.position = "absolute";
    this.div.style.borderRadius = this.size / 2 + 3 + "px";
    this.div.style.border = "solid black 3px";
    this.div.style.top = this.x + "px";
    this.div.style.left = this.y + "px";
    main.appendChild(this.div);
  }

  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    if (this.x < 0) {
      this.x = 0;
      this.vx *= -1;
    }

    if (this.y < 0) {
      this.y = 0;
      this.vy *= -1;
    }

    if (this.x + this.size > vw) {
      this.x = vw - this.size;
      this.vx *= -1;
    }

    if (this.y + this.size > vh) {
      this.y = vh - this.size;
      this.vy *= -1;
    }

    this.update();
  }

  update() {
    this.div.style.top = this.y + "px";
    this.div.style.left = this.x + "px";
  }
}

for (let i = 0; i < 100; i++) {
  let spaceShip = new SpaceShip();
  divs.push(spaceShip);
}

setInterval(function () {
  for (let i = 0; i < 100; i++) {
    divs[i].move();
  }
}, 40);
