//#2-7. DOM If else Function practice 2
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// ver1. 태그에 다른 class 가 할당되어 있는 경우 제대로 동작하지 않음
// function handleClick(){
//   const currentClass = title.className;
//   console.log(currentClass);
//   if (currentClass !== CLICKED_CLASS){
//     title.className = CLICKED_CLASS;
//   } else {
//     title.className = "";
//   }
// }

// ver2. classList
// function handleClick(){
//   const hasClass = title.classList.contains(CLICKED_CLASS);
//   if (!hasClass){
//     title.classList.add(CLICKED_CLASS);
//   } else {
//     title.classList.remove(CLICKED_CLASS);
//   }
// }

// ver3. toggle
function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);
}

init();
