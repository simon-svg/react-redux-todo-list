import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

// Conponents
import TodoList from '../../components/pages/Todo/TodoList';

// Actions
import { addTodo } from '../../store/todo/todo.actions';

const Todo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo({
      id: nanoid(),
      done: false,
      value,
    }));

    setValue('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      {/* The form Might be a component */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <TodoList />

    </div>
  );
};

export default Todo;