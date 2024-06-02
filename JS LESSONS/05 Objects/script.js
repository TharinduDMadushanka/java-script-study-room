let student ={
    name : "Saman",
    age : 18,  //peperties

    sayHi : function(){ // methods
        console.log("Say hii");
    },

    info : function(){
        console.log("My name is "+this.name);
    }
}

student.sayHi();

console.log(student.name);
console.log(student.age);

student.age = 20;
console.log(student.age);

student.sayHello=function(){
    console.log("Hello");
}
student.sayHello();

student.address="Galle";
console.log(student.address);

console.log(student);

console.error(student);

let student2={
    name:"Kumar"
}

// delete properties

console.log(student.age);
delete student.age;
console.log(student.age);

student.info();

// common object methods
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

Object.assign(student2,student)
console.log(student2);
