import { FC, } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRegisterUser } from '../../redux/actions/usersAction';
import './register.scss';

const Register: FC = () => {

    const {register, handleSubmit, reset, formState: { errors }} = useForm({mode: "onChange"})
    const navigate = useNavigate()
	const dispatch = useDispatch()

    return (
        <form className='register' onSubmit={handleSubmit((data) => {
			dispatch(addRegisterUser(data.login, data.password, data.name, data.age))
            navigate('/login')
            reset()
        })}>
            <p className='login__titel'>Registration</p>
				<div className='login__input'>
					<input  type='text' className='login__input__text' id='login' placeholder=' ' autoComplete='off' 
					{...register('login', {
						required: 'Login is required!',
                        pattern: {
							value:  /^[A-Za-z0-9]{3,16}$/,
							message: 'Login should be 3-16 characters and shouldn\'t include any special character!',
						},
					})}
					/>
					<label className='login__input__label' htmlFor='login'>Login</label>
				</div>
				{errors.login && <p className='login__error'>{errors.login.message}</p>}
				<div className='login__input'>
					<input  type='text' className='login__input__text' id='password' placeholder=' ' autoComplete='off' 
					{...register('password', {
						required: 'Password is required!',
                        pattern: {
							value:  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}/,
							message: 'Password should be 8-20 characters and  at least 1  number and 1 uppercase and lowercase letter!',
						},
					})}
					/>
					<label className='login__input__label' htmlFor='password'>Password</label>
				</div>
				{errors.password && <p className='login__error'>{errors.password.message}</p>}
                <div className='login__input'>
					<input  type='text' className='login__input__text' id='name' placeholder=' ' autoComplete='off' 
					{...register('name', {
						required: 'Name is required!',
                        pattern: {
							value:  /^[A-Za-z]{3,16}$/,
							message: 'Name should be 3-16 characters and shouldn\'t include any special character!',
						},
					})}
					/>
					<label className='login__input__label' htmlFor='name'>Name</label>
				</div>
				{errors.name && <p className='login__error'>{errors.name.message}</p>}
                <div className='login__input'>
					<input  type='number' className='login__input__text' id='age' placeholder=' ' autoComplete='off' 
					{...register('age', {
						required: 'Age is required!',
                        pattern: {
							value:  /^[0-9]{1,3}$/,
							message: 'Age should be 1-3 number!',
						},
					})}
					/>
					<label className='login__input__label' htmlFor='age'>Age</label>
				</div>
				{errors.age && <p className='login__error'>{errors.age.message}</p>}
				<button type='submit' className='login__button'>Sign up</button>
        </form>
    )
}

export default Register;