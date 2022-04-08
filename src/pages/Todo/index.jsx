import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

// Conponents
import TodoList from '../../components/pages/Todo/TodoList';
import TodoEdit from '../../components/pages/Todo/TodoEdit';

// Actions
import { addTodo } from '../../store/todo/todo.actions';

const Todo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [editId, setEditId] = useState('');
  const [editValue, setEditValue] = useState('');

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
        <input type="text" value={value} onChange={handleChange} placeholder="add" />
        <button type="submit">Add</button>
      </form>
      <TodoEdit editValue={editValue}  setEditValue={setEditValue} editId={editId} />
      <TodoList setEditValue={setEditValue} setEditId={setEditId} />

    </div>
  );
};

export default Todo;