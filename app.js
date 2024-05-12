let inputs = document.getElementById("inputbox");
let listText = document.getElementById("list-text");
function add() {
  // if input is equal to null means no text then show alert
  if (inputs.value == "") {
    alert("Please enter a task");
  } else {
    // Created list
    let newElementli = document.createElement("li");
    // This code create paragraph
    let newElementP = document.createElement("p");
    // inside paragraph getting the value of inputs
    newElementP.innerHTML = inputs.value;
    newElementP.style.background = "none";
    // this code will add paragraph inside list
    newElementli.appendChild(newElementP);

    // Created editIcon
    let editbtn = document.createElement("icon");
    editbtn.innerHTML = '<i class="fa-solid fa-pen-to-square">';
    newElementli.appendChild(editbtn);
    // Created deleteIcon
    let deletebtn = document.createElement("icon");
    deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    newElementli.appendChild(deletebtn);
 // finaally adding listItem in todoList:
    listText.appendChild(newElementli);
    inputs.value = "";
    // newElementli.innerHTML = `${inputs.value} <i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i>`;
  }
}
