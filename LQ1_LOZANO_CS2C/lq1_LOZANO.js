//Persona 1 data
var person1_name = "Maria Delos Santos Las Marias";
var person1_age = 25;
var person1_add = "Upper Session Road, Baguio City, Benguet";
//Persona 2 data
var person2_name = "Juan Gamoso Dela Cruz"
var person2_age = 28;
var person2_add = "San Nicolas, Candon City, Ilocos Sur";
// in split person1&2 names
var person1_name_rearrange = person1_name.split(" "); 
var person2_name_rearrange = person2_name.split(" "); 
const person1_lastname = person1_name_rearrange[3].toLocaleUpperCase() + " " + person1_name_rearrange[4].toLocaleUpperCase(); // last names to capital letters
const person2_lastname = person2_name_rearrange[2].toLocaleUpperCase() + " " + person2_name_rearrange[3].toLocaleUpperCase(); //
// Name,Age,Address
console.log("Name: ",person1_lastname + "," , person1_name_rearrange[0],person1_name_rearrange[1],person1_name_rearrange[2]+", Age:", person1_age, "Address:", person1_add);
console.log("Name: ",person2_lastname + "," , person2_name_rearrange[0],person2_name_rearrange[1]+", Age:", person2_age, "Address:", person2_add);

const length_person1name = person1_name.length; //29
const length_person2name = person2_name.length; //21
const length_person1add = person1_add.length; //40
const length_person2add = person2_add.length; //36

console.log(person1_age + person2_age + length_person1name + length_person2name + length_person1add + length_person2add); //Sum of all numeric values
console.log(person1_age + person2_age); //Sum of the ages: 53
console.log((person1_age + person2_age) - length_person1name); //sum of the ages = 53 - person1.length = 29
console.log(((person1_age + person2_age) - length_person1name) * length_person2name); // (sum-person1L) multiply person2name L
console.log(length_person1add ** length_person2add) //person1 address length to the power of person2 address length