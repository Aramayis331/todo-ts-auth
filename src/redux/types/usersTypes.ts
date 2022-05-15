import { UsersActionTypes } from "../actionTypes/usersActionTypes"

export interface Iusers {
    registers: IregisterUsers[],
    auth: Iauth
}

export interface IregisterUsers {
    login: string,
    password: string,
    name: string,
    age: number
}

export interface Iauth {
    token?: string,
    name?: string | undefined,
    age?: number | undefined,
    isAuth?: boolean
}

interface IaddRegisterUser {
    type: UsersActionTypes.ADD_REGISTER_USER,
    payload: { login: string, password: string, name: string, age: number }
}

interface IaddAuthUser {
    type: UsersActionTypes.ADD_AUTH_USER,
    payload: { login: string, password: string, isAuth: boolean, token: string }
}

interface IlogOutUser {
    type: UsersActionTypes.LOG_OUT_USER,
}

interface IcheckInAuth {
    type: UsersActionTypes.CHECK_IN_AUTH,
    payload: {
        user: Iauth
    }
}

export type UsersAction =  IaddRegisterUser | IaddAuthUser | IlogOutUser | IcheckInAuth