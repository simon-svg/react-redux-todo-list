import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_TODO } from './todo.actionTypes';

export const addTodo = (todoItem) => {
  return {
    type: ADD_TODO,
    payload: todoItem,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const changeTodo = (item) => {
  return{
    type: CHANGE_TODO,
    payload: item,
  }
}