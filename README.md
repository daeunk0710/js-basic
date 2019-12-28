# js-basic
Follow JS Basic lecture of Nomad Coders https://youtu.be/ygVeQEgxm4o
- Momentum Clone Coding

### #1-6. variables
자바스크립트는 문법에 엄격하지 않음. 나쁜 문법도 동작
변수 사용법: create -> initialize -> use
let a = 221; // 변수 a 선언(생성)
let b = a-5; // 변수 b 생성, 변수 a 참조
a = 4;
console.log(b, a) // instruction 에는 세미클론 쓰지 않음

### #1-7. variables (let, const, var)
constant = 상수. 값이 바뀌지 않게 하고 싶다면
const a = 221;

var: javascript 초창기에 있던 변수 선언 문법
사용 목적이 명확하지 않음! let 인지 const 인지

### #1-8. Data Types
* String
const what = "SHIFT";
console.log(what);

* Boolean true(1) false(0)
const wat = false;

* Number
const num = 666;

* Float
const float = 55.1;

### #1-9. Organizing Data with Arrays
배열: 데이터 하나로 묶기
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);

### #1-10. Organizing Data with Objects
배열의 단점! 값을 찾기 어려움. 순서를 알아야 함.
객체: key-value로 정의

const myInfo = {
  name:"Daeun",
  age:23,
  gender:"Female"
}

Combine Arrays & Objects
배열 안에 객체 or 객체 안에 배열 가능!
