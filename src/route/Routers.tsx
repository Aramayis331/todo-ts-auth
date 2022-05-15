import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import { Iauth } from "../redux/types/usersTypes";

export interface Iroute {
    auth: Iauth
}

const Routers: FC<Iroute> = ({ auth }) => {
    if(auth.isAuth) {
        return  (
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/profile' element={<Profile auth={auth} />} />
                <Route path='*' element={<Navigate to='/' />} />
           </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        )
    }
}

export default Routers;




















// import { Navigate, Route, Routes } from "react-router-dom"
// import Home from "../pages/home/Home"
// import Login from "../pages/login/Login"
// import Register from "../pages/register/Register"

// const route = (isAuth: boolean) => {
//     if(isAuth) {
//         return  (
//             <Routes>
//                 <Route path='/' element={<Home />}/>
//                 <Route path='*' element={<Navigate to='/' />} />
//            </Routes>
//         )
//     } else {
//         return (
//             <Routes>
//                 <Route path='/login' element={<Login />}/>
//                 <Route path='/register' element={<Register />}/>
//                 <Route path='*' element={<Navigate to='/login' />} />
//             </Routes>
//         )
//     }
// }

// export default route;