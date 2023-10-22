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

// 2. 유니온 타입의 특징

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // someone. //접근이 name만 됨. 공통속성만 됨
  // someone.skill // 접근안됨
  // someone.age // 접근안됨. 이것들을 하려면 21줄처럼 if typeof 해야할 것
}
