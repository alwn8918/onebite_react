// Date 객체 생성
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date(2003, 10, 3, 15, 2, 22);
console.log(date2);

// 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

// 시간 요소 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 시간 수정
date1.setFullYear(2023);
date1.setMonth(10);
date1.setDate(3);
date1.setHours(15);
date1.setMinutes(2);
date1.setSeconds(22);
console.log(date1);

// 시간을 여러 포맷으로 출력하기
console.log(date2.toDateString());
console.log(date2.toLocaleDateString());
