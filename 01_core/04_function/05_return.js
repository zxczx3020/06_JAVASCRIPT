
// return  반환문

function hello(name){
    // 반환문 이후의 문은 실행되지 않고 무시된다..
    return `${name}님 안녕하세요!`;
}

// 반환문은 리턴 키워드 뒤에 오는 값을 반환한다.
console.log(hello("홍길동"));

// 반환 값을 명시적으로 지정하지 않으면 undefined 가 반환된다..
function func(){
    console.log("함수가 호출되었습니다.");
    return;
    // 생략 가능
}
console.log(func());


// 함수를 매개변수로 전달하는 것도 가능하다..

const test = () => {
    console.log("test");
}
function result(a){
    a();
}
result(test);