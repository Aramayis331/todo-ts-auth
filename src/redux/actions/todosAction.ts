import { ActionTypes, ITodo } from './../types/todosTypes';
import { TodosActionTypes } from "../actionTypes/todoActionTypes"

export const addTodo = (newName: string): ActionTypes => {
    return {
        type: TodosActionTypes.ADD_TODO,
        payload: {
            name: newName
        }
    }
}

export const updateTodoEditing = (newId: number, newEditing: boolean, newValue: string): ActionTypes => {
    return {
        type: TodosActionTypes.UPDATE_TODO_EDITING,
        payload: {
            id: newId,
            isEditing: !newEditing,
            oldName: newValue
        }
    }
}

export const addTodoBasket = (newTodo: ITodo): ActionTypes => {
    return {
        type: TodosActionTypes.ADD_TODO_BASKET,
        payload: {
            todo: newTodo
        }
    }
}

export const updateTodoCheckbox = (newId: number, newValue: boolean): ActionTypes => {
    return {
        type: TodosActionTypes.UPDATE_TODO_CHECKBOX,
        payload: {
            id: newId,
            isChecked: !newValue
        }
    }
}

export const removeTodoBasket = (newId: number): ActionTypes => {
    return {
        type: TodosActionTypes.REMOVE_TODO_BASKET,
        payload: {
            id: newId
        }
    }
}

export const cancelTodoBasket = (newTodo: ITodo): ActionTypes => {
    return {
        type: TodosActionTypes.CANCEL_TODO_BASKET,
        payload: {
            todo: newTodo
        }
    }
}

export const updateValueEditingTodo = (newId: number, newValue: string): ActionTypes => {
    return {
        type: TodosActionTypes.UPDATE_VALUE_EDITING_TODO,
        payload: {
            id: newId,
            name: newValue
        }
    }
}

export const cancelTodoEditing = (newId: number, newValue: string): ActionTypes => {
    return {
        type: TodosActionTypes.CANCEL_TODO_EDITING,
        payload: {
            id: newId,
            oldName: newValue
        }
    }
}