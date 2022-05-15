import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { checkInAuth, logOutUser } from '../../redux/actions/usersAction';
import { selecAuth } from '../../redux/selectors/userSelector';
import './header.scss';

const Header: FC = () => {

    const location = useLocation()
	const dispatch = useDispatch()
	const auth = useSelector(selecAuth)

	useEffect(() => {
		const authString = localStorage.getItem('auth')
		if(authString) {
			const auth = JSON.parse(authString)
			dispatch(checkInAuth(auth))
		}
	}, [])

    return (
        <div className='header'>
            {
				(location.pathname === '/register') 
				&&
				(
				<div className='header__text__sign'>
					<p>Already have an account?</p>
					<NavLink to='/login'>Sign in →</NavLink>
				</div>
				)
			}
			{
				(location.pathname === '/login') 
				&&
				(
				<div className='header__text__sign'>
					<p>You are not registered?</p>
					<NavLink to='/register'>Sign up →</NavLink>
				</div>
				)
			}
			{
				(location.pathname === '/' && !auth.isAuth) 
				&&
				(
				<div className='header__div__buttons'>
					<NavLink to='/login'><button>Sign in</button></NavLink>
					<NavLink to='/register'><button className='header__button__signup'>Sign up</button></NavLink>
				</div>
				)
			}
			{ 
				(auth.isAuth && 
				<div className='header__div__buttons'>
					<div>
						<NavLink to='/' className={({isActive}) => isActive ? 'header__profile__active' : 'header__profile'}>Home</NavLink>
						<NavLink to='/profile' className={({isActive}) => isActive ? 'header__profile__active' : 'header__profile'}>Profile</NavLink>
					</div>
					<NavLink to='/login'><button className='header__button__signup' onClick={() => {
						dispatch(logOutUser())
					}}>Log out</button></NavLink>
				</div>
				)
			}
        </div>
    )
}

export default Header;