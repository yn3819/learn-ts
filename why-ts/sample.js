function sum(a,b){
    return a + b
}

console.log(sum(10, 20)); // 30
console.log(sum(10, '20')); //1020

var restult = sum(10,20);
result.toLocaleString();

// js에서 ts처럼 쓰는 법
// @ts-check

/**
 *@param {number} a 첫번째 숫자
 *@param {number} b 두번째 숫자
 *
 */

function sum(a, b){
  return a+b;
}

// 12줄때문에 체크해줘야하는데 안되네
sum(10, '20'); //자바스크립트에선 알려주지 않음
