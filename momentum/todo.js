const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";

function paintTodo(text){
  const li = document.createElement("li"); // li 생성
  const delBtn = document.createElement("button"); // button 생성
  delBtn.innerText = "✖️";
  const span = document.createElement("span"); // span 생성
  span.innerText = text;
  li.appendChild(span); // span 을 li 안에 넣기
  li.appendChild(delBtn); // button 을 li 안에 넣기
  todoList.appendChild(li); // todoList 에 li 넣기
}

function handleSubmit(event){
  event.preventDefault(); // 기본 이벤트를 막는다
  const currentValue = todoInput.value; // 입력값을 변수에 저장
  paintTodo(currentValue);
}

function loadTodos(){
    const todos = localStorage.getItem(TODOS_LS);
    if(todos !== null){
      // todo list 보여주기
    }
}

function init(){
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
