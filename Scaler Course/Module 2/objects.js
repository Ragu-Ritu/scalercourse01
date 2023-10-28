//what are the object 
//initializing the abject
//playing around the object

//How to creae the object

var student = {fname: 'Ragu', lname: 'Ram', score: 'Pass', eligible: true};

console.log(student);

//How to print seperate key value

console.log(student.fname);

//How to change the object key value

student.score = 'Fail';

console.log(student);

//How to access the seperate key inside the object
//Has different types

//1. dot notation

console.log('using dot notation method: ' + student.fname);

//2. bracket notation method

console.log('using bracket notation method: ' + student['lname']);

//we can create multiple object inside the object and array as well

var car = {
    carName: 'Maruthi',
    Model: 'Baleno',
    Year: 2016,
    QualityCheck: 'pass',
    moreModels: ['Swift', 'Dezire', 'omni', 'Alto'],
    showroomAddress: {
        city: {
            name: 'Dharapuram',
            Pincode: 638106,
        }
    }
}

//We can able to print the whole object
console.log(car);

//We can able to print the array alone inside the object
console.log(car.moreModels[1]);

//we can able to to print the object inside the object key value
console.log(car.showroomAddress.city.name);

//we can able to update the data inside the object
car.QualityCheck = false;
console.log(car);

//we can able to remove the last index inside the array
car.moreModels.pop()
console.log(car);

//we can able to add one more key inside the object
car.modelqualitycheck = {
    Swift: 'pass',
    Dezire: 'pass',
    omni: 'pass',
    Alto: 'pass'
}
console.log(car);

//We can able to delete the proprty present inside the object
delete car.modelqualitycheck;
console.log(car);



