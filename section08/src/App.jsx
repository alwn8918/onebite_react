import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    data: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "토트넘 경기 보기",
    data: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "티켓팅 하기",
    data: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
