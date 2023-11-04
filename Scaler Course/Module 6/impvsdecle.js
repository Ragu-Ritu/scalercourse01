//Imperative way of writing the code

const a = 10;
const asquared = a*a;

if (asquared % 2 == 0){
    console.log(true);
}else{
    console.log(false);
}


// //Declerative way of writing the code

const asquared1 = (b) => (b*b % 2 === 0 ? true : false); 
console.log(asquared1(1001));