let p = document.querySelector("p");
function toggle(button) {
    // button.innertext="hello" 
    // console.log(1);
    p.classList.toggle("hide")
    if (button.innerText == "See More") {
        button.innerText = "See Less"
    }
    else{
        button.innerText = "See More"
        // console.log("vh");
    }
}