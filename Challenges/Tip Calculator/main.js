var tips = new Array();
var amount = new Array();

function tipCalculator(){
    var tip;
    var bill;
    if(bill<1000){
        tip=bill*(20/100);
    }else if(bill>=1000 && bill<1500) {
        tip = bill*(15/100);     
    }else{
        tip=bill*(10/100);
    }

    //store in arrays
    tips.push(tip);
    amount.push(bill+tip);

    return tip;
}

console.log("Tip 1: "+ tipCalculator(1350));
console.log("Tip 2: "+ tipCalculator(2000));
console.log("Tip 3: "+ tipCalculator(950));