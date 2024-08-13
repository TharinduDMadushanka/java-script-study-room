// String
// let a = 'Tharindu';

// // Integer 
// let b = 23;

// // Boolean
// let c = false;

// // Big Int 
// let d = 234n;

// // undefined
// let e;

// // Null 
// let f = null;

// console.log(typeof (a))
// console.log(typeof (b))
// console.log(typeof (c))
// console.log(typeof (d))
// console.log(typeof (e))
// console.log(typeof (f))

// ===================== Type Conversion ===========================

// String Conversion

// b = String (b);
// console.log(b + " is now " + typeof (b))

// c = String(c);
// console.log(c + " is now " + typeof (c))

// d = String(d);
// console.log(d + " is now " + typeof (d))

// e = String(e);
// console.log(e + " is now " + typeof (e))

// f = String(f);
// console.log(f + " is now " + typeof (f))


// Number Conversion

// console.log(Number (a))
// console.log(Number (b))
// console.log(Number (c))
// console.log(Number (d))
// console.log(Number (e))
// console.log(Number (f))

// * we can also use parseInt
// console.log(parseInt (a))

// let g = '121bgsg';
// console.log(Number (g)); //NaN
// console.log(parseInt (g)); // 121

// ===================== UNARY ===========================

// let a = +2;
// console.log(a);

// ===================== BINArY ===========================

// let a =3 +2;
// console.log(a);


// ===================== Back Tick (`) ===========================

// let a = `Tharindu Madushanka`;
// console.log(a)

// let age = 22;

// console.log("Your name is "+ a + " and age is "+ age);

// console.log(`Your name is ${a} and age is ${age}`)

// ===================== var , let & const ===========================

var yname = "TDM SHANKAR";
console.log(yname);

var yname = "TDM SHANKAR"; //ok
console.log(yname);

// let yname = "TDM SHANKAR"; //error
// console.log(yname);

// const name = "TDM SHANKAR";
// console.log(yname);

// const name = "TDM SHANKAR";
// console.log(yname);

// let a,b,c =20;
// a=b=c =20;
// console.log(a,b,c)

let a = "TDM SHANKAR";
console.log(a[1])
console.log(a.substring(1,6))
console.log(a.split(' '))
console.log(a.split('H'))
console.log(a.lastIndexOf('A'))
console.log(a.charAt(5))
console.log(a.endsWith(9))
console.log(a.endsWith('AR'))
console.log(a.replace('TDM','MADU'))

let z = "Tharindu Madushanka";
console.log(z.length);