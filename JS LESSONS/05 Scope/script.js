let global ="This is global scope";

function test(){
let local ="Change";

    console.log(global);
    console.log(local);
}
test();
console.log(global);
// console.log(local);
