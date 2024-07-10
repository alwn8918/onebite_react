// 5가지 요소 순회 및 탐색 메서드

// forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// includes
// 배열에 특정 요소가 있는지 확인
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

// indexOf
// 특정 요소의 인덱스를 찾아서 반환
// 얕은 비교 -> 객체값 비교 불가
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

let objArr = [{ name: "김미주" }, { name: "손흥민" }];
console.log(objArr.indexOf({ name: "손흥민" }));

// findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스 반환
// 객체값 비교 가능
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedIndex);

console.log(objArr.findIndex((item) => item.name === "손흥민"));

// find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 그대로 반환
let objArr2 = [{ name: "김미주" }, { name: "손흥민" }];
const finded = objArr2.find((item) => item.name === "손흥민");
console.log(finded);
