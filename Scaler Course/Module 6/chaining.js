// Chaining Method

let student = [
    {name: 'A', age: 1, gender: 'M'},
    {name: 'B', age: 2, gender: 'F'},
    {name: 'C', age: 3, gender: 'M'},
    {name: 'D', age: 4, gender: 'F'},
    {name: 'E', age: 5, gender: 'M'},
    {name: 'F', age: 6, gender: 'F'},
    {name: 'G', age: 7, gender: 'M'},
    {name: 'H', age: 8, gender: 'M'},
    {name: 'I', age: 9, gender: 'F'}
]

//Method 1 (or) Example 1

let males = student.filter(function(n){
    return n.gender === 'M';
})

let malesAge = males.map(function(m){
    return m.age;
})

console.log(males);
console.log(malesAge);

//Method 2 (or) Example 2
//this known as chaining method

let malesAge1 = student.filter(function(n){
    return n.gender === 'M';
}).map(function(m){
    return m.age;
})

console.log(malesAge1);

//Practice question
//From the transcation array filter out the negative element and add all the transcation

const transcation = [10, 100, 20, 200, 300, 400, -100, -700];

const sumofpositivenum = transcation.filter(function(a){
    return a>0;
}).reduce(function(b, c){
    let addition = b+c;
    return addition;
}, 0);

console.log(sumofpositivenum);