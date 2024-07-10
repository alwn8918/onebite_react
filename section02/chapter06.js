// 배열 순회
let arr = [1, 2, 3];

// 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of 반복문
for (let item of arr) {
  console.log(item);
}

// 객체 순회
let person = {
  name: "김미주",
  age: 22,
  hobby: "토트넘 사랑하기",
};

// Object.keys 이용
// -> 객체에서 key 값을 뽑아서 새로운 배열으로 반환
let keys = Object.keys(person);
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열으로 반환
let values = Object.values(person);
for (let value of values) {
  console.log(value);
}

// for in
for (let key in person) {
  console.log(key);
}
