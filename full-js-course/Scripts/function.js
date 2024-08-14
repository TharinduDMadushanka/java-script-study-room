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

function a(age,clz=12){
    let name = prompt("Enter your name ?");
    console.log(`Your name is ${name} and age is ${age} and clz is ${clz}`);

    // return (age + name);
}

a(27)

let displayName2 = function(age,clz=12){
    let name = prompt("Enter your name ?");
    console.log(`Your name is ${name} and age is ${age} and clz is ${clz}`);

}
console.log(displayName2(21));


// Arrow functions

/*

() => {

 }

*/

// let displayName3 = (age,clz=12) => {
//     let name = prompt("Enter your name ?");
//     console.log(`Your name is ${name} and age is ${age} and clz is ${clz}`);

// }
// console.log(displayName2(111));


// arrow function with only one parameter

// let newFun = name => {
//     console.log(name);
// }

// newFun("tdm");

//==========================================================

let newFun = name => console.log(name);

newFun("tdm");


let newFun2 = name => `Name is ${name}`;

console.log(newFun2("aaaa"));