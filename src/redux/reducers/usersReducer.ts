import { UsersActionTypes } from "../actionTypes/usersActionTypes";
import { Iauth, Iusers, UsersAction } from "../types/usersTypes";

const initialUsers: Iusers = {
    registers: [],
    auth: { } as Iauth,
}

export const usersReducer = (state = initialUsers, action: UsersAction): Iusers => {
    switch(action.type) {
        case UsersActionTypes.ADD_REGISTER_USER: 
            return {...state, registers: [...state.registers, action.payload]}
        case UsersActionTypes.ADD_AUTH_USER:
            const resAddAuthUser = state.registers.find(user => (user.login === action.payload.login) && (user.password === action.payload.password))
            if(resAddAuthUser) {
                return {...state, auth: {token: action.payload.token, name: resAddAuthUser?.name, age: resAddAuthUser?.age,  isAuth: true}}
            } else {
                return state
            }
        case UsersActionTypes.LOG_OUT_USER:
            return {...state, auth: {}}
        case UsersActionTypes.CHECK_IN_AUTH:
            return {...state, auth: action.payload.user}

        default:
            return state
    }
}