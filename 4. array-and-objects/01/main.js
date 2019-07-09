var myPenguin = {
  character: "Whiteblack",
  origin: "Whiteblack the Penguin Sees the World",
  author: "H. A. Rey and Margret Rey"
};
myPenguin.favoriteFoods = ["sandwich", "bread", "burger"];
//2
console.log(myPenguin.favoriteFoods[1]);
//3
myPenguin.firstFavFood = myPenguin.favoriteFoods[0];
//4
myPenguin.favoriteFoods.push("salad");
//5
myPenguin.favoriteFoods.length;
//6
myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] = "pineapple";
//7
myPenguin.lastFavFood =
  myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1];
//8
for (var i = 0; i < myPenguin.favoriteFoods.length; i++) {
  console.log(myPenguin.favoriteFoods[i]);
}
