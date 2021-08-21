let d = +prompt("Введите число!")
 
let t = +prompt("Введите степень!")

/* let e = 1;

for (let i = 1; i <= t; i++) {   
    d = d * i
}

console.log(d); */

// if (d <= t || d >= t) {
//     d = d * t ;
//     d = d * t ;
// }

// console.log(d);

let m = 1;

for(let i = 0; i <= d; i++) {
    m = d ** t
    
    console.log(m);
}

