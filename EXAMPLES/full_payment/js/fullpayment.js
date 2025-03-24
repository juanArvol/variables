/*
name excercise:avarage
description: the avarage of the three grades made with js
autor: unArvol
date: march 15th of 2025
*/

let valueOfTheDay=50;
let daysWorked=27;
let salary;
let pension;
let health;
let arl;
let discounts;
let netSalary

salary=valueOfTheDay*daysWorked;
health=salary*0.12;
pension=salary*0.16;
arl=salary*0.052;
discounts=health+pension+arl;
netSalary=salary-discounts;

console.log("health is: "+health);
console.log("pension is: "+pension);
console.log("the arl is: "+arl);
console.log("the total discount is: "+discounts);
console.log("net salary is: "+netSalary);