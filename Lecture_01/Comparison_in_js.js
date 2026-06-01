console.log(10 > 5); // => true
console.log(10 < 5); // => false
console.log(10 >= 5); // => true
console.log(10 <= 5); // => false
console.log(10 == 5); // => false
console.log(10 != 5); // => true

let a = 10;
let b = "10";
console.log(a == b); // => true (loose equality)
console.log(a === b); // => false (strict equality)

let c = null;
let d = undefined;
console.log(c == d); // => true (loose equality)
console.log(c === d); // => false (strict equality)

let e = 0;
let f = false;
console.log(e == f); // => true (loose equality)
console.log(e === f); // => false (strict equality)

let g = "";
let h = false;
console.log(g == h); // => true (loose equality)
console.log(g === h); // => false (strict equality)

let i = "0";    
let j = false;
console.log(i == j); // => true (loose equality)
console.log(i === j); // => false (strict equality)


// === checks for both value and type equality, while == checks for value equality with type coercion. 
// It's generally recommended to use === to avoid unexpected results due to type coercion.


// In JavaScript, the following values are considered falsy:
// false
// 0 (zero)
// -0 (negative zero)
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN (Not a Number)

// All other values are considered truthy, including:
// true
// "0"
// " "
// []
// {}

// == checks for value equality with type coercion, while === checks for both value and type equality.
// It's generally recommended to use === to avoid unexpected results due to type coercion.

