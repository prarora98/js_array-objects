var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function() {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function() {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function() {
    console.log("Hi there!");
  }
};
//1
var penguins = [gunter, ramon, fred];
//2
console.log(penguins[0]);
//3
var secondPenguin = penguins[1];
//4
console.log(penguins[2].name);
//5
var myPenguin = {
  character: "Whiteblack",
  origin: "Whiteblack the Penguin Sees the World",
  author: "H. A. Rey and Margret Rey"
};
penguins.push(myPenguin);
//6
console.log(penguins.length);
//7
penguins[0].canFly = true;
//8
penguins[0].sayHello();
//9
for (var i = 0; i < penguins.length; i++) {
  console.log(penguins[i].name);
}
//10
for (var i = 0; i < penguins.length; i++) {
  penguins[i].sayHello();
}
//11
for (var i = 0; i < penguins.length; i++) {
  penguins[i].numberOfFeet = 2;
}
//12
for (var i = 0; i < penguins.length; i++) {
  penguins[i].canFly ? `${penguins[i].name} can fly!` : "";
}
