import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Header from './components/header/Header';
import { selecAuth, selectUsersRegister } from './redux/selectors/userSelector';
import Routers from './route/Routers';

function App() {

  const users = useSelector(selectUsersRegister)
  const auth = useSelector(selecAuth)
  console.log(users, 'users')
  console.log(auth, 'auth')

	useEffect(() => {
		if(auth.isAuth) {
			localStorage.setItem('auth', JSON.stringify(auth))
		} else {
      localStorage.removeItem('auth')
    }
	}, [auth])

  return (
    <div className="App">
      <Header />
      <Routers auth={auth} />
    </div>
  );
}

export default App;