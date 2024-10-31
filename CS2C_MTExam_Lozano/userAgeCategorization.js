let userAge = prompt("User age:");// getting the user input age

if(userAge < 5){ // check if age is below 5
    alert("You're a Toddler(under 5 years old)");
}else if(userAge >= 5 && userAge <= 12){ // check if age is greater than or equal to 5 and less than or equal to 12
    alert("You're a Child(5-12 years old)");
}else if(userAge >= 13 && userAge <= 19){ // check if age is greater than or equal to 13 and less than or equal to 19
    alert("You're a Teenager(13-19 years old)");
}else if(userAge >= 20 && userAge <= 35){ // check if age is greater than or equal to 20 and less than 35
    alert("You're a Adult(20-35 years old)");
}else if(userAge >= 36 && userAge <= 60){ // check if age is greater than or equal to 36 and less than or equal to 60
    alert("You're a Middle-Aged(36-60 years old)");
}else{ // else.. if age is greater than 60 senior citizen :D
    alert("You're a Senior(60 years old above)");
}