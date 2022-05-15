import { TodosActionTypes } from './../actionTypes/todoActionTypes';
import { ActionTypes, IinitialTodos } from './../types/todosTypes';

const initialTodos: IinitialTodos = {
    todos: [
        {
            id: Math.random(),
            name: 'React JS',
            oldName: 'React JS',
            isChecked: false,
            isEditing: false,
        }
    ],
   todosBasket: []
}   

export const todosReducer = (state = initialTodos, action: ActionTypes): IinitialTodos => {
    switch(action.type) {
        case TodosActionTypes.ADD_TODO:
            return {
                ...state,
                todos: [ ...state.todos, 
                    {        
                        id: Math.random(),
                        name: action.payload.name,
                        oldName: action.payload.name,
                        isChecked: false,
                        isEditing: false,
                    }
                ]
            }
        case TodosActionTypes.UPDATE_TODO_EDITING:
            const resUpdateTodoEditing = state.todos.map(todo => todo.id === action.payload.id ? {...todo,oldName: action.payload.oldName, isEditing: action.payload.isEditing} : todo)
            return { ...state, todos: resUpdateTodoEditing }
        case TodosActionTypes.ADD_TODO_BASKET:
            const resRemovTodos = state.todos.filter(todo => todo.id !== action.payload.todo.id)
            return { todos: resRemovTodos,  todosBasket: [...state.todosBasket, action.payload.todo] }
        case TodosActionTypes.UPDATE_TODO_CHECKBOX: 
            const resUpdateTodoCheckbox = state.todos.map(todo => todo.id === action.payload.id ? {...todo, isChecked: action.payload.isChecked} : todo)
            return {...state, todos: resUpdateTodoCheckbox}
        case TodosActionTypes.REMOVE_TODO_BASKET:
            const resRemoveTodoBasket = state.todosBasket.filter(todo => todo.id !== action.payload.id)
            return {...state, todosBasket: resRemoveTodoBasket}
        case TodosActionTypes.CANCEL_TODO_BASKET:
            const resCancelTodoBaket = state.todosBasket.filter(todo => todo.id !== action.payload.todo.id)
            return { todosBasket: resCancelTodoBaket, todos: [...state.todos, {...action.payload.todo,isChecked: false, isEditing: false, }] }
        case TodosActionTypes.UPDATE_VALUE_EDITING_TODO:
            const resUpdateValueTodoEditing = state.todos.map(todo => todo.id === action.payload.id ? {...todo, name: action.payload.name} : todo)
            return {...state, todos: resUpdateValueTodoEditing}
        case TodosActionTypes.CANCEL_TODO_EDITING: 
            const resCancelTodoEditing = state.todos.map(todo => todo.id === action.payload.id ? {...todo,isEditing: false, name: action.payload.oldName} : todo)
            return {...state, todos: resCancelTodoEditing}


        default:
            return state
    }
}