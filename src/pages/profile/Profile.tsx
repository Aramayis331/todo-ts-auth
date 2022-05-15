import { FC } from 'react';
import { Iroute } from '../../route/Routers';
import './profile.scss';

const Profile:FC<Iroute> = ({ auth }) => {
    return (
        <div className='profile'>
            <div>
                <span>name: </span>
                <span>{auth.name}</span>
            </div>
            <div>
                <span>age: </span>
                <span>{auth.age}</span>
            </div>
        </div>
    )
}

export default Profile;