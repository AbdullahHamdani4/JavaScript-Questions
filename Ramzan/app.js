//Dayz Calculator
let input = document.querySelector("input");
let days = document.querySelector(".day-count");
let weeks = document.querySelector(".week-count");
let months = document.querySelector(".month-count");
let button=document.querySelector("button");
function calcdays() {
    let todayDate = new Date();
    let upcomingRamzan = new Date(input.value);
    let numberOfDays = Math.round((upcomingRamzan.getTime() - todayDate.getTime()) / 1000 / 60 / 60 / 24);
    // console.log(`${numberOfDays} are left in Ramadan 2026`);
    days.textContent=numberOfDays
    let numberOfWeeks = numberOfDays / 7;
    // console.log("Exact Weeks", numberOfWeeks.toFixed(2));
    // console.log("Approx Weeks", Math.round(numberOfWeeks));
    weeks.textContent=Math.round(numberOfWeeks)
    let numberOfMonths = numberOfDays / 30;
    // console.log("Exact Months", numberOfMonths.toFixed(2));
    // console.log("Approx Months", Math.round(numberOfMonths));
    months.textContent=Math.round(numberOfMonths)
}
button.addEventListener("click",()=>{
    if (input.value == "") {
        alert("Enter a Valid Date")
    } else {
        calcdays()
    }
})
