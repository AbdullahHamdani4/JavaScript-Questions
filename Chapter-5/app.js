//Chapter 5

//Problem 1
document.writeln(`<h1>Question 1</h1>`);
let a=3;
let b=5;
let c=a+b;
document.writeln(`<p>The Sum of 3 and 5 will be ${c}</p>`);

//Problem 2
document.writeln(`<h1>Question 2</h1>`);

let aa=3;
let bb=5;
let cc=a-b;
document.writeln(`<p>The Difference of 3 and 5 will be ${cc}</p>`);

let aaa=3;
let bbb=5;
let ccc=a*b;
document.writeln(`<p>The Product of 3 and 5 will be ${ccc}</p>`);

let aaaa=3;
let bbbb=5;
let cccc=a/b;
document.writeln(`<p>The Division of 3 and 5 will be ${cccc}</p>`);

//Problem 3
document.writeln(`<h1>Question 3</h1>`);
let number;
document.writeln(`<p>Value after variable declaration is ${number}</p>`);
number=5;
document.writeln(`<p>Initial value: ${number}</p>`);
number++;
document.writeln(`<p>Value after increment is: ${number}</p>`);
number+=7;
document.writeln(`<p>Value after addition is: ${number}</p>`);
number--;
document.writeln(`<p>Value after decrement is: ${number}</p>`);
number%=3;
document.writeln(`<p>The reminder is: ${number} </p>`);

//Problem 4
document.writeln(`<h1>Question 4</h1>`);
let movie_ticket=600;
let tickets=movie_ticket * 5;
document.writeln(`<p>Total cost to buy 5 tickets to a movie is ${tickets}</p>`);

//Problem 5
document.writeln(`<h1>Question 5</h1>`);
let num=4;
document.writeln("<h3>Table of 4</h3>")
for(let i=1 ; i<=10; i++){
    document.writeln(`<p>${num} x ${i} = ${num*i}</p>`);
};

//Problem 6
document.writeln(`<h1>Question 6</h1>`);
let temperature=29;
document.writeln(`<p>${temperature}<sup>°</sup>C is ${(temperature * 9/5) + 32}<sup>°</sup>F</p>`);
let f_temperature=84.2;
document.writeln(`<p>${f_temperature}<sup>°</sup>F is ${(f_temperature - 32) * 5/9}<sup>°</sup>C</p>`);

//Problem 7
document.writeln(`<h1>Question 7</h1>`);
document.writeln(`<h3>Shopping Cart</h3>`);
let price1=700;
let price2=1200;
let quantity1=4;
let quantity2=3;
let shipping_charges=250;
let total_price=(price1 * quantity1) + (price2 * quantity2) + (shipping_charges);
document.writeln(`<p>Price of item 1 is ${price1}</p>`);
document.writeln(`<p>Quantity of item 1 is ${quantity1}</p>`);
document.writeln(`<p>Price of item 2 is ${price2}</p>`);
document.writeln(`<p>Quantity of item 2 is ${quantity2}</p>`);
document.writeln(`<p>Shipping Charges ${shipping_charges}</p>`);
document.writeln(`<p><b>Total cost of your order is ${total_price}</b></p>`);

//Problem 8
document.writeln(`<h1>Question 8</h1>`);
let total_marks=1100;
let obtained_marks=926;
let percentage=(obtained_marks / total_marks) * 100;
document.writeln(`<p>Total Marks: ${total_marks}</p>`);
document.writeln(`<p>Obtained Marks: ${obtained_marks}</p>`);
document.writeln(`<p>Percentage: ${percentage}%</p>`);

//Problem 9
document.writeln(`<h1>Question 9</h1>`);
let dollors=10;
let riyals=25;
let dollor_conversion= dollors * 104.80;
let riyal_conversion=riyals * 28;
let total_currency=dollor_conversion + riyal_conversion;
document.writeln(`<p>Total Currency in PKR: ${total_currency}</p>`);

//Problem 10
document.writeln(`<h1>Question 10</h1>`);
let numm=5;
document.writeln(`<p>The answer will be ${(numm + 5) * (10) / 2}</p>`);

//Problem 11 
document.writeln(`<h1>Question 11</h1>`);
let currentyear=2025;
let birthyear=2009;
let age=currentyear - birthyear;
document.writeln(`<p><b>Current year: </b>${currentyear}</p>`);
document.writeln(`<p><b>Birth year: </b>${birthyear}</p>`);
document.writeln(`<p><b>Your age: </b>${age}</p>`);

//Problem 12
document.writeln(`<h1>Question 12</h1>`);
let radius=20;
let pie=3.142;
let circumference= 2 * pie * radius;
let area= pie * (radius ** 2);
document.writeln(`<p><b>Radius of a circle: </b>${radius}</p>`);
document.writeln(`<p><b>The circumference of a circle is: </b>${circumference}</p>`);
document.writeln(`<p><b>The area of a circle is: </b>${area}</p>`);

//Problem 13
document.writeln(`<h1>Question 13</h1>`);
let snack="Coffee";
let current_age=16;
let maximum_age=75;
let consume_day=2;
let years_need=maximum_age - current_age;
document.writeln(`<p><b>Favourite Snack: </b>${snack}</p>`);
document.writeln(`<p><b>Current Age: </b>${current_age}</p>`);
document.writeln(`<p><b>Maximum Age: </b>${maximum_age}</p>`);
document.writeln(`<p><b>Amount of snack per day: </b>${consume_day}</p>`);
document.writeln(`<p>You will need <b>${years_need * 365 * consume_day}</b> ${snack} to last you until the ripe old age of <b>${maximum_age}<b/></p>`);









 










