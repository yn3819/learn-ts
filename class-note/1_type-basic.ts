//JS 문자열 선언
var str = "hello";

//TS 문자열 선언
var str: string = "hello";

// TS 숫자
let num: number = 10;
let arr = [1, 2, 3];

// TS 배열
let arr2: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["캡틴", "토르", "10"];
let items: number[] = [1, 2, 3]; //더 편한 방법

// TS 튜플: 배열의 인덱스에 타입이 정해져있는 것
let address: string[] = ["강남", "판교"];
let address2: [string, number] = ["강남", 22];

// TS 객체
let obj: object = {}; //객체 정의하는 방식
// let person: object = {
//     name: 'capt',
//     age: 100
// };
let person: { name: string; age: number } = {
  name: "thor",
  age: 1000,
};

// JS 진위값
let show: boolean = true;
