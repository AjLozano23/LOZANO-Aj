let day_input = prompt("Enter a day of the week: ");

switch(day_input){
    case "Monday":
        alert("Your task for Monday is: Finish your assignments.");
        break;
    case "Tuesday":
        alert("Your task for Tuesday is: Finish your activity.");
        break;
    case "Wednesday":
        alert("Your task for Wednesday is: Finish your projects.");
        break;
    case "Thursday":
        alert("Your task for Thursday is: Finish your assignments again.");
        break;
    case "Friday":
        alert("Your task for Friday is: Finish your activity again.");
        break;
    case "Saturday":
        alert("Your task for Saturday is: play video games.");
        break;
    case "Sunday":
        alert("Your task for Sunday is: play video games again.");
        break;
    default:
        alert("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday only");
    }