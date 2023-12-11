// 타입 추론 기본 1
var a = "abc";

function getB(b = 10) {
  var c = "hi"; //함수 내부에 변수 선언
  // return b;
  return b + c; //getB(b?: number): string. 결과적으로 스트링이라고 타입추론 함
}

// js) 10 + '10' = 1010(문자열 취급)

//  ------------------------------------------------------ //

//2. 인터페이스와 제네릭을 이용한 타입 추론 방식
// 타입 추론 기본 2

interface Dropdown<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "hello",
};

//변수를 초기화하고 있음. 타입초기화 통해 타입 추론 하고 있음

//  ------------------------------------------------------ //

//3. 복잡한 구조에서의 타입 추론 방식
//타입 추론 기본 3

interface Dropdown<T> {
  value: T;
  title: string;
}

//2) 디테일드드롭다운<K>의 타입을 넘김 익스텐드 드롭다운<K>
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
  // value, (extends로 인해 암묵적으로 들어와있음)
  // title,
}

// 1) 여기 <스트링>이
var detailedItem: DetailedDropdown<string> = {
  //스트링을 넘버로 바꾸면 k가 영향받음..
  title: "abc", //고정되어있는 데이터는 초기화
  description: "ab", //고정되어있는 데이터는 초기화
  value: "a", //스트링이라고 정의됨
  tag: "a",
};

//  ------------------------------------------------------ //
// 4. Best Common Type 추론 방식(타입스크립트가 타입 어찌 해석하는지 알고리즘)
// = 가장 근접한 타입으로 추론한다. = 거의 모든 값들을 유니온으로 묶어나가긴 함.
var arr = [1, 2, 3];
var arr2 = [1, 2, true];
var arr3 = [1, 2, true, "a"];
var arr4 = [1, 2, true, "a", null];

//  ------------------------------------------------------ //
// 5. 타입스크립트 language Server 소개
// vscode에는 내부적으로 탑재되어있다고 생각하면 됨
// 랭귀지 서버 익스텐션 가이드 읽어볼 것
