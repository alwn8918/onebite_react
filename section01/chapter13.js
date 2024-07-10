// 콜백 함수
function main(value) {
  value();
}

function sub() {
  console.log("I am sub");
}

main(() => {
  console.log(1);
});

// 활용

// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }
// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});
repeat(5, (idx) => {
  console.log(idx * 2);
});
repeat(5, (idx) => {
  console.log(idx * 3);
});
