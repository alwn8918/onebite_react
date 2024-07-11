// 함수 표현식 (호이스팅의 대상이 되지 않음)

function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

let varB = function () {
  // 익명 함수
  console.log("funcB");
};

varB();

// 화살표 함수
let varC = (value) => value + 1;

console.log(varC(10));