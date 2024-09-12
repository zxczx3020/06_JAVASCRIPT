
// 빌트인 전역 함수

// isFinite
// 전달 받은 인수가 정상적인 유한수인지 검사하는 함수
// 유한수이면 true, 무한수이면 false (NaN 도 false)
console.log(isFinite(10));
console.log(isFinite("10"));
console.log(isFinite(null)); // 문자열 널 값을 정수형 0으로 변환해서 검사
console.log(typeof null);

console.log(isFinite(Infinity));
console.log(isFinite(NaN));
console.log(isFinite("abc"));
console.log("======================")

// isNaN
// 전달 받은 인수가 NaN 인지 검사하여 결과를 불리언으로 반환
// 전달 받은 인수가숫자가 아닌 경우 숫자로 타입 변환 후 검사 진행

console.log(isNaN(NaN));
console.log(isNaN(10));

console.log(isNaN("abc"));
console.log(isNaN(""));
console.log(isNaN(true));
console.log(isNaN(undefined));

console.log("----------------")

// parseFloat
console.log(parseFloat("10.01"));

// 공백으로 구분 된 문자열은 첫번째만 반환
console.log(parseFloat("10 20 30"));  //parseFloat 숫자로 변환  첫번째 문자열을 숫자로 변환해서 출력
console.log(parseFloat(10.01));

// 숫자가 아닌 문자열은 제외하고 반환
console.log(parseFloat("10cm"));

// 앞 뒤 공백은 무시한다..
console.log(parseFloat("   1004   "));

// encodeURI
// URI 를 문자열로 전달 받아 어떤 시스템에서도 읽을 수 있게 변환
const uri = "http://greedy.com?name=홍길동&job=student";
const enc = encodeURI(uri);
console.log(enc);

// decideURI
// 인코딩 된 URI 를 처리 이전으로 디코딩한다.

const dec = decodeURI(enc);
console.log(dec);