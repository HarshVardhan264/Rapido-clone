let detail = document.getElementById("details")
let btn = document.getElementById("submit")
let box = document.querySelector(".b")

function reset(){
    if (box.value.trim() === "") {
        detail.style.visibility = "visible";
    } else {
        detail.style.visibility = "hidden"; // Optional: hide details if the input is not empty
    }
}

btn.addEventListener("click", reset);