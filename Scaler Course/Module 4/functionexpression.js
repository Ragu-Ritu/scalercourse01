//Function expression in Java script
//If the function dosent have a name then it will be called as a anonymous function

//Type - 1
var a = function (a, b){
    console.log(a+b);
}

a(2, 3);

//Type - 2
var a = function (a, b){
    return a+b;
}

var c = a(2, 3);

//Type - 3
var a = function (a, b){
    return a+b;
}

var result = a(2, 3); 
console.log('Result: ' + result);
