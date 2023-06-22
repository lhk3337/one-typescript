import React from "react";
import { Todo } from "../types";

interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

const TodoItem = ({ id, content, onClickDelete }: Props) => {
  console.log(id);
  return (
    <div>
      {id}. {content}
      <button onClick={() => onClickDelete(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
