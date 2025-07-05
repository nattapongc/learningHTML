let cat = {
  name: "ai oun",
  weight: 5,
  color: "white",
  move: function () {
    console.log(`this is move function of cat ${cat.name}`);
  },
};

console.log(cat.name);
console.log(cat.weight);
console.log(cat.color);
cat.move();
