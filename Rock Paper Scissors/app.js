const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const resultPara = document.getElementById("resultPara");
const userSc = document.getElementById("userScore");
const computerSc = document.getElementById("computerScore");
// console.log("btn1==>",btn1.innerText);

 let userScore = 0;
let computerScore = 0;
let uservalue = "";
function checkResult() {
    userSc.innerText=userScore;
    computerSc.innerText=computerScore;
    let gameValue = ["rock", "paper", "scissor"];
    let computerValue = gameValue[Math.floor(Math.random() * 3)];
    console.log(computerValue);
   

    if (uservalue == computerValue) {
         resultPara.innerText="Game is draw";
    } else if (uservalue == "paper" && computerValue == "rock") {
         resultPara.innerText="User wins as paper beats rock";
        userScore++
     }
    else if (uservalue == "rock" && computerValue == "paper") {
         resultPara.innerText="Computer wins as paper beats rock";
        computerScore++
     }
    else if (uservalue == "scissor" && computerValue == "paper") {
         resultPara.innerText="User wins as scissor cut paper";
        userScore++
     }
    else if (uservalue == "paper" && computerValue == "scissor") {
         resultPara.innerText="Computer wins as scissor cut paper";
        computerScore++
     }
    else if (uservalue == "rock" && computerValue == "scissor") {
         resultPara.innerText="User wins as rock breaks scissor";
        userScore++
     }
    else if (uservalue == "scissor" && computerValue == "rock") {
         resultPara.innerText="Computer wins as rock breaks scissor";
        computerScore++
     }
};
btn1.addEventListener("click", () => {
    uservalue = "rock";
     checkResult()

});
btn2.addEventListener("click", () => {
    uservalue = "paper";
     checkResult()
});
btn3.addEventListener("click", () => {
    uservalue = "scissor";
     checkResult()
});