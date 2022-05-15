import { FC } from 'react';
import './todoForm.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions/todosAction';

const TodoForm: FC = () => {

    const {register, reset, formState: { errors } , handleSubmit} = useForm({mode: 'onChange'})
    const dispatch = useDispatch()

    return (
        <form onSubmit={handleSubmit((data) => {
            dispatch(addTodo(data.name))
            reset()
        })}>
            <input className='form__input' {...register('name', {
                required: 'Required',
                minLength: {
                    value: 2,
                    message: 'Min length 2'
                }
            })} type='text' placeholder='Add Todo' autoComplete='off'/>
            <button className='form__button' type='submit'>Add</button>
            {errors.name && <p className='form__error'>{errors.name.message}</p>}
        </form>
    )
}

export default TodoForm;