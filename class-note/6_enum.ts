// 1. 숫자형 이넘
enum Shoes {
  Nike = 10, //갖다대면 0, 1씩 추가되는 것이 보임
  Adidas,
}
var myShoes = Shoes.Nike;
console.log(myShoes); // 0, 10 출력됨.

// 2. 문자형 이넘
enum Shoes2 {
  Nike = "나이키", //갖다대면 0, 1씩 추가되는 것이 보임
  Adidas = "아디다스",
}

var myShoes2 = Shoes2.Nike; // 이상한 문자? 출력
console.log(myShoes2); // '나이키' 출력됨

// 3-1. 이넘 활용 사례 (함수로 활용)
/* 예제
function askQuestion(answer: string) {
  if (answer === "yes") {
    console.log("정답입니다");
  }
  if (answer === "no") {
    console.log("오답입니다");
  }
}

// 이럴 경우, 이넘으로 활용할 수 있음
askQuestion('예스');
askQuestion('y');
askQuestion('YES');
*/

// 3-2. 3-1같은 타입을 이럴 때 활용: 이넘

enum Answer2 {
  Yes = "Y",
  No = "N",
}
function askQuestion(answer: Answer2) { //타입변경
  if (answer === Answer2.Yes) { // 들어온 파라미터 값이 단순한 문자열 비교가 아닌, 우리가 갖고있었던 두개의 타입 중에 하나인지를 비교하게 됨
    console.log("정답입니다");
  }
  if (answer === Answer2.No) {
    console.log("오답입니다");
  }
}

askQuestion(Answer2.Yes); // 이넘 이용해서 정의했기때문에, 이넘에 정의한 데이터만 넣을 수 있게됨
// askQuestion(Answer2.Yes2);

