const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
// const todoList = document.querySelector("#todo-list");
const todoListDiv = document.querySelector(".todo-list-div");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

const saveUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username) {
    const button = document.createElement("button");
    greeting.innerText = `Welcome! "${username}"`;    /* h1태그 안에 삽입 */

    button.addEventListener("click", (event) => {
        const h1 = event.target.parentElement;
        window.localStorage.removeItem(USERNAME_KEY)

        if (confirm("로그아웃 하시겠습니까?") === true) {
            location.reload();
            h1.remove();
        } else {
            return false
        }
        
    })

    button.innerText = "로그아웃";
    greeting.appendChild(button);

    greeting.classList.remove(HIDDEN);      /* 이름 */
    todoForm.classList.remove(HIDDEN);      /* 할 일 적는 폼 */
    todoListDiv.classList.remove(HIDDEN);   /* 할 일 목록 */
};

/* 스토리지에 저장된 이름이 없다면 */
if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN);

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        loginForm.classList.add(HIDDEN);
        const userName = loginInput.value;  /* 내가 정한 이름 */
    
        localStorage.setItem(USERNAME_KEY, userName);
        paintGreeting(userName);
    })
} else {
    paintGreeting(saveUsername);
};
