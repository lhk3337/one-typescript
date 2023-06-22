import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(1);

  const onClickAdd = (text: string) => {
    setTodos([...todos, { content: text, id: idRef.current++ }]);
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onClickDelete = (id: number) => {
    setTodos(todos.filter((v) => v.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
      ))}
    </div>
  );
}

export default App;
