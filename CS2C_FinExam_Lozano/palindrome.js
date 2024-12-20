let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

function reverseString(str) {
  return str.split('').reverse().join(''); // fuction reverse the string
}

let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// print original and reversed strings
console.log("Original string 1:", word1);
console.log("Reversed string 1:", reversedWord1);

console.log("Original string 2:", word2);
console.log("Reversed string 2:", reversedWord2);

console.log(word1 === reversedWord1); // out put true or false
console.log(word2 === reversedWord2);