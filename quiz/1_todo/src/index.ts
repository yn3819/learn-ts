// 타입 정의하는 법, 근데 이것보단 인터페이스로 정의하기
// type Todo = {
//   id: number; title: string; done: boolean;
// }

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

//할 일의 목록을 받는 배열(맨 하단)
// 1-1. let todoItems: object[]; //ex) : number[], :string[]
// 1-2. let todoItems: { id: number; title: string; done: boolean }[];

// 1-3. 인터페이스로 정리
let todoItems: Todo[];

// 1-1. api
// function fetchTodoItems(): { id: number; title: string; done: boolean }[] {
//   const todos = [
//     { id: 1, title: "안녕", done: false },
//     { id: 2, title: "타입", done: false },
//     { id: 3, title: "스크립트", done: false },
//   ];
//   return todos; //배열을 반환
// }

// 1-2. 인터페이스로 정리
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos; //배열을 반환
}

// crud methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(
  index: number,
  todo: Todo
): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted(): object[] {
  // 화살표함수 :
  return todoItems.filter((item) => item.done);
  // return todoItems.filter(function(item){
  //   if(item.done) {
  //     return item;
  //   }
  // })
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // 왜 void일까?
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: "item 4",
    done: false,
  };

  addTodo(item1);
  addTodo({
    id: 5,
    title: "item5",
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
