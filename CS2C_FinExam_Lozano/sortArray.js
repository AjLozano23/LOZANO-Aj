let numbers = prompt("Enter the numbers (commaseparated):"); // prompt the user for numbers and names
let names = prompt("Enter the names (comma separated):");

numbers = numbers.split(",").map(Number); // iconvert na atay in input jay line 1&2 into arrays input is coma separated
names = names.split(",");

//original arrays
console.log("Original Numbers Array:", numbers);
console.log("Original Names Array:", names);

let mergedArray = numbers.concat(names); // 2 Array merge become mergedArray
console.log("Merged Array:", mergedArray);

let sortedNumbers = numbers.sort((a, b) => b - a); // sort  numbers in reverse order
console.log("Sorted Numbers Array (Reverse Order):", sortedNumbers);

let sortedNames = names.sort(); // sort the names alphabetically order
console.log("Sorted Names Array:", sortedNames);
