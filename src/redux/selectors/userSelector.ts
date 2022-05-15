import { AppState } from './../reducers/rootReducer';

export const selecAuth = ((state:AppState) => state.users.auth)
export const selectUsersRegister = ((state: AppState) => state.users.registers)