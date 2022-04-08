import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_TODO } from './todo.actionTypes';

const initialState = {
  todoList: [
    {
      id: 1,
      value: 'mi ban',
      done: false,
    }
  ],
  valodya: null
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
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
    case CHANGE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) => item.id == action.payload.id ? action.payload : item)
      };
    default:
      return state;
  }
};

export default todoReducer;