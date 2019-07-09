var myPenguin = {
  character: "Whiteblack",
  origin: "Whiteblack the Penguin Sees the World",
  author: "H. A. Rey and Margret Rey"
};
//1
myPenguin.outfit = {
  hat: "baseball cap",
  shirt: "Hawaiian shirt",
  pants: "cargo shorts",
  shoes: "flip-flops"
};
//2
var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);
//3
myPenguin.outfit.accessory = "pocket watch";
//4
myPenguin.outfit.hat = "top hat";
//5
delete myPenguin.outfit.pants;
//6
for (var key in myPenguin.outfit) {
  console.log(myPenguin.outfit[key]);
}
