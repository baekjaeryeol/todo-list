// const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input")

const TODOS_KEY = "todos"

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");

    button.addEventListener("click", (event) => {
        const li = event.target.parentElement;
        console.log(li.id);
        li.remove();

        toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
        saveTodos();
    })

    button.innerText = "X"
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
})

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos)
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
