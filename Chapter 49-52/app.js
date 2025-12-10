//Chapter 49-52

//Problem 1
function printValue(e, form) {
    e.preventDefault()
    document.writeln("Your Email is ", form.elements[0].value);
    document.writeln("<br>Your Password is ", form.elements[1].value);
}

//Problem 2
function showMore(button) {
    let para = document.querySelector("#para");
    para.classList.toggle("hide")
    if (button.innerText == "See More") {
        button.innerText = "See Less"
    } else {
        button.innerText = "See More"
    }
}
let logemail = document.getElementById("logemail");
let logpass = document.getElementById("logpass");
let table = document.querySelector("table");
let tablee = document.querySelector("input");
//Problem 3
function addData(e) {
    e.preventDefault()
    let newTableData = table.innerHTML + `
    <tr>
                <td>${logemail.value}</td>
                <td>${logpass.value}</td>
                <td><button onclick="deleteData(this)" class="buttonTd">Delete</button></td>
                <td><button onclick="editData(this)" class="buttonTd">Edit</button></td>
            </tr>
    `
    table.innerHTML = newTableData
    logemail.value = ""
    logpass.value = ""
}
function deleteData(button) {
    button.parentElement.parentElement.remove()
}
// console.log(object);
function editData(button) {
    logemail.value = button.parentElement.parentElement.childNodes[1].innerText
    logpass.value = button.parentElement.parentElement.childNodes[3].innerText
     button.parentElement.parentElement.remove()
    
}