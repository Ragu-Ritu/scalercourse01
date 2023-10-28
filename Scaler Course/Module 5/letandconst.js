//var keyword has redecleration problem

var a = 10;
var a = 20;

console.log(a);

//To overcome in this redecleration problem we can use let keyword

let c = 10;
//If we try to give the same variable name our IDE will show an error
//We can reassign the variable
c = 20;

//If we try to print the variable it will throw an error like 'c' has already been declared
console.log(c);

//var keyword is not blocked scope it is a function scope
//To overcoem in thjis situation we can use let keyword

//let keyword is a blocked scope

function test(){
    let b = 100;
    console.log(b);
}

test();

//if we try to print the variable inside the scope it will throw an error like 'b' is not defined
console.log(b);

//const keyword
//const keyword will won't allow re-assigning
//const keyword will won't allow re-declearing

//example 1
const d = 40;
//re-declearing won't be allowed
//if we try to re-declear the variable it will throw an error like 'd' has already been declared
//const d = 50;
//re-assigning the value 
//if we try to assign the different value to const keyword it will throw an erro like Assignment to constant variable.
d = 50;

console.log(d);

//but we can change the object propert value which in assigned in const keyword
const student = {fname: 'Ragu', age: 25};
console.log(student);
student.fname = 'Ram';
console.log(student);

