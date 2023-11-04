// find method will return the value when the condition satisfies

//if the condition satisfies then it will stop the execution

const transcation = [10, 100, 20, 200, 300, 400, -100, -700];

const dollaramt = transcation.find(function(n){
    return n<0;
})

console.log(dollaramt);

//findIndex method

const transcation1 = [10, 100, 20, 200, 300, 400, -100, -700];

const dollaramt1 = transcation1.findIndex(function(n){
    return n<0;
})

console.log(dollaramt1);