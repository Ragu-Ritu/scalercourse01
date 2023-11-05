//4 Higher Order Functions are
//find
//findIndex
//some
//every

// 1. find
// find method will return the value when the condition satisfies

//if the condition satisfies then it will stop the execution

const transcation = [10, 100, 20, 200, 300, 400, -100, -700];

const dollaramt = transcation.find(function(n){
    return n<0;
})

console.log('Find method: ' + dollaramt);

// 2. findIndex
//findIndex method

const transcation1 = [10, 100, 20, 200, 300, 400, -100, -700];

let dollaramt1 = transcation1.findIndex(function(n){
    return n<0;
})

console.log('Find index method: ' + dollaramt1);

//3. some
// some method

//it is a condition check method like to get true or false based on the condition
//it will return true even if one condition satisfies

//example 1
const transcation2 = [10, 100, 20, 200, 300, 400, -100, 700];

let dollaramt2 = transcation2.some(function(n){
    return n<0;
})

console.log('some method example 1: ' + dollaramt2);

//example 2
const transcation3 = [10, 100, 20, 200, 300, 400, 100, 700];

let dollaramt3 = transcation3.some(function(n){
    return n<0;
})

console.log('some method example 2: ' + dollaramt3);

//3. every
// every method

//it is a condition check method like to get true or false based on the condition
//it will return false even if one condition dosen't matches

//example 1
const transcation4 = [10, 100, 20, 200, 300, 400, 100, 700];

let dollaramt4 = transcation4.every(function(n){
    return n>0;
})

console.log('every method example 1: ' + dollaramt4);

//example 2
const transcation5 = [10, 100, 20, 200, 300, 400, 100, 700];

let dollaramt5 = transcation5.every(function(n){
    return n<0;
})

console.log('every method example 2: ' + dollaramt5);

