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

var arr: StringArray = ['a', 'b', 'c'] // 4-3. 모든 타입이 string이 되었음
arr[0] = '22'