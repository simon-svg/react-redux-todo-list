import { useDispatch } from 'react-redux';

// Actions
import { deleteTodo, toggleTodo } from '../../../../store/todo/todo.actions';

const TodoItem = ({value, done, id, setEditValue, setEditId}) => {

  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleEditValue = () => {
    setEditValue(value)
    setEditId(id)
  }

  return (
    <li>
      <input type="checkbox" checked={done} onChange={handleToggle} />
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{value}</span>
      <button onClick={handleDeleteTodo}>x</button>
      <button onClick={handleEditValue}>edit</button>
    </li>
  );
};

export default TodoItem;