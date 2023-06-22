import React from "react";
import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {}

const TodoItem = ({ id, content }: Props) => {
  const dispatch = useTodoDispatch();
  return (
    <div>
      {id}. {content}
      <button onClick={() => dispatch.onClickDelete(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
