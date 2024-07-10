// 객체 생성
let obj1 = new Object(); // 객체 생성지
let obj2 = {}; // 객체 리터럴 (대부분)

// 객체 프로퍼티 (key: value)
let person = {
  name: "김미주",
  age: 22,
  hobby: "토트넘 사랑하기",
  extra: {},
  10: 20,
  "like dog": true, // 키에 띄어쓰기 있으면 따옴표
};

// 객체 프로퍼티 다루는 방법
// 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"]; // 따옴표와 함께 키 전달
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 새로운 프로퍼티 추가하는 방법
person.job = "student";
person["favoriteFood"] = "김치볶음밥";

console.log(person);

// 프로퍼티 수정하는 방법
person.job = "university student";

// 프로퍼티 삭제하는 방법
delete person.job;
console.log(person);

// 프로퍼티의 존재 유무 확인하는 방법 (In)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);
