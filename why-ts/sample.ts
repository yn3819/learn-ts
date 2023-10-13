console.log('==============='); 
// 왜 index에 나오지 않을까?

function add(a: number,b: number): number{
    return a + b
}
add(25, 25)

console.log(add(10, 20)); // 30
// console.log(add(10, '20')); //1020

var result = add(10,20);
result.toLocaleString();
