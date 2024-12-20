// prompt the user for names and ages
let names = prompt("Enter names separated by commas: ").split(",");
let ages = prompt("Enter ages separated by commas: ").split(",");

ages = ages.map(age => parseInt(age)); // convert ages strings to integer

let restructuredArray = []; //for multidimensional array

for (let i = 0; i < names.length; i++) {
    restructuredArray.push([names[i].trim(), ages[i]]); //[name, age]
}

// Log each sub array per line
restructuredArray.forEach(person => {
    console.log(person);
});