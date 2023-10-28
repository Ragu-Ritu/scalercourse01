//Array in java script
//How array will look like and the syntax is

//syntax
var array = [10, 'Ragu', true, 12.54];

//How to print the array
console.log(array);

//how to print the specific index inside the array

//example
//1#
var a = array[3];
console.log(a);

//2#
console.log(array[2]);

//How to replace the specified index inside the array

array[1] = 'Ram';
console.log(array);

//How to find the length of the array

console.log('Length of a n array is: ' + array.length);

//-----------------------------------------------------------------

//Array Methods
//In-build JS array methods

//1. pop() method

var array1 = [1, 'Ragu', 2, 3];

array1.pop();

console.log('popped array: ' + array1);

//How to check the popped out value inside the array

var arr1 = array1.pop()
console.log('Popped out array is: ' + arr1);

//2. push() method

var array2 = [1, 2, 3, 4];

array2.push(5);

console.log('pushed array is: ' + array2);

//How to find the pushed value inside the array

var arr2 = array2.push(5);
console.log('pushed in array is: ' + arr2);

//3. shift() method

var array3 = ['Ragu', 'Ram'];

array3.shift();

console.log('shifted array is: ' + array3);

//How to find the shifted value inside the array

var arr3 = array3.shift();

console.log(arr3);

//4. unshift() method

var array4 = ['Ram', 'TCS'];

array4.unshift('Ragu');

console.log('unshifted array is: ' + array4);

//How to find the Unshifted value inside the array

var arr4 = array4.unshift();

console.log(arr4);


