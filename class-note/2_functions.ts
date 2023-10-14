//1. 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// 2. 함수에 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 3. 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b;
}

// sum2(10,20,30,40,50) //js는 유연하게 안넣지만, ts는 인수 개수 잘못가져왔다고 알려줌

// 4. 함수의 옵셔널 파라미터 : ? 넣어도되고, 안넣어도되고
function log(a: string, b?: string, c?: string) {}
log("hello");
log("hello ts", 'abc');
