import { useEffect } from "react";

const Even = () => {
  // 3. 언마운트: 죽음
  useEffect(() => {
    // useEffect 콜백 함수가 반환하는 함수 : 클린업, 정리함수 / useEffect가 끝날 때 실행
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
