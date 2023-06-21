import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
export interface Todo {
  id: number;
  content: string;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(1);

  const onClickAdd = (text: string) => {
    setTodos((prev) => [...prev, { content: text, id: idRef.current++ }]);
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} todos={todos} />
    </div>
  );
}

export default App;
