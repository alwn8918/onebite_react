// if
let num = 9;
if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참입니다!");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else {
  console.log("조건이 거짓입니다!");
}

// switch
// if문과 동일한 기능
// 다수의 조건을 처리할 때 더 직관적
let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "sanke": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default:
    console.log("목록에 없습니다.");
}
