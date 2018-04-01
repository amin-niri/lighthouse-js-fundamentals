var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;
// Write a while loop that prints out the contents of ingredients:
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}

// Write a for loop that prints out the contents of ingredients:

for (var repeat = 0; repeat < ingredients.length; repeat++) {
  console.log(ingredients[repeat]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (repeat = ingredients.length-1; repeat >= 0; repeat--) {
  console.log(ingredients[repeat]);
}

