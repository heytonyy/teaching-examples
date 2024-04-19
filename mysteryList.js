const mysteryList = ["Bag 1", "Bag 3", "Bag 4", "Bag 5", "Bag 2"];
let count = 0;
let index = 0;
let randomIndex;

// Repeat X times
while (count < 77) {
  // Choose a random index using commands in JavaScript
  randomIndex = Math.floor(Math.random() * mysteryList.length);

  // Add random value to index
  index += randomIndex;

  // if the index is out of bound, bring it in bound using MOD operator
  if (index >= mysteryList.length) {
    index = index % mysteryList.length;
  }

  // increase counter variable
  count++;
}

console.log(mysteryList[index]);
