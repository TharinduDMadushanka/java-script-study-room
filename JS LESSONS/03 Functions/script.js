let fName="Saman";
let lName="Kumara";

console.log(fName+" "+lName);

function displayName(){

    let fName="Saman";
    let lName="Kumara";

    console.log(fName+" "+lName); // nothing happen
}

displayName();

function displayName(fName,lName){
    console.log(fName+" "+lName);
}

displayName("Tharindu","Madushanka");
displayName("Dilshan","Madushanka");
displayName("Shankar","Madushanka");
