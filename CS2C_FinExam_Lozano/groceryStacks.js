let groceryList = []; //empty array for stack of grocery items

function viewLastItem(){
  if (groceryList.length === 0) { //check if the stack is empty
    console.log("Your grocery list is currently empty.");
    return null;
  }else{
    console.log("The last item in the grocery list is: " + groceryList[groceryList.length - 1]);
    return groceryList[groceryList.length - 1]; //else prints last item
  }
}

function addItem(item) {
  groceryList.push(item);  // add item to the stack
  console.log(`You added: ${item}`);
  console.log("Current grocery list: " + groceryList.join(", "));
  viewLastItem();
}

function removeItem() {
  if (groceryList.length === 0) { // check if grocery list is empty
    console.log("There are no items to remove, your list is empty.");
  }else{
    let removedItem = groceryList.pop();  // removes the last item on top

    console.log(`You removed: ${removedItem}`);
    console.log("Current grocery list: " + groceryList.join(", "));
    viewLastItem();
  }
}

for (let i = 0; i < 5; i++) { //5 times ka mag prompt ng grocery item
  let item = prompt("Please enter a grocery item:");
  addItem(item);  // add the item to the stack
}
removeItem();// Remove the most recent item added
