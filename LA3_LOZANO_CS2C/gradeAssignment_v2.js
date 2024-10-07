// prompt user to enter score
let score_input = prompt("Enter your score:");

// determine equivalent grade from the entered score by many conditions
score_input >= 97? alert("Your equivalent Grade is “1.00” Excellent")
    :score_input >= 94 && score_input <= 96? alert("96: Your equivalent Grade is “1.25” Excellent")
    :score_input >= 91 && score_input <= 93? alert("Your equivalent Grade is “1.50” Above Average")
    :score_input >= 88 && score_input <= 90? alert("Your equivalent Grade is “1.75” Above Average")
    :score_input >= 85 && score_input <= 87? alert("Your equivalent Grade is “2.00” Average")
    :score_input >= 82 && score_input <= 84? alert("Your equivalent Grade is “2.25” Average")
    :score_input >= 79 && score_input <= 81? alert("Your equivalent Grade is “2.50” Below Average")
    :score_input >= 76 && score_input <= 78? alert("Your equivalent Grade is “2.75” Below Average")
    :score_input == 75? alert("Your equivalent Grade is “3.00” Below Average")
    :score_input >= 72 && score_input <= 74? alert("Your equivalent Grade is “4.00” Poor")
    :alert("Your equivalent Grade is “5.00” Poor"); // grade below 72

    if(score_input >= 90){ // Final remarks based on the score entered
        alert("Final Remarks: HIGH PASS, Candidate for Cum Laude"); // if remarks 90 above
    }else if(score_input >= 80 && score_input <= 89){
        alert("Final Remarks: AVERAGE PASS"); // remarks if scores 80 to 89
    }else if(score_input >= 75 && score_input <= 79){
        alert("Final Remarks: LOW PASS"); // remarks if score 75 to 79
    }else{
        alert("FAILED, Needs Improvement"); //remarks below 75
    }