import {FilterValuesType, TodolistType} from "../TodolistApp";
import {v1} from "uuid";

export type AddTodolistAT = ReturnType<typeof addTodolistAC>
export type DeleteTodolistAT = ReturnType<typeof deleteTodolistAC>
export type ChangeTitleTodolistAT = ReturnType<typeof changeTitleTodolistAC>
export type ChangeFilterTodolistAT = ReturnType<typeof changeFilterTodolistAC>

type ActionType =
    AddTodolistAT
    | DeleteTodolistAT
    | ChangeTitleTodolistAT
    | ChangeFilterTodolistAT

export const todolistsReducer = (todolists: TodolistType[] = [], action: ActionType): TodolistType[] => {
    switch (action.type) {
        case 'ADD-TODOLIST': {
            const {todolistId, title} = action.payload
            const newTodolist: TodolistType = {
                todolistId, title, filter: 'all'
            }
            return [newTodolist, ...todolists]
        }
        case 'DELETE-TODOLIST': {
            const {todolistId} = action.payload
            return todolists.filter(tl => tl.todolistId !== todolistId)
        }
        case 'CHANGE-TITLE-TODOLIST': {
            const {todolistId, title} = action.payload
            return todolists.map(tl => tl.todolistId === todolistId ? {...tl, title} : tl)
        }
        case 'CHANGE-FILTER-TODOLIST': {
            const {todolistId, filter} = action.payload
            return todolists.map(tl => tl.todolistId === todolistId ? {...tl, filter} : tl)
        }
        default:
            return todolists
    }
}

export const addTodolistAC = (title: string) => ({
    type: 'ADD-TODOLIST',
    payload: {
        todolistId: v1(),
        title
    }
}) as const
export const deleteTodolistAC = (todolistId: string) => ({
    type: 'DELETE-TODOLIST',
    payload: {
        todolistId
    }
}) as const

export const changeTitleTodolistAC = (todolistId: string, title: string) => ({
    type: 'CHANGE-TITLE-TODOLIST',
    payload: {
        todolistId,
        title
    }
}) as const
export const changeFilterTodolistAC = (todolistId: string, filter: FilterValuesType) => ({
    type: 'CHANGE-FILTER-TODOLIST',
    payload: {
        todolistId,
        filter
    }
}) as const

