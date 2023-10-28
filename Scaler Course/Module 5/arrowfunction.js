//arrow function

//example 1

let a = () => {
    console.log(1);
}

let b = (a1) => {
    console.log(a1);
}

let c = (a, b) => {
    console.log(a+b);
}

a();
b(2);
c(1, 2);

//Tyep 1

let d = a2 => {
    console.log(a2);
}

d(4);

//Type 2
//this type also will be acceptable
let e = a3 => {
    console.log(a3);
}

e(5);

//Type 3
//we can use the arrow function without the curly brackets
let f = a4 => console.log(a4);

f(6);


//Type 4
//with curved bracket without curly bracket we can use
let g = (a5) => console.log(a5);

g(7);

