// 함수 표현식

// 함수명을 생략할 수 있다.
let hello = function(name){
    return `${name}님 안녕하세요`;
}

console.log(hello("홍길동"));

let calc = function add(a,b){   // calc 은 변수명   add 는 함수명
    return a+b;
}

console.log(calc(10,20));
// console.log(add(10,20));       // 함수명으로는 넣을 수 없다