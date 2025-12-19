//Chapter 58-67  
//DOM

//Problem 1 
//part i
let mainContent = document.getElementById("main-content")

//part ii
console.log("All elements of main-content == >", mainContent.children);

//part iii
let render = document.getElementsByClassName("render")
for (let i = 0; i < render.length; i++) {
    console.log(render[i].innerHTML);
}

//part iv
let firstName = document.getElementById("first-name");
firstName.value = "Alex"

//part v
let lastName = document.getElementById("last-name");
lastName.value = "Bhatti"
let email = document.getElementById("email");
email.value = "alexbhatti@gmail.com"

//Problem 2
//part i
let formContent = document.getElementById("form-content");
console.log("Node type of form content ==> ", formContent.nodeType);

//part ii
let lastName2 = document.querySelector("#lastName")
console.log("Node type of lastName ==> ", lastName2.nodeType);
console.log("Child Node of lastName ==> ", lastName2.childNodes);

//part iii
lastName2.childNodes[0].nodeValue = "Alex Bhatti"

//part iv
console.log("First child of main content ==> ", mainContent.firstChild);
console.log("First child of main content ==> ", mainContent.lastChild);

//part v
console.log("Previous sibling of lastName ==> ", lastName2.previousSibling);
console.log("Next sibling of lastName ==> ", lastName2.nextSibling);

//part vi
console.log("Parent node of email ==> ", email.parentNode);
console.log("Node type of email ==> ", email.nodeType);
