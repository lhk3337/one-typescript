import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";

type Action =
  | {
      type: "CREATE";
      data: {
        content: string;
        id: number;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((it) => it.id !== action.id);
  }
};

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있다");
  return dispatch;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(1);

  const onClickAdd = (text: string) => {
    dispatch({ type: "CREATE", data: { content: text, id: idRef.current++ } });
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onClickDelete = (id: number) => {
    dispatch({ type: "DELETE", id: id });
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <Editor />
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
