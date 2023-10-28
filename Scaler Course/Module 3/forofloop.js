//For of loop will be mainly focused on the property key values
//For of loop will be used only for arrays and strings

//For of loop

//Array example - by string

//Printing the values without the index
var colors = ['white', 'blue', 'red'];
colors.push('green');

for(var color of colors){
    console.log(color);
}

//Printing the values with the index
var cars = ['maruthi', 'benz'];

for(var [index, car] of cars.entries()){
    console.log(index + '->' + car);
}

//Array example - by numbers

//Printing the values without the index
var colors = [1, 2, 3, 4];

for(var color of colors){
    console.log(color);
}

//Printing the values with the index
var cars = [5, 6, 7, 8, 9];

for(var [index, car] of cars.entries()){
    console.log(index + '->' + car);
}

//String example
var a = 'Raguram';

for(var b of a){
    console.log(b);
}
