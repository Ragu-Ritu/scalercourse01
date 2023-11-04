//Callback function example

const a = (n) => {
    return n % 2 === 0;
}

let result = (a1, num) => {
    const b = a1(num);
    console.log(`The number ${num} is a even number? ${b}`);
}

result(a, 10);

