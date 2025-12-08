//Chapter 43-48
// let input=document.querySelector(".button").parentElement.parentElement.remove()
// console.log(input);
//Problem 1
function alertShow(){
   alert("Link Clicked!!!")
}
function phonePurchased(phone) {
    alert(`Thank you for buying ${phone.alt} from our website`)
}
function removeRow(button){
  button.parentElement.parentElement.remove()
}
function imgChange(img){
  img.src="https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg"
}
let scoreSpan=document.querySelector("span");
let score=0
function increaseScore(){
    score++
  scoreSpan.innerText=score;
}
function decreaseScore(){
    score--
  scoreSpan.innerText=score;
}