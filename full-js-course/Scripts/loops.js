let marks = [];

for(let i=0; i<5; i++){
    marks.push(prompt(`Enter ${i+1} Student marks: `));
} 

console.log(marks);

for(let i =0;i<5;i++){
    if(marks[i] >= 50){
        console.log(`Student ${i+1} is Pass.!`)
        
    }else{
        console.log(`Student ${i+1} is Fail.!`)
    }
}

//=======================================================

let a= 0;

while(a<5){

    if(marks[a] >= 50){
        console.log(`Student ${a+1} is Pass.!`)
        
    }else{
        console.log(`Student ${a+1} is Fail.!`)
    }
    a++;
}