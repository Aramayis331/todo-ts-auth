import './todoList.scss';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos, selectTodosBasket } from '../../redux/selectors/todosSelector';
import Todo from './todo/Todo';
import TodoBasket from './todoBasket/TodoBasket';

const TodoList: FC = () => {

    const todos = useSelector(selectTodos)
    const todosBasket = useSelector(selectTodosBasket)

    return (
        <div className='todos'>
            <div className='todo__list'>
                <p className='todo__list__titel'>Todo List</p>
                {todos.length === 0 && <p className='todo__list__empty'>Todo List Empty</p>}
                {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
            </div>
            <div className='todo__basket'>
                <p className='todo__basket__titel'>Todo Basket</p>
                {todosBasket.length === 0 && <p className='todo__basket__empty'>Todo Basket Empty</p>}
                {todosBasket.length !== 0 && todosBasket.map(todo => <TodoBasket key={todo.id} todo={todo} /> )}
            </div>
        </div>
    )
}

export default TodoList;
