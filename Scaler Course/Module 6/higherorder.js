//Higher order function

// Map function will loop through every element and will perform the specific action that we provided

// Map method will return always us a new array with our result. 

// Map method will return the output value as a array format

//map method example

const arr = [1, 2, 3, 4, 5];

const squaredarray = arr.map(function(n){
    return n*n;
})

console.log(squaredarray);

//foreach method example

//forEach method will won't return the output format value as array

//forEach will reurn the value in the number format

const transcation2 = [10, 100, 20, 200, 300, 400, -100, -700];

const inrtodollar2 = 80;

const dollaramt2 = transcation2.forEach((amount) => { 
    console.log(amount/inrtodollar2 + '$') 
})

//console.log(dollaramt2);  --  forEach method will work only inside the scope


//practice question

// using the map function

const transcation = [10, 100, 20, 200, 300, 400, -100, -700];

const inrtodollar = 80;

const dollaramt = transcation.map(function(n){
    return n/inrtodollar + '$';
})

console.log(dollaramt);

//using the map and arrow function

const transcation1 = [10, 100, 20, 200, 300, 400, -100, -700];

const inrtodollar1 = 80;

const dollaramt1 = transcation1.map((amount) => {
    return (amount/inrtodollar1 + '$')
})

console.log(dollaramt1);


