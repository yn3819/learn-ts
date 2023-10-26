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