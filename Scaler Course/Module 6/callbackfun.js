//callback function

//example 1
function fname(firstname, cb){
    console.log(firstname);
    cb('RAM');
}

fname('RAGU', lname); //here lname is a function but it is passed as an argument.

function lname(lastname){
    console.log(lastname);
}

//example 2
const isEven = (n) => {
    return n % 2 === 0;
}

let result = (evenFn, num) => {
    const isNumEven = evenFn(num);

    console.log(`The number ${num} is a even number? ${isNumEven}`);
}

result(isEven, 15);