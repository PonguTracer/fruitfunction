"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// function logger() {
//     console.log('My name is Louis! 😋');
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3))
// const appleJuice = fruitProc;essor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);



// Function declaration
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }

// const age1 = calcAge1(1987);
// console.log(age1);

// Function expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// Arrow function
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1987);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1987, 'Louis'));
// console.log(yearsUntilRetirement(1991, 'Sarah'));






