//Selectors
const todoInput = document.getElementById("todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;

    // showing li inside div 
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"> </i>';
    completedButton.classList.add('complete-button');

    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';

    todoDiv.appendChild(trashButton);


    //show all inside ul(todoList)
    todoList.appendChild(todoDiv);

    //clearing todoInput value
    todoInput.value = '';
};

function deleteCheck(e) {
    const item = e.target;

    //delete item
    if (item.classList[0] === "trash-button") {
        const todo = item.parentElement;

        //animation class
        todo.classList.add("fall");

        //to make wait for transition adding event listener
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }

    //Check Mark
    if (item.classList[0] === "complete-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
};

function filterTodo(e) {
  const todos = document.querySelectorAll(".todo");

  todos.forEach(function (todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (todo.classList.contains("completed")) {
            todo.style.display = "none";
          } else {
           todo.style.display = "flex";
          }
          break;
     }
    
  });
};


//Second function to sort the elements

// function filterTodo(e) {
//     const todos = todoList.childNodes;

//     todos.forEach(function (todo) {
//             const myStyle = todo.style;
//         if (myStyle != undefined && myStyle != null) {
//             switch (e.target.value) {
//                 case "all":
//                     myStyle.display = "flex";
//                     break;
//                 case "completed":
//                     if (todo.classList.contains('completed')) {
//                         myStyle.display = "flex";
//                     } else {
//                         myStyle.display = "none";
//                     }
//                     break;
//                 case "uncompleted":
//                     if (todo.classList.contains('completed')) {
//                         myStyle.display = "none";
//                     } else {
//                         myStyle.display = "flex";
//                     }
//                     break;
//             }
//         }
//     })
// }