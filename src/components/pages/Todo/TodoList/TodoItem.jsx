import { useDispatch } from 'react-redux';

// Actions
import { deleteTodo, toggleTodo } from '../../../../store/todo/todo.actions';

const TodoItem = ({value, done, id}) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li>
      <input type="checkbox" checked={done} onChange={handleToggle} />
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{value}</span>
      <button onClick={handleDeleteTodo}>x</button>
    </li>
  );
};

export default TodoItem;