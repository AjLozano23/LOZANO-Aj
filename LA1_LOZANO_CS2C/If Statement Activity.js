//sir sa Chrome Developer Tools console po ako nag code instead sa VSCode

let age_input = prompt("Enter your age: "); // getting the user input using prompt()

if(age_input < 13){ //check if age is less than 13
    alert("You are a child.");
}else if(age_input >= 13 && age_input <= 19){ //check if age is 13 to 19
    alert("You are a Teenager");
}else{ // else 19 above is adult
    alert("You are an adult");
}