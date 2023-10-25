// ES2015 (ES6)
// 클래스: 인스턴스 만드는 것

// 2. 생성자 함수. = 1번과 2번 코드는 완전히 동일함
function  Person(name, age){
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 30)

//1. 클래스 정의
class Person {
    // 클래스 로직

     constructor(name, age) { //초기화메소드
        console.log('생성되었습니다')
        this.name = name;
        this.age = age;
        console.log(seho); // undefined
    } 
}

// new Person(); //constructor 로직이 실행됨 "생성되었습니다" 출력될것
var seho = new Person('세호', 30)
console.log(seho); //출력됨
