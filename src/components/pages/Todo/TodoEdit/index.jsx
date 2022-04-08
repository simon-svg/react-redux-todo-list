import { useDispatch } from "react-redux";

// Actions
import { changeTodo } from '../../../../store/todo/todo.actions';

const TodoEdit = ({ editValue, setEditValue, editId }) => {
    const dispatch = useDispatch();

    const handleChangeValue = (e) => {
        setEditValue(e.target.value)
    }

    const handleChange = (e) => {
        e.preventDefault();

        const newTodo = {
            id: editId,
            value: editValue,
            done: false,
        }

        dispatch(changeTodo(newTodo))
    }

    return (
        <form onSubmit={handleChange}>
            <input type="text" placeholder="edit" onChange={handleChangeValue} value={editValue} />
            <button>edit</button>
        </form>
    )
}

export default TodoEdit;