import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// export const addToDo = (text) => {
//   return {
//     type: ADD,
//     text
//   }
// }

// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id
//   }
// }

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

console.log(addToDo(), deleteToDo());

const reducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};
console.log(addToDo(), deleteToDo());

const store = createStore(reducer);

export default store;
