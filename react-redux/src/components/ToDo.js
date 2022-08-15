import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../store';

function ToDo({ toDo }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteToDo(toDo.id))
  }

  return (
    <div style={{ display: 'flex' }}>
      <li>{toDo.text}</li>
      <button onClick={onDelete}>삭제</button>
    </div>
  )
}

export default ToDo