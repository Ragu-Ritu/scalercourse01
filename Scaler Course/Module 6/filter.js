// Filter method

//Filter return a new array it will return all those elements that matches the specific condition
//if the condition is true it will return the element for the condition and if the condition is false it will discard the elemnet

//writing the filter method in the imperatively written code

let number = [1, 23, 44, 55, 76, 8, 2, 45, 78, 90];

let evenNumber = [];

let oddNumber = [];

for(let i = 0; i<number.length; i++){
    if(number[i]%2 === 0){
        evenNumber.push(number[i]);
    }else if(number[i]%2 != 0){
        oddNumber.push(number[i]);
    }
}

console.log('The even numbered array is: ' + evenNumber);
console.log('The odd numbered array is: ' + oddNumber);


//writing the filter method using function method in the decleratively written code

let number1 = [1, 23, 44, 55, 76, 8, 2, 45, 78, 90];

let evenNumber1 = number1.filter(function(n){
    return n%2 == 0;
})
let oddNumber1 = number1.filter(function(n){
    return n%2 != 0;
})

console.log('The even numbered array using function method example 1 is: ' + evenNumber1);
console.log('The odd numbered array using function method example 1 is: ' + oddNumber1);

//writing the filter method using arrow function method in the decleratively written code

let number2 = [1, 23, 44, 55, 76, 8, 2, 45, 78, 90];

let evenNumber2 = number2.filter((evenNum) => {
    return(evenNum%2 == 0);
})
let oddNumber2 = number2.filter((oddNum) => {
    return(oddNum%2 == 0);
})

console.log('The even numbered array using arrow function method example 1 is: ' + evenNumber2);
console.log('The odd numbered array using arrow function method example 1 is: ' + oddNumber2);

//practice question
//find all the positive numbers inside the provided array using normal function method

const transcation = [10, 100, 20, 200, 300, 400, -100, -700];

const positiveNUm = transcation.filter(function(n){
    return n>0;
})

console.log('The positive number inside the array using function method example 2 is: ' + positiveNUm);

//find all the positive numbers inside the provided array using arrow function method

const transcation1 = [10, 100, 20, 200, 300, 400, -100, -700];

const positiveNUm1= transcation.filter((amount) => {
    return amount>0;
})
console.log('The positive number inside the array using arrow function method example 2 is: ' + positiveNUm1);






