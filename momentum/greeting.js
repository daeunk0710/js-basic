const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`
}

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault(); // 기본 이벤트를 막는다
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  console.log(form.classList);
  form.addEventListener("submit", handleSubmit);
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  console.log(currentUser);
  if(currentUser === null){
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();
