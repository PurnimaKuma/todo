let addToDoButton = document.getElementById("addToDo");
let toDocontainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputField");
let historyC = document.getElementById("history");

addToDoButton.addEventListener("click", function () {

    var paragraph = document.createElement("p");
    var deleteItem = document.createElement("p");
    var hist = document.createElement("p");
    paragraph.classList.add("paragraph-styling")
    paragraph.innerText = inputField.value;
    toDocontainer.appendChild(paragraph);
    deleteItem.innerHTML = "<button>Delete</button>";
    if (inputField.value !== "") {
        toDocontainer.appendChild(deleteItem);
    }
    deleteItem.classList.add("btn");
    inputField.value = "";
    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick", function () {
        toDocontainer.removeChild(paragraph);
    })
    deleteItem.addEventListener("click", function () {
        toDocontainer.removeChild(paragraph);
        toDocontainer.removeChild(deleteItem);
        historyC.appendChild(paragraph);
        historyC.appendChild(hist);
        hist.innerHTML = "<button>Delete Permanently</button>";
    })
    hist.addEventListener("click", function(){
        historyC.removeChild(paragraph);
        historyC.removeChild(hist);
    })

})