const body = document.querySelector("body"),
  BG_IMG_CNT = 9;

function paintImage(imageNumber){
  const image = new Image();
  image.src = `images/bg_img${imageNumber + 1}.jpg`;
  image.classList.add("bgImg");
  body.appendChild(image);
}

function getRandom(){
  const number = Math.floor(Math.random() * BG_IMG_CNT);
  return number;
}

function init(){
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
