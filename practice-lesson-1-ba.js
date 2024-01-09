/*
  File: practice-lesson-1-ba.js
  Author: Brenda Armstrong
  Created: January 8, 2024
  Description: This file contains JavaScript code for Programming Concepts with JavaScript, Lesson 1.
*/

let label = "keyincollege";
let tld = "ca";
let domainName = label + "." + tld;
console.log(domainName);

let isKeyin = (domainName === "keyincollege.ca");
console.log(isKeyin);

let isNotKeyin = !isKeyin;
console.log(isNotKeyin);

let byte1 = 100;
let byte2 = 150;
let byte3 = 200;
let byte4 = 250;
console.log(byte1,byte2,byte3,byte4);

let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;
console.log(ipAddress);

const number = 15;
for (let i = 1; i <= 10; i++) {
  const result = i * number;
  console.log(`${number} X ${i} = ${result}`);
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

  let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("The sum of all even numbers is: " + sum);

let numberTest = 28;
let sum2 = 0;
for (let i = 1; i <= Math.round(numberTest/2); i++) {
    if (numberTest % i === 0) {sum2 += i;}
}
if (sum2 === numberTest) {
    console.log(`${numberTest} is perfect`);
}
else {
    console.log(`${numberTest} is not perfect`);
}

let numberTest2 = 11;
let sum3 = 0;
for (let i = 2; i <= Math.round(numberTest2/2); i++) {
    if (numberTest2 % i === 0) {sum3 += i;}
}
if (sum3 === 0) {
    console.log(`${numberTest2} is prime`);
}
else {
    console.log(`${numberTest2} is not prime`);
}





