
let d = ['ABC',12,3.4,true,[1,2,3]];
console.log(d)
console.log(d[4])
console.log(d[4][0])
console.log(d.indexOf("ABC"))
// console.log(d.reverse())

let a = "TDM SHANKA".split(" ");
console.log(a);
console.log(d.concat(a))

d[1] = "XYZ";
console.log(d);

d.unshift('CCC');
console.log(d);

d.push(false);
console.log(d);

d.shift();
console.log(d);
console.log(d.shift());
console.log(d.pop());

