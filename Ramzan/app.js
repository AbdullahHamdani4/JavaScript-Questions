//Dayz Calculator
let todayDate = new Date();
let upcomingRamzan = new Date("Feb 17,2026");
let numberOfDays = Math.round((upcomingRamzan.getTime() - todayDate.getTime()) / 1000 / 60 / 60 / 24);
console.log(`${numberOfDays} are left in Ramadan 2026`);
let numberOfWeeks = numberOfDays / 7;
console.log("Exact Weeks", numberOfWeeks.toFixed(2));
console.log("Approx Weeks", Math.round(numberOfWeeks));
// let numberOfMonths = numberOfWeeks / 4 ;
// console.log(numberOfMonths);