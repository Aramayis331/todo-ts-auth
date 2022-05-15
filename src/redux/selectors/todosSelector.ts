import { AppState } from "../reducers/rootReducer";

export const selectTodos = ((state: AppState) => state.todos.todos)
export const selectTodosBasket = ((state: AppState) => state.todos.todosBasket)