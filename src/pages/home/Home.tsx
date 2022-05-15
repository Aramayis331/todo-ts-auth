import './home.scss';
import { FC } from 'react';
import TodoForm from '../../components/todoForm/TodoForm';
import TodoList from '../../components/todoList/TodoList';

const Home: FC = () => {
    return (
        <div className='home'>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Home;