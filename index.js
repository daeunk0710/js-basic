// #1-6. variables
// 자바스크립트는 문법에 엄격하지 않음. 나쁜 문법도 동작
// 변수 사용법: create -> initialize -> use
let a = 221; // 변수 a 선언(생성)
let b = a-5; // 변수 b 생성, 변수 a 참조
a = 4;
console.log(b, a) // instruction 에는 세미클론 쓰지 않음

// #1-7. variables (let, const, var)
// constant = 상수. 값이 바뀌지 않게 하고 싶다면
const a = 221;

// var: javascript 초창기에 있던 변수 선언 문법
// 사용 목적이 명확하지 않음! let 인지 const 인지 
