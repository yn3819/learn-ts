// 1. 타입 별칭 소개
// 인터페이스와 타입의 차이

interface Person2 {
    name: string;
    age: number;
}

// type Person2 = {
//   name: string;
//   age: number;
// };

//Person2에 마우스 대면 interface: interface Person2 / type: name, age가 나옴
var seho: Person2 = { 
  name: "세호",
  age: 22,
};

// 타입은 타입 붙일 수 있는 모든 곳에 별칭 붙일 수 있음
// 타입은 확장이 되지 않음!!!
type MyString = string;
var str: MyString = 'hello'
// var str: MyString = 22

type Todo = {id: string, title: string, done: boolean}
// function getTodo(todo: Todo) //마우스 대기