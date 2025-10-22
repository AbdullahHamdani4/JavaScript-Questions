// Chapter 6-9  First Pdf

//Problem 1
let usercity=prompt("Enter your city name");
if (usercity ==  "Karachi" || usercity == "karachi") {
    console.log("Welcome to city of lights");
} else console.log("Please enter a valid city name");


//Problem 2
let usergender=prompt("Enter your gender");
if(usergender=="male" || usergender=="Male") console.log("Good Morning Sir!")
else console.log("Good Morning Madam!");

//Problem 3
let usertrafficcolor=prompt("Enter Traffic light color");
if (usertrafficcolor == "red") console.log("Must Stop");
else if (usertrafficcolor == "yellow") console.log("Ready to move");
else if (usertrafficcolor == "green") console.log("Move Now");
else console.log("Enter valid traffic light color");

//Problem 4
let userfuel=+prompt("Please enter  remaining fuel in liters!");
if(userfuel < 0.25) console.log("Please refuel");
else console.log("You are good to go!");

//Problem 5

//Part a
let a = 4;
if (++a == 5) {
    alert("Given condition for the variable a is true");
};

//Part b
let b = 82;
if (b++ == 83) {
    alert("Given condition for the variable b is true");
};

//Part c
let c = 12;
if (c++ == 13) {
    alert("Condition is 1 true");
};
if (c === 13) {
    alert("Condition is 2 true");
};
if (++c < 14) {
    alert("Condition is 3 true");
};
if (c === 14) {
    alert("Condition is 4 true");
};

//Part d
let materialcost=20000;
let labourcost=2000;
let totalcost=materialcost + labourcost;
if(totalcost == materialcost+labourcost) alert("The cost equals");

//Part e
if(true) alert("True");
if(false) alert("False");

//Part f
if("carr" < "cat") alert("car is smaller than cat");

//Problem 6
let user_totalmarks=+prompt("Enter total marks");
let user_obtainedmarks=+prompt("Enter obtained marks");
let percentage= (user_obtainedmarks/user_totalmarks) * 100;
let formattedpercentage=+percentage.toFixed(2);
let grade;
let remarks;
if(formattedpercentage >=80){
    grade="A-one"
    remarks="Excellent"
}else if (formattedpercentage >=70){
    grade="A"
    remarks="Good"
}else if (formattedpercentage >=60){
    grade="B"
    remarks="You need to improve"
}else if (formattedpercentage <60){
    grade="Fail"
    remarks="Sorry"
}
 document.writeln(`<h1>Marks Sheet</h1>`);
 document.writeln(`<p><b>Total marks</b>: ${user_totalmarks}</p>`);
 document.writeln(`<p><b>Obtained marks</b>: ${user_obtainedmarks}</p>`);
 document.writeln(`<p><b>Percentage</b>: ${formattedpercentage}%</p>`);
 document.writeln(`<p><b>Grade</b>: ${grade}</p>`);
 document.writeln(`<p><b>Remarks</b>: ${remarks}</p>`);

//Problem 7
let secretnumber=9;
let user_number=+prompt("Guess the secret number (between 1-10)");
if(user_number== secretnumber){
    console.log("Bingo! Correct answer");
} else if(secretnumber + 1 == user_number || secretnumber -1 == user_number){
    console.log("Close enough to get the correct answer");

}
//Problem 8
let usernumber=prompt("Enter a number");
if(usernumber % 3 ==0 ) console.log("Divisible");
//Problem 9
let userinput=prompt("Enter a number to check odd or even");
if(userinput % 2 ==0 ) console.log("Number is Even");
else console.log("Number is odd");


//Problem 10
let temperature=+prompt("Enter temperature");
if(temperature > 40){
     console.log("Its too hot outside");

 }else if (temperature > 30){
     console.log("The weather today is Normal");

 }else if (temperature > 20){
     console.log("Today's Weather is cool");

 }else if (temperature > 10){
     console.log("OMG! Today's weather is so cool");

 }



//Problem 11
document.writeln("<h1>Question 11</h1>")
let firstnum=+prompt("Enter first number",5);
let secondnum=+prompt("Enter second number",5);
document.writeln(`<p>The sum of ${firstnum} and ${secondnum} will be ${firstnum + secondnum}</p>`);
document.writeln(`<p>The difference of ${firstnum} and ${secondnum} will be ${firstnum - secondnum}</p>`);
document.writeln(`<p>The product of ${firstnum} and ${secondnum} will be ${firstnum * secondnum}</p>`);
document.writeln(`<p>The division of ${firstnum} and ${secondnum} will be ${firstnum / secondnum}</p>`);
document.writeln(`<p>The remainder of ${firstnum} and ${secondnum} will be ${firstnum % secondnum}</p>`);

//Second pdf 12-13

//Problem 1
let user_character=prompt("Enter a number or string");
if(!isNaN(user_character)){
    console.log("A number");
};

//Problem 2
let usernumber1=+prompt("Enter number one");
let usernumber2=+prompt("Enter number two");
let greater;
  if(usernumber1 >  usernumber2){
    greater="Number one is greater than 2"
    console.log(greater);
}else if(greater== undefined){
    greater="Number two is greater than 1"
    console.log(greater);
}  
if(usernumber1==usernumber2){
     console.log("Both number are equal");
};

//Problem 3
let user_guess=+prompt("Tell a number,I will check whether its positive or negative or zero");
if(user_guess==0){
    console.log("The number is zero");
}else if(user_guess <0){
    console.log("The number is negative");
} else if(user_guess>0){
    console.log("The number is positive");
}

//Problem 4
let user_vowel=prompt("Enter a character to check whether its a vowel or not");
user_vowel=user_vowel.toLowerCase();
if(user_vowel == "a" || user_vowel == "e" || user_vowel == "i" || user_vowel == "o" || user_vowel == "u"){
    console.log("The given character is a vowel");
} else if(user_vowel.length == 2){
    console.log("Please enter single character");
}else{
    console.log("Given character is not a vowel");

}
//Problem 5
let password="hello123";
let userpassword=prompt("Guess the password");
if(userpassword=="" || userpassword == null){
    console.log("Please enter password");
}else if(userpassword==password){
    console.log("You guessed correctly!");
} else{
    console.log("Incorrect Password");   
};

//Problem 6
let greeting;
let hour = 13;
if (hour < 18){
    greeting="Good Day";
    console.log(greeting);
}else{ 
    greeting="Good evening";
    console.log(greeting);
    
}