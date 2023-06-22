import React, { useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
}

const Editor = ({ onClickAdd }: Props) => {
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
    </div>
  );
};

export default Editor;
