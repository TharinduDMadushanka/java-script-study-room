let a = {
    name:"Tharindu",
    age:22,
    canFly:true,
    
    languages:['Java','JavaScript','c++'],
    
    city:{
        addres1:'Galle',
        addres2:'Matara'
    }
};

console.log(a);

console.log(a.languages);
console.log(a.languages[2]);
console.log(a.city.addres1);
console.log(a['age']);

a.class = "JS Full Course"
console.log(a);