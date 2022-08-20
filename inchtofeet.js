// const myHeightInchi = 144;
// const myHeightFeet = myHeightInchi / 12;
// console.log('my height with feet', myHeightFeet);


// const dataheightinichi = 60;
// const dadaHeightFeet = dataheightinichi / 12;
// console.log(dadaHeightFeet);


// function inchToFeet(inches) {
//     const feet = inches / 12;
//     return feet;
// }

// const dataInches = 144;
// const dadaFeet = inchToFeet(dataInches);
// console.log(dadaFeet);

// const myInche = 65;
// const myFeet = inchToFeet(myInche);
// console.log(myFeet);



function feettoinche(feets) {
    const inche = 12 * feets;
    return inche;
}

const myFeet = 5.4;
const myInche=feettoinche(myFeet)
console.log('My Heigt', myInche);