import { memo } from 'react';
import { useSelector } from 'react-redux';

// Components
import TodoItem from './TodoItem';

const TodoList = ({ setEditValue, setEditId }) => {
  const { todoList } = useSelector((state) => state.todo);

  const todoListContent = (
    todoList.map((todoItem) => {
      return (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          value={todoItem.value}
          done={todoItem.done}
          setEditValue={setEditValue}
          setEditId={setEditId}
        />
      );
    })
  );
  
  return (
    <ol>
      {todoListContent}
    </ol>
  );
};

export default memo(TodoList);