// 5가지의 배열 변형 메서드

// filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "손흥민", hobby: "축구" },
  { name: "이강인", hobby: "축구" },
  { name: "김미주", hobby: "잠" },
];
const footballPeople = arr1.filter((item) => item.hobby === "축구");
console.log(footballPeople);

// map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});
console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// sort
// 배열을 사전순으로 정렬
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

let arr4 = [10, 3, 5];
// 오름차순 (내림차순은 반대로)
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1;
  } else {
    // 자리 바꾸지 마라
    return 0;
  }
});
console.log(arr4);

// toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환
let arr5 = ["c", "a", "a"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr6 = ["hi", "im", "miju"];
const joined = arr6.join(" ");
console.log(joined);
