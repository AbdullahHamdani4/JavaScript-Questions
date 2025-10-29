//Atm Machine


alert("Welcome to Bank Alfalah Atm Machine");

let pincode = "1234";
let userpin = "1234";

let salaryagai;
let kitnesalary;
let withdraw;
if (userpin == pincode) {

    salaryagai = prompt("Salary agai (Please asnwer with yes or no)");
    salaryagai = salaryagai.toLowerCase();
    //Nested 1
    if (salaryagai == "no") {
        console.log("Salary aye hi nhi hai kya nikalega");
    } else if (salaryagai == "yes") {
        kitnesalary = prompt("Kitne salary hai?");
        //Nested 2
        if (kitnesalary < 999) {
            console.log("You cannot withdraw as your salary is less than the required amount for withdrawl");
        } else if (kitnesalary > 999) {
            withdraw = prompt("How much you want?");
            //Nested 3
            if (withdraw > kitnesalary) {
                console.log("Impossible Amount");
            }
            else if (withdraw) {
                console.log(`You succesfully withdrawed ${withdraw}Rs and the remaining amount in the bank is ${kitnesalary - withdraw}`);
            } else console.log("Enter withdraw amount");
        }   
    }

} else console.log("Pin code incorrect");


