// Reduce method

// How to print the sum of a array

//Imperative way of code

let a = [1, 2, 3, 4, 5];

let b = 1;

for(let i = 0; i<a.length; i++){
    b = b+a[i];
}

console.log(b);

// Declerative way of writing the code

// using reduce and normal function method

let a1 = [1, 2, 3, 4, 5];

let result = a1.reduce(function(accumulator, value){
    let sum1 = accumulator+value;
    return sum1;
} , 0)

console.log('The sum of an array using the normal function method is: ' + sum1);