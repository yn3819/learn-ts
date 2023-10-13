// 1번 오브젝트 생성
// const nunu = {
//     q: 'consume',
//     w: 'snowball'
// }

// const garen = {
//     q: 'strike',
//     w: 'courge'
// }

// 2번 class 기계()(한줄로...)
// this: 기계로부터 생성되는 오브젝트(멋진 말로 instance)

function 기계() {
  this.q = "consume";
  this.w = "snowball";
}

// 오브젝트 뽑는 법(객체 지향 문법의 핵심)
var nunu = new 기계();
var garen = new 기계();

// console.log(nunu);

// 3번 class
function 기계(구멍1, 구멍2) {
  this.q = 구멍1;
  this.w = 구멍2;
}

var nunu = new 기계("consume", "구멍22");
var garen = new 기계("strike", "구멍22");

console.log(nunu);
console.log(garen);

/** Class
 * 비슷한 object 많이 만들 일 있으면 class 쓰면 됨
 -비슷한 오브젝트 뽑아내는 기계 
 * 
*/

// 4번 클래스 문법
class Hero {

    constructor(구멍1, 구멍2){
        this.q = 구멍1;
        this.w = 구멍2;

    }
}
// new Hero() : 생성됨, 변수에 담아서 쓰던가 하기
var hero = new Hero('1', '2')
// console.log(hero);
console.log(hero);