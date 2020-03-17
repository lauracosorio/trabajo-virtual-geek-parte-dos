a = parseInt(prompt("Ingrese un número: "));
b = parseInt(prompt("Ingrese otro número: "));

function multi (a, b) {

    const result = a * b;
    return result;
}

const multiresult = multi(a, b);

console.log(multiresult);