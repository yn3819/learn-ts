// 2-1. 제네릭을 이용한 타입 정의. 이렇게 쓰면 2번 다 수정됨
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// 2-2.
// interface Eamil {
//   value: string;
//   selected: boolean;
// }

// 1-1. 제네릭 실전 예제 - 코드에 타입 정의하기
// const emails: object[]
// => 더 자세하게(3줄)
// const emails: { value: string; selected: boolean }[] = [
//   { value: "naver.com", selected: true },
//   { value: "gmail.com", selected: false },
//   { value: "hanmail.net", selected: false },
// ];

// 1-2. 인터페이스 및 제네릭 활용 (8줄과 같은 것임)
// 2-2. Email 제네릭을 이용한 타입 정의
const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }

// 2-2. ProductNumber -> DropdownItem
const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 1-3. 38줄, 이렇게 유니온으로 해도 되지만 X
// function createDropdownItem(
//   item:
//     | { value: string; selected: boolean }
//     | { value: number; selected: boolean }
// ) {

// 2-2. Email, ProductNumber -> DropdownItem
function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});
