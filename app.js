let inputs = document.getElementById("inputbox");
let text = document.querySelector(".text");
function add() {
    if (inputs.value == "") {
        alert("Please enter a task")
    } else {
        let newElement = document.createElement("li");
        newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i>`
        text.appendChild(newElement);
    }
}