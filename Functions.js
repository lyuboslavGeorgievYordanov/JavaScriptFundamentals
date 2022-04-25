"use strict";

// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1987); // need to store the returned value

// Function expression - returns a value
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1987);

//Arrow function - returns a value
const calcAge3 = (birthYear) => 2022 - birthYear;

const age3 = calcAge3(1987);

console.log(age1, age2, age3);
