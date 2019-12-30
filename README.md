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

### #2-1. Function
console.log(console) 해보면?
  console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
  memory: (...)
  debug: ƒ debug()
  error: ƒ error()
  info: ƒ info()
  log: ƒ log()
  warn: ƒ warn()
  dir: ƒ dir()
  dirxml: ƒ dirxml()
  table: ƒ table()
  trace: ƒ trace()
  group: ƒ group()
  groupCollapsed: ƒ groupCollapsed()
  groupEnd: ƒ groupEnd()
  clear: ƒ clear()
  count: ƒ count()
  countReset: ƒ countReset()
  assert: ƒ assert()
  profile: ƒ profile()
  profileEnd: ƒ profileEnd()
  time: ƒ time()
  timeLog: ƒ timeLog()
  timeEnd: ƒ timeEnd()
  timeStamp: ƒ timeStamp()
  context: ƒ context()
  Symbol(Symbol.toStringTag): "Object"
  get memory: ƒ ()
  set memory: ƒ ()
  __proto__: Object

  -> console 도 하나의 object!
  -> console.log 는 console 이라는 object 의 log 라는 함수를 사용하는 것

'' "" ``
Grave Accent: 변수와 문자열을 함께 사용 가능

### #2-2. JS DOM Functions
document: html 문서의 정보를 담은 object
console.log(document) -> 해당 문서의 정보를 보여줌

DOM(Document Object Model)!
자바스크립트는 html 문서를 객체로 만든다
이 객체를 통해 html 문서 제어 가능
ex. title.innerHTML() 함수로 title 객체의 내용을 변경

### #2-3. Modifying the DOM with JS
console.dir(title) -> title 객체로 할 수 있는 모든 걸 보여줌

  h1#title align: "" title: "" lang: "" translate: true dir: "" hidden: false accessKey: "" draggable: false spellcheck: true autocapitalize: "" contentEditable: "inherit" isContentEditable: false inputMode: "" offsetParent: body offsetTop: 21 offsetLeft: 8 offsetWidth: 1270 offsetHeight: 43 style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …} innerText: "Hi! From JS" outerText: "Hi! From JS" oncopy: null oncut: null onpaste: null onabort: null onblur: null oncancel: null oncanplay: null oncanplaythrough: null onchange: null onclick: null onclose: null oncontextmenu: null oncuechange: null ondblclick: null ondrag: null ondragend: null ondragenter: null ondragleave: null ondragover: null ondragstart: null ondrop: null ondurationchange: null onemptied: null onended: null onerror: null onfocus: null oninput: null oninvalid: null onkeydown: null onkeypress: null onkeyup: null onload: null onloadeddata: null onloadedmetadata: null onloadstart: null onmousedown: null onmouseenter: null onmouseleave: null onmousemove: null onmouseout: null onmouseover: null onmouseup: null onmousewheel: null onpause: null onplay: null onplaying: null onprogress: null onratechange: null onreset: null onresize: null onscroll: null onseeked: null onseeking: null onselect: null onstalled: null onsubmit: null onsuspend: null ontimeupdate: null ontoggle: null onvolumechange: null onwaiting: null onwheel: null onauxclick: null ongotpointercapture: null onlostpointercapture: null onpointerdown: null onpointermove: null onpointerup: null onpointercancel: null onpointerover: null onpointerout: null onpointerenter: null onpointerleave: null onselectstart: null onselectionchange: null onanimationend: null onanimationiteration: null onanimationstart: null ontransitionend: null dataset: DOMStringMap {} nonce: "" autofocus: false tabIndex: -1 enterKeyHint: "" onformdata: null onpointerrawupdate: null namespaceURI: "http://www.w3.org/1999/xhtml" prefix: null localName: "h1" tagName: "H1" id: "title" className: "" classList: DOMTokenList [value: ""] slot: "" part: DOMTokenList [value: ""] attributes: NamedNodeMap {0: id, id: id, length: 1} shadowRoot: null assignedSlot: null innerHTML: "Hi! From JS" outerHTML: "Hi! From JS" scrollTop: 0 scrollLeft: 0 scrollWidth: 1270 scrollHeight: 43 clientTop: 0 clientLeft: 0 clientWidth: 1270 clientHeight: 43 attributeStyleMap: StylePropertyMap {size: 0} onbeforecopy: null onbeforecut: null onbeforepaste: null onsearch: null elementTiming: "" previousElementSibling: null nextElementSibling: script children: HTMLCollection [] firstElementChild: null lastElementChild: null childElementCount: 0 onfullscreenchange: null onfullscreenerror: null onwebkitfullscreenchange: null onwebkitfullscreenerror: null nodeType: 1 nodeName: "H1" baseURI: "file:///C:/Users/lg/Documents/Git/js-basic/index.html" isConnected: true ownerDocument: document parentNode: body parentElement: body childNodes: NodeList [text] firstChild: text lastChild: text previousSibling: text nextSibling: text nodeValue: null textContent: "Hi! From JS" proto: HTMLHeadingElement

document 객체를 지정하는 방법
- const title = document.getElementById("title");
- const title2 = document.querySelector("#title");

### #2-4. Events and event handlers
자바스크립트가 이벤트에 반응하는 방법
이벤트란? 웹에서 발생하는 모든 것 ex. click, resize, submit

- addEventListener
  - window.addEventListener("resize", handleResize()); -> 즉시 handleResize 함수 호출
  - window.addEventListener("resize", handleResize); // 이벤트가 발생한 시점에서 handleResize 함수 호출

- function handleResizeAuto -> 이벤트 발생할때마다 이벤트의 정보 출력
  function handleResizeAuto(event){
    console.log(event);
  }
- function handleClick -> 이벤트로 객체 제어
  function handleClick(){
    title.style.color = "blue";
  }
  title.addEventListener("click", handleClick);

### #2-5. If, else, and, or
- 비교연산자 === > <
- 논리연산자 && || !

### #2-6. DOM If else Function practice 1
클릭 이벤트마다 글씨색 바꾸는 코드

\`const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#fab1a0";

function handleClick(){
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();\`
