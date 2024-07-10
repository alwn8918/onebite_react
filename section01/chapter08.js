// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undifined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // var1, var2 중에 널이 아닌 값을 찾아냄, 둘 다 아니라면 앞을 출력
console.log(var4);

let userName = "김미주";
let userNickName = "Nickname";

let displayName = userName ?? userNickName; // userName이 널이 아니면 userName 저장, 널이면 userNickName 저장
console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능

let var7 = 1;
var7 = "Hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수"; // 조건식? 참:거짓
console.log(res);
