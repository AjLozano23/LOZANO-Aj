const arr1 = ["Cecile", "Lone"]; //array1 names
const arr2 = ["Emil", "Tobias", "Linus"]; //array2 names
const arr3 = arr1.concat(arr2); // concat to join arr1 and arr2
console.log(arr3);

const fruits = ["Banana", "Orange", "Apple", "Mango"];  //array of fruits
fruits.push("Kiwi"); // push kiwi to array fruit
console.log(fruits);

const array1 = [1, 2, 3];
array1.unshift(4, 5); // unshift to add 2 numbers 4 and 5 at the beggining of array1
console.log(array1);

fruits.pop(); // pop to remove the last element in array fruits
console.log(fruits);

const array2 = [1, 2, 3];
array2.shift(); // shift to remove the first element in array2
console.log(array2);

fruits.sort(); // to sort the fruits array alphabetically
console.log(fruits);

const slice_fruits = fruits.slice(1, 3); // new array containing a portion of the fruits array.
console.log(slice_fruits);

const months = ["April", "May", "June", "July"];
months.splice(1, 4,"April", "July"); // insert and remove elements in the months array.
console.log(months);