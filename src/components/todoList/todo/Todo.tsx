import './todo.scss';
import { FC } from 'react';
import { ITodoProps } from '../../../redux/types/todosTypes';
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';
import { addTodoBasket, cancelTodoEditing, updateTodoCheckbox, updateTodoEditing, updateValueEditingTodo } from '../../../redux/actions/todosAction';

const Todo: FC<ITodoProps> = ({ todo }) => {

    const dispatch = useDispatch()

    return (
        <div className='todo'>
            { !todo.isEditing && <span className={todo.isChecked ? 'todo__name__through' : 'todo__name'}>{todo.name}</span> }
            { todo.isEditing && <input className='todo_editing' type='text' value={todo.name} onChange={(e) => {
                dispatch(updateValueEditingTodo(todo.id ,e.target.value))
            }} /> }
            <div className='todo__buttons'>
                <span className={todo.isChecked ? 'checkboxTrue' : 'checkboxFalse'} 
                style={ {display: todo.isEditing ? 'none' : 'inline'} } onClick={() => {
                    dispatch(updateTodoCheckbox(todo.id, todo.isChecked))
                }}></span>
                <FontAwesomeIcon className='todo__button__remove' icon={faTrashCan} onClick={() => {
                   dispatch(addTodoBasket(todo))
                }}/>
                <FontAwesomeIcon className='todo__button__edit' icon={faPenToSquare} onClick={() => {
                    dispatch(updateTodoEditing(todo.id, todo.isEditing, todo.name))
                }}/>
                { todo.isEditing && <button className='todo__button_cancel' onClick={() => {
                    dispatch(cancelTodoEditing(todo.id, todo.oldName))
                }}>cancel</button> }
            </div>
        </div>
    )
}

export default Todo;