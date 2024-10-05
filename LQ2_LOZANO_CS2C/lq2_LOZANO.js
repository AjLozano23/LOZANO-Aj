// Prompt or input user data
let name = prompt("Enter name:");
let address = prompt("Enter address:");
let age = parseInt(prompt("Enter age:"));
let class_role = prompt("Enter role:");
let course = prompt("Enter course:");

if(course == "BSCS"){ // Check user course if bscs 
    if(class_role == "Officer"){ // If course correct then it check class roles
        alert("You are officer of BSCS");
        for(i=0;i < (age / 4); i++ ){ // loop name 1/4 of the Age input. 
            alert(name);
        }
    }else if(class_role == "Student"){
        alert("You are student of BSCS");
        for(i=0;i < (age / 4); i++ ){
            alert(name);
        }
    }else if(class_role == "Teacher"){
        alert("You are teacher of BSCS");
        for(i=0;i < (age / 4); i++ ){
            alert(name);
        }
    }else{
        alert("Role not existent."); // if the role prompt not exist 
    }


}else if(course == "BSM"){ // Check user course prompt if bsm
    if(class_role == "Officer"){
        alert("You are officer of BSM");
        for(i=0;i < (age / 4); i++ ){
            alert(name);
        }
    }else if(class_role == "Student"){
        alert("You are student of BSM");
        for(i=0;i < (age / 4); i++ ){
            alert(name);
        }
    }else if(class_role == "Teacher"){
        alert("You are teacher of BSM");
        for(i=0;i < (age / 4); i++ ){
            alert(name);
        }
    }else{
        alert("Role not existent."); // if role prompt not exist
    }

}else if(course == "BAEL"){ // Check user course if bael
    if(class_role == "Officer"){
        alert("You are officer of BAEL");
        for(i=0;i < (age / 4); i++ ){
            alert(name);
        }
    }else if(class_role == "Student"){
        alert("You are student of BAEL");
        for(i=0;i < (age / 4); i++ ){
            alert(name);
        }
    }else if(class_role == "Teacher"){
        alert("You are teacher of BAEL");
        for(i=0;i < (age / 4); i++ ){
            alert(name);
        }
    }else{
        alert("Role not existent."); // if role prompt not exist
    }
}else{
    alert("Course not existent."); // if course prompt not exist
}