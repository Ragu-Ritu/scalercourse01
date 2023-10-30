//Im pure function
//impure function should need to be different from input value

var a =  10; //external factor should not be included in the pure function

function impure(x){
    console.log(a+x);
}

impure(5);


//Half Pure function
//Half pure function should need to return the same value as input value

function halfpure(b, c){
    console.log(b+c); //it's an external resource (if it is a function then console.log should need to be present outside)
}

halfpure(2, 2);
halfpure(2, 2);
halfpure(2, 2);

//Pure function
//pure function should need to return the same value as input value

function purefun(d, e){
    return d+e;
}

const f = purefun(2, 3);
console.log(f);
