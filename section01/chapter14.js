// 스코프
// 전역 스코프, 지역 스코프

let a = 1; // 전역

function funcA() {
  let b = 2; // 지역
  console.log(a);
}

funcA();
console.log(b);

if (true) {
  let c = 1;
}

console.log(c);
