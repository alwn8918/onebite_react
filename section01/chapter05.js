// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN;
console.log(1 * "hello"); // -> NaN

// 2. String Type
let myName = "김미주";
let myLocation = "고양";
let myIntroduce = myName + myLocation;

console.log(myIntroduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);
// -> 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undifined Type
let none;
console.log(none);
