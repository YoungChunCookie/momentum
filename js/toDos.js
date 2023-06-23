const toDoForm = document.querySelector('#toDoForm');
const toDoInput = document.querySelector('#toDoForm input')
const toDoList = document.querySelector('#toDoList');

const TODOS_KEY = "todos";


let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



function deleteToDo (event){
   const li = event.target.parentElement;
   li.remove();

   toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
   saveToDos();
}


function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDoObj.text;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteToDo);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}


function handleToDoSubmit (event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);