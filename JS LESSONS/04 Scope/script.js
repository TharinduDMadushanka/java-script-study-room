let global ="This is global scope";

test(); // in js this is ok 

function test(){ // function scope

let local ="Change";

    console.log(global);
    console.log(local);
}
test();
console.log(global);
// console.log(local);


{ // block scope 
    let myName="Saman";
    var name ="Saman";
    console.log(myName);
}

//console.log(myName);
console.log(name);