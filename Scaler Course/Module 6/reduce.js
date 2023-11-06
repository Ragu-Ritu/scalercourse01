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

const transcation5 = [1, 2, 3, 4];

let result = transcation5.reduce(function(n, q){
    let sumResult1 = n+q;
    return sumResult1;
} , 0)

console.log('reduce method using normal function example 2: ' + result);

// using reduce and arrow function method

const transcation6 = [1, 2, 3, 4, 5, 6];

let result1 = transcation6.reduce((n, q) => {
    return (n+q);
})

console.log('reduce method using arrow function example 3: ' + result1);