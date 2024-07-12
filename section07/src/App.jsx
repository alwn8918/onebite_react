import { useState, useEffect, useRef } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트: 탄생
  // deps를 빈 배열로
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  // deps 생략
  useEffect(() => {
    // 마운트됐을 때는 출력하지 않고 업데이트 된 이후부터 출력
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // count state 값이 바뀌면 콜백 함수 실행
  useEffect(() => {
    console.log(`count ${count} / input: ${input}`);
  }, [count, input]);
  // 의존성 배열 (count 배열에 의존함)
  // dependency array = deps

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
