function fetchItems(): string[]{
    var items = ['a', 'b', 'c']
    return items
}

var result = fetchItems(); //1줄에 리턴타입 안줬어도 타입추론에 의해 스트링으로 뜸
console.log(result);
fetchItems()

function fetchItems2(): Promise<string[]> {
    let items: string[] = ['a', 'b', 'c']
    return new Promise(function(resolve){
        resolve(items);
    })
}
fetchItems2()

// 10줄에 Promise<unknown>이 뜸. 타입 잘 모르겠다는 뜻. 비동기 코드들 잘 모르겠다?
// 실제 서비스에서는 엑시오스 같은 프로미스 반환하는 api 쓰게될 것임