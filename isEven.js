function verifyEven(number) {
    const remainder = number % 2;
    if (remainder == 0) {
        return true;
    }

    else {
        return false;
    }
}


const mynumber = verifyEven(273);
console.log(mynumber);

const mynumber1= verifyEven(222);
console.log(mynumber1);




