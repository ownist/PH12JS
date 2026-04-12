let a = 5;
let b = 10;

let c = a;
a = b;
b = c;

console.log(a, b);

// using like array destructuring method actually eitar sothik name ta amr mone nay
let s = 12;
let m = 30;

[s, m] = [m, s];

console.log(`s: ${s}, m: ${m}`);
