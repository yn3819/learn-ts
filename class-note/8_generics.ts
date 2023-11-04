// 1-1. 일반 호출
// function logText(text) {
//     console.log(text);
//     return text; //파라미터를 받아서 그대로 돌려줌

// }
// logText(10);
// logText('hi');
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText(10); //함수 호출할 때 타입 넘겨줄게
logText("hi");
logText<string>("hi");
// logText<string>(10);

// 2. 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점

// A-1.
function logText2(text: string) {
  console.log(text);
  text.split("").reverse().join(""); //string이니까 split 가능
  return text;
}
logText2("a");
// logText2(10) //split이면 불가능
// logText2(true) //split이면 불가능

// A-2.
function logNumber(num: number) {
  console.log(num);
  return num;
}

// logNumber('a') //불가능
logNumber(10); //
const num = logNumber(10);
// num. //

// A-1, A-2 이렇게해도 문제 없이 함수 쓸 수 있지만, 유지보수 관점에서는 좋지 않음.
// 단순히 타입을 바꾸기 위해 중복 함수를 만드는 것은 좋지 않음. 이것을 위해 다음시간 유니온 타입으로.

// 3. 기존 타입 정의 방식과 제네릭의 차이점 - 유니온 타입 방식의 문제점

function logText3(text: string | number) {
  console.log(text);
  // 문제점1
  // text. // string과 number가 공통으로 접근할 수 있는 API에 대해서만 자동완성 제공해줌

  return text;
}
const a = logText3("a"); //문제점2: 문자로 받았음에도 불구하고
// a.split('') //에러가 뜸. 정확하게 스트링으로 추론 되어야만 스플릿 쓸 수 있다. 넘버가 들어올 때는 스플릿 못씀.
// 즉, 인풋에 대한 해결은 됐지만, 반환값에 대한 것 해결 안됨
logText3(10);

// 4. 2번과 3번을 제네릭으로 어떻게 해결할 수 있는가
// 제네릭의 장점과 타입 추론에서의 이점

function logText4<T>(text: T) {
  console.log(text);
  return text;
}

logText4<string>("a");
const str = logText4<string>("a");
str.split("");
const login = logText4<boolean>(true);
// logText4<number>('aaaa')

// 번외
interface TrueFalse {
  value: boolean;
  selected: boolean;
}

// 5. 인터페이스에 제네릭을 선언하는 방법
// 5-1. 비교
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false }; 숫자 선언불가

// 5-2. 비교
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: "abc", selected: false };

// 6. 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  // console.log(text.length); //<T> 에러뜨는이유: ts입장에서는 무슨 타입 들어올지 모름(개발자만 앎)
  //[] T[]배열이기때문에 렝스 쓸수있게됨. 그러나 스트링으로 바꾸면 배열 들어와야돼서 에러듬

  // console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
// logTextLength('hi'); //ts입장에서는 무슨 타입 들어올지 몰라서 text.length 오류남
// logTextLength<string>('hi'); //배열 아니라서 오류
logTextLength<string>(["hi", "hello"]); //배열 아니라서 오류

// 7. 제네릭 타입 제한 2 - "정의된 타입" 이용하기
interface LengthType {
  length: number;
}

// T extends LengthType : 제네릭으로 받은 타입은 항상 렝스타입으로 받을 것이라는 뜻?
function logTextLength2<T extends LengthType >(text: T): T {
  text.length;
  return text;
}
logTextLength2('a');
// logTextLength2(10); // 숫자는 렝스 안됨
// 'a'.length // 문자열은 렝스 나옴
logTextLength2({length: 10}) //뭔소린지 모르겠음