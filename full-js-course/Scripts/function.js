function displayName(){
    console.log("TDM");
}

displayName();
displayName();
displayName();

function sum(name, age){
    // console.log(name,age);
    console.log(`Your name is ${name} and age is ${age}`);

    return age;

}

console.log(sum());
console.log(sum('tdm',23));
console.log(sum('shanka',43));

function a(age){
    let name = prompt("Enter your name ?");
    console.log(`Your name is ${name} and age is ${age}`);

    // return (age + name);
}

a(13);