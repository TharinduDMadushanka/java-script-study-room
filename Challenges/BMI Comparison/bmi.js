
var mass,height, bmiOne,bmiTwo,isOne;

//BMI ONE
mass=prompt("Enter mass one:");
height=prompt("Enter height one:");
bmiOne=mass/(height*height);
console.log(bmiOne);

//BMI TWO

mass=prompt("Enter mass two:");
height=prompt("Enter height two:");
bmiTwo=mass/(height*height);
console.log(bmiTwo);

//BOOLEAN PART

isOne=(bmiOne>bmiTwo);
alert(isOne);
