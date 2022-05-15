import { TodosActionTypes } from "../actionTypes/todoActionTypes";

export interface ITodoProps {
    todo: ITodo
}

export interface IinitialTodos {
    todos: ITodo[],
    todosBasket: ITodo[]
}

export interface ITodo {
    id: number,
    name: string,
    oldName: string,
    isChecked: boolean,
    isEditing: boolean,
}

interface IaddTodos {
    type: TodosActionTypes.ADD_TODO
    payload: { name: string }
} 

interface IupdateTodosEditing {
    type: TodosActionTypes.UPDATE_TODO_EDITING,
    payload: { id: number, isEditing: boolean, oldName: string }
}

interface IaddTodoBasket {
    type: TodosActionTypes.ADD_TODO_BASKET,
    payload: { todo: ITodo }
}

interface IupdateTodosCheckbox {
    type: TodosActionTypes.UPDATE_TODO_CHECKBOX,
    payload: { id: number, isChecked: boolean }
}

interface IremoveTodoBasket {
    type: TodosActionTypes.REMOVE_TODO_BASKET,
    payload: { id: number }
}

interface IcancelTodoBasket {
    type: TodosActionTypes.CANCEL_TODO_BASKET,
    payload: { todo: ITodo }
}

interface IupdateValueEditingTodo {
    type: TodosActionTypes.UPDATE_VALUE_EDITING_TODO,
    payload: { id: number, name: string }
}

interface IcancelTodoEditing {
    type: TodosActionTypes.CANCEL_TODO_EDITING,
    payload: { id: number, oldName: string }
}

export type ActionTypes = IaddTodos | IupdateTodosEditing | IaddTodoBasket | IupdateTodosCheckbox
                          | IremoveTodoBasket | IcancelTodoBasket | IupdateValueEditingTodo
                          | IcancelTodoEditing