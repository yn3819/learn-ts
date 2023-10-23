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

// 3. 이넘 활용 사례 (함수로 활용)
