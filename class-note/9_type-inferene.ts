var a = 'abc';

function getB(b = 10){
    var c = 'hi'; //함수 내부에 변수 선언
    // return b;
    return b + c; //getB(b?: number): string. 결과적으로 스트링
}

// js) 10 + '10' = 1010(문자열 취급)