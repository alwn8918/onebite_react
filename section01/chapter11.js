// 함수 선언
function getArea(width, height) {
  let area = width * height;

  function another() {
    // 중첩함수
    console.log("another");
  }

  another();
  return area;
}

// 함수 호출
let area = getArea(10, 20);
console.log(area);
