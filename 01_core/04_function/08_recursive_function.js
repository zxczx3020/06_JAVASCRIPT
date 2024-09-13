
// 재귀함수
// 함수가 자기 자신을 호출하는 것을 재귀호출 이라고 한다..
// 재귀 호출을 수행하는 함수인 재귀 함수는 반복되는 처리를 위해 사용한다..

// 팩토리얼
function factorial(n){
    // n이 1 이하일 때 재귀를 멈춘다..
    if(n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n-1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));