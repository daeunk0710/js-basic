//#2-4. Events and event handlers
const title = document.querySelector("#title");

// funstion handleResize
function handleResize(){
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize()); // 즉시 handleResize 함수 호출
window.addEventListener("resize", handleResize); // 이벤트가 발생한 시점에서 handleResize 함수 호출

// function handleResizeAuto -> 이벤트 발생할때마다 이벤트의 정보 출력
function handleResizeAuto(event){
  console.log(event);
}
window.addEventListener("resize", handleResizeAuto);

// function handleClick -> 이벤트로 객체 제어
function handleClick(){
  title.style.color = "blue";
}
title.addEventListener("click", handleClick);
