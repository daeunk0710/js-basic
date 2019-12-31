const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";
let todos = []; // todo 목록을 담은 배열

function filterFn(todo){
  return todo.id === 1;
}
function deleteTodo(event){
  console.dir(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);

  // filter 로 거르기
  const cleanTodos = todos.filter(function(todo){
    return todo.id !== parseInt(li.id);
  });

  // todos array 교체 & 저장
  todos = cleanTodos;
  saveTodos();
}

function saveTodos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintTodo(text){
  const li = document.createElement("li"); // li 생성
  const delBtn = document.createElement("button"); // button 생성
  delBtn.innerText = "✖️";
  delBtn.addEventListener("click", deleteTodo); // 버튼 클릭시 deleteTodo 호출

  const span = document.createElement("span"); // span 생성
  span.innerText = text;
  const newId = todos.length + 1; // id 생성

  li.appendChild(span); // span 을 li 안에 넣기
  li.appendChild(delBtn); // button 을 li 안에 넣기
  li.id = newId; // id 할당
  todoList.appendChild(li); // todoList 에 li 넣기

  const todoObj = {
    text: text,
    id: newId
  };
  todos.push(todoObj); // array 안에 element 넣기
  saveTodos(); // saveTodos 호출
}

function handleSubmit(event){
  event.preventDefault(); // 기본 이벤트를 막는다
  const currentValue = todoInput.value; // 입력값을 변수에 저장
  paintTodo(currentValue);
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null){
      const parsedTodos = JSON.parse(loadedTodos);
      parsedTodos.forEach(function(todo) {
        paintTodo(todo.text);
      });
    }
}

function init(){
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
