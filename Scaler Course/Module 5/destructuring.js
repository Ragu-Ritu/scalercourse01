//The destructuring assignment is a syntax in javascript expression used to unpack the values 
//It is used to unpack the array or object values as a distinct values

//destructing array

//normal way
let a = ['Hello', 'I', 'am', 'learing', 'js']

let b = a[0];
let c = a[4];

console.log(b);
console.log(c);

//deestructuring array way
//example by using the number
let model = [2020, 2021, 2022, 2023, 2024];
let [d, e, f, g, h] = model;

console.log(d);

//deestructuring array way
//example by using the string
let student = ['Ragu', 'Ram', 'Sathish', 'Siva', 'Hari'];
let [i, j, k, l, m] = student;

console.log(m);

//destructuring object

//Type 1
var car = {
    brand: 'Nissan',
    Model: 'SUNNY'
}

var {brand, Model} = car;

console.log(Model);

//Type 2
var car1 = {
    brand1: 'Nissann',
    Model1: 'SUNNYY'
}

var {brand1: p, Model1: n} = car1;

console.log(n);

//Type 3
//destructuring a multiple object
var car1 = {
    brand1: 'Nissann',
    Model1: 'SUNNYY',
    native: {
        city: 'Dharapuram',
        state: 'Tamilnadu'
    }
}

var {brand1: p, Model1: n, native: q, native: {city: r, state: s} } = car1;

console.log(n);
console.log(q);
console.log(r);


