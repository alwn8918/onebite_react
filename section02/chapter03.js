// 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[3];

let [one, two, three, four = 4] = arr; // 대괄호
console.log(one, two, three, four);

// 객체의 구조 분해 할당
let person = {
  name: "김미주",
  age: 22,
  hobby: "토트넘 사랑하기",
};

let { name, age: myAge, hobby } = person; // 중괄호
console.log(name, myAge, hobby);

// 객체 구조 분해 할당 이용해서 함수의 매개변수 받는 방법
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func(person);
