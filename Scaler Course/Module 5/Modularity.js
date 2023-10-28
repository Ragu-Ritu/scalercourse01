//Modularity

//Modularity mean: This is kind of a whole application

const calculator = require('./modules');

calculator.addition(0, 1);
calculator.subraction(3, 1);
calculator.multiple(1, 3);
calculator.division(8, 2);

const obj = { foo: 1 }
obj.bar = 2
console.log(obj);

console.log(typeof (new (class { class () {} })))