import { useForm } from 'react-hook-form';
import './login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAuthUser } from '../../redux/actions/usersAction';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {

	const navigate = useNavigate()
    const {register, reset, formState:{errors}, handleSubmit} = useForm({mode: 'onChange'})
    const [show, setShow] = useState(false)
	const dispatch = useDispatch()

    return (
        <form className='login' onSubmit={handleSubmit((data) => {
			dispatch(addAuthUser(data.login, data.password))
			navigate('/')
            reset()
        })}>
                <p className='login__titel'>Login to Your Account</p>
				<div className='login__input'>
					<input  type='text' className='login__input__text' id='login' placeholder=' ' autoComplete='off' 
					{...register('login', {
						required: 'Login is required!',
					})}
					/>
					<label className='login__input__label' htmlFor='login'>Login</label>
				</div>
				{errors.login && <p className='login__error'>{errors.login.message}</p>}
				<div className='login__input'>
					<input  type={show ? 'text' : 'password'} className='login__input__text' id='password' placeholder=' ' autoComplete='off' 
					{...register('password', {
						required: 'Password is required!',
					})}
					/>
					<label className='login__input__label' htmlFor='password'>Password</label>
					<div className='login__input__div__icon'>
						<FontAwesomeIcon icon={faEye} style={{display: show ? 'block' : 'none'}} onClick={() => setShow(false)}/>
						<FontAwesomeIcon icon={faEyeSlash} style={{display: show ? 'none' : 'block'}} onClick={() => setShow(true)}/>
					</div>
				</div>
				{errors.password && <p className='login__error'>{errors.password.message}</p>}
				<div>
					<button type='submit' className='login__button'>Sign in</button>
				</div>

        </form>
    )
}

export default Login;