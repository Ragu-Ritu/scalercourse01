console.log('Differnt types of variable');

//variables

let a = 10;  //act as a local scope
let b = "hello";
let c = 'hello';

//example for local scope
//1#

let example1 = 'let: Thanks!';

function localscope(){
    console.log(example1);
}

localscope();

//2#

if(true)
{
    let greet = 'let: Thanks!';
    console.log(greet);  //we can use the console.log inside the curly bracket 
}
//console.log(greet); -- outside the curly bracket is not possible

//-------------------------------------------------------------------

var d = 10;  //act as a global scope
var e = "hello";
var f = 'hello';

//example for the global scope

if(true)
{
    var greet = 'var: love you!';
    console.log(greet);  //we can use the console.log inside the curly bracket 
}
console.log(greet);  //Wecan use the same console.log outside the curly bracket

//----------------------------------------------------------------------

const g = 10;  //Value can't be re-decleared
const h ="hello";
const i = 'hello';

//example for the const
//1#

if(true)
{
    const weekdays = 7;
    console.log('const: ' + weekdays);
    // weekdays = 8; -- We can't re-declear the variable
}

//2#

const student = {'fname':'Ragu', 'age': 25};
console.log(student);  //We can able to print the whole data present inside the varaible
console.log(student.fname);  //We can able to print the required data present inside the variable
student.fname = 'Ram';
console.log(student);
console.log(student.fname);


//if we need to redeclear the normal variable its not possible
//if we assigned the value as a object we can able to change the value

//----------------------------------------------------------------------------------



