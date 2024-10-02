let grade_input = prompt("Enter your score: ");// getting the user input grade

if(grade_input >= 90){ // check if grade is 90 above
    alert("Your grade is: Excellent!");
}else if(grade_input >= 80 && grade_input <= 89){ //check if grade is 80 to 89
    alert("Your grade is: Good.");
}else if(grade_input >= 70 && grade_input <= 79){ // check if grade is 70 to 79
    alert("Your grade is: Fair.");
}else{ // else grade is 69 and below prints needs improvement
    alert("Needs improvement.")
}