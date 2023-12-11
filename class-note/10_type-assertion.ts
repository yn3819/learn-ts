// 타입 단언(type assertion)
var A; //any
// var B = 10; //string

// var A = 'a';
A = 20;
A = "a";

// var B = A; //any
var B = A as string;

// 타입스크립트보다 개발자가 타입을 더 잘 알고 있다.
// ts, 너는 타입 신경쓰지 말고, 개발자가 정의한 타입으로 간주해라.

//DOM API 조작할 때 가장 많이 사용함!!! 예시)

