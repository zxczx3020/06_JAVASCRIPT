
// 프로퍼티 접근

let dog = {
    name : "뽀삐",
    eat : function(food){
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`);
    }

}

console.log(dog.name);
dog.eat("바나나");

dog['eat']("바나나");
console.log(dog['name']);

let obj = {
    'dash - key' : 'dash : value',
    0:1
}

// 식별자 네이밍 규칙
// 허용되는 문자
// 영문자, 숫자(첫 글자는 올 수 없음)
// 예약어는 사용할 수 없음
// 대소문자 구분
// 카멜케이스 사용

console.log(obj['dash - key']);
// console.log(obj.dash-key);

console.log(obj[0]);
console.log(obj['0']);
// console.log(obj.0);