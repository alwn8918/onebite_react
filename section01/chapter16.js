// 상수 객체
const animal = {
  type: "강아지",
  name: "미꼬",
  color: "white",
};

// 조작 가능
animal.age = 3;
animal.name = "바보";
delete animal.color;

// 메서드 (값이 함수인 프로퍼티) -> 동작 정의
const person = {
  name: "김미주",
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
