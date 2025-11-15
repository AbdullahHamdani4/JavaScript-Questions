//Password Generator
let passwordPara = document.getElementById("password");
let button = document.querySelector("button")

function createPass() {
    let passArray = ["a", "b", "d", "g", "z", "x", "w", "q", "l", 1, 3, 7, 6, 2, 3, 7, "!", "@", "%", "#", ",", "/"];

    let pass = "";
    for (let i = 1; i <= 12; i++) {

        pass += passArray[Math.floor(Math.random() * passArray.length)];

    }
    passwordPara.innerText = `The password is ==> ${pass} and the lenght is ${pass.length}`;
}
