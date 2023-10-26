class Person2 {
  private name: string; //클래스 안에서만
  public age: number;
  readonly log: string;

  construtor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

/*
// 리액트 예전 문법
class App extends react.Component{

}

// 리액트: 훅 기반의 함수형 코드
function App(){
    return <div>www</div>
}

new isVueAvailable({
    el: '',
    setup(){

    }
})
*/
