import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ToDo from '../components/ToDo';
import { addToDo } from '../store';

function Home() {
  const [text, setText] = useState()

  const dispatch = useDispatch();
  const toDos = useSelector((state => state))

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText("")
    dispatch(addToDo(text))
  }


  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>추가</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo toDo={toDo} key={toDo.id} />
        ))
        }
      </ul>
    </div>
  )
}


export default Home