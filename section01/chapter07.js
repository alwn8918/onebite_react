// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 3. 복합 대입 연산자
let num7 = 10;
num7 = num7 + 20;
num7 += 20;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
num8++; // 후위연산
console.log(num8);
console.log(++num8); // 전위연산

// 5. 논리 연산자
let or = true || false; // 하나라도 true면 true
let and = true && false; // 둘 다 true여야 true
let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
let commp1 = 1 === 2; //(==는 자료형까지 비교하지 않음 ex. 1=="1" true)
let comp2 = 1 !== 2;
console.log(commp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);