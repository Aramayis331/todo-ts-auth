import { FC } from 'react';
import { ITodoProps } from '../../../redux/types/todosTypes';
import { faEject, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './todoBasket.scss';
import { useDispatch } from 'react-redux';
import { cancelTodoBasket, removeTodoBasket } from '../../../redux/actions/todosAction';

const TodoBasket: FC<ITodoProps> = ({ todo }) => {

    const dispatch = useDispatch()

    return (
        <div className='todo'>
            <span className='todo__name'>{todo.name}</span>
            <div>
                <FontAwesomeIcon icon={faEject} className='todo__basket__eject' onClick={() => {
                    dispatch(cancelTodoBasket(todo))
                }}/>
                <FontAwesomeIcon icon={faTrashCan} className='todo__basket__remove' onClick={() => {
                    dispatch(removeTodoBasket(todo.id))
                }}/>
            </div>
        </div>
    )
}

export default TodoBasket;