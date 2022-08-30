import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

function ToDo({ toDo }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteToDo(toDo.id));
  };

  return (
    <div style={{ display: "flex" }}>
      <Link to={`/${toDo.id}`}>{toDo.text}</Link>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default ToDo;
