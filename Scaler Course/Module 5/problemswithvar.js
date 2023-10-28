//security conflict with var keyword

//we should not create a variable with same name

//example 1 - redecleration issue with same name of two variable
var a = 10;

var a = 20;

console.log('Result: ' + a);

//example 2 - scoping issue

//var keyword will be act as a global variable 
//The think is like we can declear the variable inside the scope and outside the scope
//we should not allow any variable outside the block

//variables decleared with var keyword are not blocked scope they are function scope
//Blocked scope issue
var a = 10;

if(a===10){
    var b = 20;
    console.log(b);
}

console.log(b);

//var keyword will correctly work on the function scope
function test(){
    var test1 = 100;
    console.log(b);
}

test()

console.log(test1);
