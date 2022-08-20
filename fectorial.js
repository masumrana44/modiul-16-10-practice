// let sum = 1;
// for (let i = 1; i <= 10; i++){
//     sum = sum * i;
//     console.log(i,sum);

// }

// function multipicationOfNumbers(number) {
//     let multi =1;
//     for (let i = 1; i <=number; i++){
//         multi = multi * i;
//         console.log(i, multi)
//     }
//     return multi;
// }

// const result = multipicationOfNumbers(7);
// console.log(result);



function fectorial(number) {
    let multi = 1;
    for (let i = 1; i <= number; i++) {
        multi = multi * i;
        console.log( multi, i);
        

    }
    return multi;
}

const result = fectorial(10);
console.log(result);