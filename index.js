// #2-1. Function
console.log(console);

// 함수 정의
function sayHello(){
  console.log('Hello');
}

// 함수 사용
sayHello();

// argument(인자)
function sayHelloTo(name){
  console.log('Hello', name);
}
sayHelloTo("Daeun");

// '' "" ``
function useGraveAccent(name, age){
  console.log(`Hello ${name} you are ${age} years old`);
}
useGraveAccent("Daeun", 23);

// return
const greetings = useGraveAccent("Daeun", 23); // useGraveAccent 함수의 리턴값
console.log(greetings); // -> undefined. 함수의 리턴값이 없으니까

// 변수와 함수를 갖는 객체 만들기
const calculator = {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  multiply: function(a, b){
    return a * b;
  },
  divide: function(a, b){
    return a / b;
  },
  root: function(a){
    return Math.sqrt(a);
  }
}
const plus = calculator.plus(5,5)
const root = calculator.root(25)
const multiply = calculator.multiply(4, 5)
console.log(plus);
console.log(root);
console.log(multiply);
