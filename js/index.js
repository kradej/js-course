console.log('Hello, world!');

let x = 5;
let y = 5;
let booleanTrue = true;
let z = 'abc';

if (x === y || z === 'abc') {
    console.log('1');
} else {
    console.log('3');
}

if (booleanTrue) {
    console.log('większe');
} else {
    console.log('mniejsze lub równe');
}

function add(a, b) {
    const result = a + b;

    return result;
}

let result1 = add(1,2);
console.log(result1);

function subtract(c, d) {
    const result = c - d;
    return result;
}
let result2 = subtract(8, 2);
console.log(result2);

function toSquare(a){
    return a * a;
}

let x = 5;
