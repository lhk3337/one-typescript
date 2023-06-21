import React, { useState } from "react";
import { Todo } from "../App";

interface Props {
  onClickAdd: (text: string) => void;
  todos: Todo[];
}

const Editor = ({ onClickAdd, todos }: Props) => {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickButton = () => {
    onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>Add</button>
      <div>
        {todos.map((v) => (
          <div key={v.id}>
            <span>
              {v.id}. {v.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editor;
