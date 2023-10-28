//In javascript for in loop allows us to loop through the properties of an object
//the statement of the code will be executed only once for each properties of an object
//this loop is mainly used only for the object or array
//for in loop usd to focus on the properties

//For in loop

//Example using object
var colors = {
    primary: 'Blue',
    Secondary: 'lightblue',
    tertiary: 'white'
}

for(color in colors){
    console.log(color + '->' + colors[color]);
}

//Example using array
var colorsarray = ['white', 'blue', 'black'];

for(var colorarray in colorsarray){
    console.log(colorarray + '->' + colorsarray[colorarray]);
}

