console.log("Hello there")

let addToDoButton = document.getElementById("addToDo");
let toDocontainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function(){

    var paragraph = document.createElement("p");
    var deleteItem = document.createElement("p");
    paragraph.classList.add("paragraph-styling")
     paragraph.innerText = inputField.value;
    toDocontainer.appendChild(paragraph);
    deleteItem.innerHTML = "<button>Delete</button>";
     if(inputField.value!==""){
     toDocontainer.appendChild(deleteItem);
     }
    deleteItem.classList.add("btn");
    inputField.value = "";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick", function(){
    toDocontainer.removeChild(paragraph);
    })
deleteItem.addEventListener("click", function(){
    toDocontainer.removeChild(paragraph);
    
    toDocontainer.removeChild(deleteItem);
})
    
})

