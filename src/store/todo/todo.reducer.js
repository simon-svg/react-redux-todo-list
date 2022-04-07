import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todo.actionTypes';

const initialState = {
  todoList: [],
  valodya: null
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('mtav');
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todoItem) => todoItem.id !== action.payload)
      };
    case TOGGLE_TODO: 
      const newTodoList = state.todoList.map((todoItem) => {
        return {
          ...todoItem,
          done: todoItem.id === action.payload ? !todoItem.done : todoItem.done
        };
      });

      return {
        ...state,
        todoList: newTodoList,
      };
    default:
      return state;
  }
};

export default todoReducer;