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

// loopings

let b = [12,'Tharindu',3.5,true,'tdm','hello']

for(let i=0; i<b.length;i++){
    console.log(b[i]);
}

//for - each loop

b.forEach((el) =>{
    console.log(el);
})

// for get index

b.forEach((el,index) =>{
    console.log(el,index);
})

// for get arra again also

b.forEach((el,index,arr) =>{
    console.log(el,index,arr);
})

b.map((el)=>{
    return [el]
})

console.log(b.map((el)=>{
    return [el]
}));

let result = b.map((el)=>{
    return [el]
})

console.log(result)
console.log(result[0][1])