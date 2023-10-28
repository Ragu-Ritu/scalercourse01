// loops are the statements to control the flow of program and to print the repetative of the same value for nth time

//For Loop

//example1

for(i=1; i<=10; i++)  //Type - 1
//for(i=1; i<=10; i=i+1)  //Type - 2
{
    console.log('Number: ' + i);
}

//example2

var a = 'Hello world';

for(var i = 0; i<=10; i++){
    console.log(a);
}

//example3

//How to square the array using the for loop statement

var array = [2, 3, 4, 5, 6, 7, 8];

var squaredarry = [];

for(var i = 0; i<array.length; i++){
    squaredarry.push(array[i] * array[i]);
}

console.log(squaredarry);