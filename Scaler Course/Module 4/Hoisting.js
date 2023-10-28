//Hoisting

//functions can't be called before the function code

//example

//Type1 - calling the function after the function code
var add = function(a, b){
    console.log(a+b);
}

add(2, 3);

//Type2 - calling the function as variable before the function code
add(2, 3);

greet()

var b = 'Hi';

function greet(){
    console.log('Hello!');
}

var add = function(a, b){
    console.log(a+b);
}

//Type3 - calling the function before the function code
greet()

function greet(){
    console.log('Hello!');
}


//Type4 - we should not make any call before the code

console.log(a);

var a = 10;

//Type5 - if we didn't assign any vaiable infront for variable name 
//then the variable name will be act as a global variable

function hoist(){
    hoi = 10;
    let hois = 20;
}

console.log(a);
console.log(b);

