let todoInput = document.querySelector(".todo-input"); // todo input
let addTodoButton = document.querySelector(".add-todo"); // add todo button
let todosList = document.querySelector(".todos-list"); // empty ul
let deleteButton;
function addTodo(){
    let todo = todoInput.value;
    // "" , 0 , false , undefined
    if(todo){
        let listItem = document.createElement("li"); // it creates a element
        listItem.classList.add("todo-item"); // it adds class to an element
        // <li class="todo-item"></li>;

        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;
        // <p class="todo">Learn HTML !!!</p>

        deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "DELETE";
        deleteButton.onclick = removeHandler();
        // <button class="delete-task">DELETE</button>
        // object.onclick = function(){myScript};

        listItem.append(pTag);
        listItem.append(deleteButton);
        todosList.append(listItem);
        todoInput.value = "";
    }
}


addTodoButton.addEventListener("click" , function(){
    addTodo()
});

todoInput.addEventListener("keypress" , function(e){
    if(e.key == "Enter"){
        addTodo();
    }
});

function removeHandler() {
    deleteButton.addEventListener("click" , function(event){
        event.target.parentNode.remove();
    }) 
  }
  