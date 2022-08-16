import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { deleteToDo } from '../store';


function Detail() {
  const [targetId, setTargetId] = useState({});
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id)
  console.log(toDos)

  useEffect(() => {
    if (toDos.length > 0) {
      const target = toDos.find((toDo) => toDo.id === parseInt(id))
      console.log(target)
      if (target) {
        setTargetId(target)
      }
    }
  }, [id, toDos])
  console.log(targetId)

  const onDelete = () => {
    dispatch(deleteToDo(targetId.id))
    navigate('/');
  }

  return (
    <div>
      <h1>{targetId.text}</h1>
      <h4>Created at: {targetId.id}</h4>
      <button onClick={() => navigate('/')}>뒤로</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  )
}

export default Detail