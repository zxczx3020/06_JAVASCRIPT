// 숫자 타입으로 변환

console.log("==== 숫자 타입으로 변환 ====");

// 산술 연산자
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % 'java');

// 비교연산자
console.log(10 > '5');

console.log("===========");

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');
console.log(+'1');
console.log(+"javascript");
console.log(+true);
console.log(+false);
console.log(undefined);
console.log(+[]);
console.log(null === undefined);