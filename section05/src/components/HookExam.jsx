import useInput from "../hooks/useInput";

// 3가지 hook 팁
// 1.함수 컴포넌틔, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 불가 (조건문, 반복문 안에서 호출 불가)
// 3. 나만의 훅 (Custon Hook) 가능

const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
