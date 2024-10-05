let name = prompt("Enter name:");
let address = prompt("Enter address:");
let age = parseInt(prompt("Enter age:"));
let class_role = prompt("Enter role:");
let course = prompt("Enter course:");

if(course == "BSCS"){
    if(class_rolerole == "Officer"){
        alert("${name}, You are officer of BSCS");
    }else if(class_rolerole == "Student"){
        alert("You are student of BSCS");
    }else if(class_rolerole == "Teacher"){
        alert("You are teacher of BSCS");
    }else{
        alert("Role not existent.");
    }


}else if(course == "BSM"){
    if(class_role == "Officer"){
        alert("You are officer of BSM");
    }else if(class_rolerole == "Student"){
        alert("You are student of BSM");
    }else if(class_rolerole == "Teacher"){
        alert("You are teacher of BSM");
    }else{
        alert("Role not existent.");
    }

}else if(course == "BAEL"){
    if(class_rolerole == "Officer"){
        alert("You are officer of BAEL");
    }else if(class_rolerole == "Student"){
        alert("You are student of BAEL");
    }else if(class_rolerole == "Teacher"){
        alert("You are teacher of BAEL");
    }else{
        alert("Role not existent.");
    }
}else{
    alert("Course not existent.");
}

