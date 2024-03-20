var score1,score2,score3,aveSl,aveEng;

//Sl average
score1=parseInt(prompt("1st score of team Sl:"));
score2=parseInt(prompt("2nd score of team Sl:"));
score3=parseInt(prompt("3rd score of team Sl:"));

aveSl=(score1=score2+score3)/3;
console.log("Sl "+aveSl);

//Eng average

score1=parseInt(prompt("1st score of team Eng:"));
score2=parseInt(prompt("2nd score of team Eng:"));
score3=parseInt(prompt("3rd score of team Eng:"));

aveEng=(score1=score2+score3)/3;
console.log("Eng "+aveEng);

//find the winner

if(aveSl>aveEng){
    alert("Win team is SL.Average = "+aveSl);
    console.log("Win team is SL.Average = "+aveSl);
}else if(aveSl<aveEng){
    alert("Win team is Eng.Average = "+aveEng);
    console.log("Win team is Eng.Average = "+aveEng);
}else{
    alert("Match drawn!");
    console.log("Match Drwan!");
}