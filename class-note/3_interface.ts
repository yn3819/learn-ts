interface User {
  age: number;
  name: string;
}

// 1. 변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: "세호",
};

// 2. 함수에 인터페이스 활용(이럴 경우 많음) [함수의 인자를 정의하는 인터페이스]
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: "캡틴",
  age: 100,
};
getUser(capt);

// 3. 함수의 스펙(구조)에 인터페이스를 활용 [함수의 구조를 정의하는 인터페이스]
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;

sum = function (a: number, b: number): number {
  return a + b;
};

// function sum(a,b) {
//     return a + b
// }

// 4. 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
  [index: number]: string; // 4-2. number의 첫번째가 string이다
}

var arr: StringArray = ["a", "b", "c"]; // 4-3. 모든 타입이 string이 되었음
arr[0] = "22";

// 5. 딕셔너리 패텬
interface StringRegexDictionary {
  [key: string]: RegExp; // key:string = sth: /abc/ 라는뜻
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  // cssFile: 'css' // 이 스트링 형식은 RegExp에 할당할 수 없습니다
  cssFile: /\.css$/, //css파일로 끝나는 파일들(확장자들)
  jsFile: /\.js$/,
};

// obj['cssFile'] = 'a' // a형식은  Regex형식에 할당할 수 없다고 뜸
Object.keys(obj).forEach(function (value) {
  //마우스대면 추론, 스트링
});

// 6. 인터페이스 확장(상속)
interface Person {
  name: string;
  age: number;
}

// 6-2. 이게 아니라, 6-3으로
// interface Developer {
//     name: string;
//     age: number;
//     langeage: string;
// }

// 6-3.
interface Developer extends Person {
  langeage: string;
}

var capt2: Developer = {
    name: 'a',
    age: 20,
    langeage: 'js'
}