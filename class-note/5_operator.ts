// 1-1.
function logMessage1(value: any) {
  console.log(value);
  // value. // 여기서는 타입 추론이 안됨(1-3에서는 됨)
}
logMessage1("hello");
logMessage1(20);

// 1-2. 유니온 타입: 1개의 타입 이상 쓸 수 있도록 하는 것
function logMessage2(value: string | number) {
  console.log(value);
}
logMessage2("hello");
logMessage2(20);

// 1-3.
var seho: string | number | boolean;

function logMessage3(value: string | number) {
  if (typeof value === "number") {
    // 유니온타입: value. //api나 속성이추론이 됨
  }

  if (typeof value === "string") {
    // value. //문자가 추론됨
  }
  // 스트링과 넘버 아닌 타입일 때 에러 발생시켜줄 수 있음
  throw new TypeError("value must be string or number");
}

// 2-1. 유니온 타입의 특징=============================

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 2-2.
// function askSomeone(someone: Developer | Person) {
//    someone. //접근이 name만 됨. 공통속성만 됨
//    someone.skill // 접근안됨
//    someone.age // 접근안됨. 이것들을 하려면 20줄처럼 if typeof 해야할 것
// }


// 3-1. 인터섹션 타입 소개
// var capt: string & number & boolean;

// 3-2. 2-2와 달리 오류 사라짐
function askSomeone(someone: Developer & Person) {
  someone.name
  someone.skill; 
  someone.age;
}

// 4-1. 유니온 타입과 인터섹션 타입의 차이점
// 4-2. 유니온 타입일 때 함수 호출 (디벨로퍼를 주거나 or 펄슨을 주거나)
// askSomeone({name: '디벨로퍼', skill: '웹 개발'})
// askSomeone({name: '캡틴', age: 100})

// 4-3. 인터섹션 타입일 때 함수 호출
// 유니온: 선택지 생김, 인터섹션: 합집합..
askSomeone({name: '디벨로퍼', skill: '웹 개발', age: 200}) // &인터섹션 씀으로 인해, 개발자속성, 사람의 속성도 넣어주어야 함
askSomeone({name: '캡틴', age: 100, skill: '스킬'})