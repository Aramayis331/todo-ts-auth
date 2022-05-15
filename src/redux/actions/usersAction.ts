import { UsersActionTypes } from "../actionTypes/usersActionTypes"
import { Iauth, UsersAction } from "../types/usersTypes"

export const addRegisterUser = (newLogin: string, newPassword:string, newName:string, newAge:number): UsersAction => {
    return {
        type: UsersActionTypes.ADD_REGISTER_USER,
        payload: {
            login: newLogin,
            password: newPassword,
            name: newName,
            age: newAge 
        }
    }
}

export const addAuthUser = (newLogin: string, newPassword: string): UsersAction => {
    return {
        type: UsersActionTypes.ADD_AUTH_USER,
        payload: {
            token: 'Axzc545798wqeasdsadacxzcASDZXCZXC46as8d7zxcasdasdzxc',
            login: newLogin,
            password: newPassword,
            isAuth: false
        }
    }
}

export const logOutUser = (): UsersAction => {
    return {
        type: UsersActionTypes.LOG_OUT_USER
    }
}

export const checkInAuth = (newUser: Iauth): UsersAction => {
    return {
        type: UsersActionTypes.CHECK_IN_AUTH,
        payload: {
            user: newUser
        }
    }
}