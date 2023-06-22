import React, { useState } from "react";
import { useTodoDispatch } from "../App";

const Editor = () => {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>Add</button>
    </div>
  );
};

export default Editor;
