//Chapter 6-9

//Problem 1
document.writeln(`<h1>Question 1</h1>`);
let number = 10;
document.writeln(`<p>The value of ++number is:${++number}</p>`);
document.writeln(`<p>Now the value of number is: ${number} </p><hr>`);
document.writeln(`<p>The value of number++ is:${number++}</p>`);
document.writeln(`<p>Now the value of number is: ${number} </p><hr>`);
document.writeln(`<p>The value of --number is:${--number}</p>`);
document.writeln(`<p>Now the value of number is: ${number} </p><hr>`);
document.writeln(`<p>The value of number-- is:${number--}</p>`);
document.writeln(`<p>Now the value of number is: ${number} </p><hr>`);

//Problem 2 
document.writeln(`<h1>Question 2</h1>`);
let a = 2;
let b = 1;
document.writeln(`<p>The value for --a will be <b>1</b></p>`);
document.writeln(`<p>The value for --a - --b will be <b>1</b></p>`);
document.writeln(`<p>The value for --a - --b + ++b will be <b>2</b></p>`);
document.writeln(`<p>The value for --a - --b + ++b + b-- will be <b>${--a - --b + ++b + b--}</b></p>`);

//Problem 3
document.writeln(`<h1>Question 3</h1>`);
let username = "";

while (username === "" || !isNaN(username)) { //!isnan is basically checking whether user has enter a number or not as isnan means is not a number but using ! says is a number
    username = prompt("Enter your username");

} document.writeln(`<p>Welcome Mr.<b style="text-transform: capitalize;">${username}</b> to our Website</p>`);

//Problem 4
document.writeln(`<h1>Question 4</h1>`);
let usernumber = prompt("Enter a number");
if (usernumber === "" || usernumber === null) {
    for (let i = 1; i <= 10; i++) {
        document.writeln(`<p>5x${i} =${5 * i}</p>`);
    }
}
else {
    for (let i = 1; i <= 10; i++) {
        document.writeln(`<p>${usernumber}x${i} =${usernumber * i}</p>`);
    }
}

//Problem 5
document.writeln(`<h1>Question 5</h1>`);
let subject1 = prompt("Enter First Subject Name");
let subject2 = prompt("Enter Second Subject Name");
let subject3 = prompt("Enter Third Subject Name");
let num1 = prompt("Enter First Subject Number");
num1=Number.parseInt(num1);
let num2 = prompt("Enter Second Subject Number");
num2=Number.parseInt(num2);
let num3 = prompt("Enter Third Subject Number");
num3=Number.parseInt(num3);
let totalmarks = 100;
document.writeln(`   <table border="1px" cellspacing="5px">
        <tr>
            <th style="padding: 8px;">Subject</th>
            <th style="padding: 8px;">Total Marks</th>
            <th style="padding: 8px;">Obtained Marks</th>
            <th style="padding: 8px;">Percentage</th>

        </tr>
        <tr>
            <td style="padding: 8px;">${subject1}</td>
            <td style="padding: 8px;">${totalmarks}</td>
            <td style="padding: 8px;">${num1}</td>
            <td style="padding: 8px;">${(num1/totalmarks)*100}</td>
        </tr>
        <tr>
            <td style="padding: 8px;">${subject2}</td>
            <td style="padding: 8px;">${totalmarks}</td>
            <td style="padding: 8px;">${num2}</td>
            <td style="padding: 8px;">${(num2/totalmarks)*100}</td>
        </tr>
        <tr>
            <td style="padding: 8px;">${subject3}</td>
            <td style="padding: 8px;">${totalmarks}</td>
            <td style="padding: 8px;">${num3}</td>
            <td style="padding: 8px;">${(num3/totalmarks)*100}</td>
        </tr>
        <tr>
            <td style="padding: 8px;">Total</td>
            <td style="padding: 8px;">${totalmarks*3}</td>
            <td style="padding: 8px;">${num1 + num2 + num3}</td>
            <td style="padding: 8px;">${(num1 + num2 + num3) /300 *100}</td>
        </tr>
    </table>`)





