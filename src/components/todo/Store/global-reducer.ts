import {FilterValuesType} from "../TodolistApp";
import {v1} from "uuid";

export type AddTodolistAT = ReturnType<typeof addTodolistAC>
export type DeleteTodolistAT = ReturnType<typeof deleteTodolistAC>
export type ChangeTitleTodolistAT = ReturnType<typeof changeTitleTodolistAC>
export type ChangeFilterTodolistAT = ReturnType<typeof changeFilterTodolistAC>
export type AddTaskAT = ReturnType<typeof addTaskAC>
export type RemoveTaskAT = ReturnType<typeof deleteTaskAC>
export type ChangeTitleTaskAT = ReturnType<typeof changeTitleTaskAC>
export type ChangeStatusTaskAT = ReturnType<typeof changeStatusTaskAC>
export type DeleteAllTasksAT = ReturnType<typeof deleteAllTaskAC>

type ActionType =
    AddTodolistAT
    | DeleteTodolistAT
    | ChangeTitleTodolistAT
    | ChangeFilterTodolistAT
    | AddTaskAT
    | RemoveTaskAT
    | ChangeTitleTaskAT
    | ChangeStatusTaskAT
    | DeleteAllTasksAT

export type TodoType = {
    todolistId: string
    title:string
    filter: FilterValuesType
    tasks: {idTask: string, title: string, isDone: boolean}[]

}

export const globalReducer = (state: TodoType[], action: ActionType): TodoType[] => {
    switch (action.type) {
        case 'ADD-TODOLIST': {
            const {title} = action.payload
            const newTodolist: TodoType = {
                todolistId: v1(), title, filter: 'all', tasks: []
            }
            return [...state, newTodolist]
        }
        case 'DELETE-TODOLIST': {
            const {todolistId} = action.payload
            return state.filter(tl => tl.todolistId !== todolistId)
        }
        case 'CHANGE-TITLE-TODOLIST': {
            const {todolistId, title} = action.payload
            return state.map(tl => tl.todolistId === todolistId ? {...tl, title} : tl)
        }
        case 'CHANGE-FILTER-TODOLIST': {
            const {todolistId, filter} = action.payload
            return state.map(tl => tl.todolistId === todolistId ? {...tl, filter} : tl)
        }
        case 'ADD-TASK': {
            const {todolistId, title} = action.payload
            const newTask = {
                idTask: v1(), title, isDone: false
            }
            return state.map(tl => tl.todolistId === todolistId ? {...tl, tasks: [newTask, ...tl.tasks]} : tl)
        }
        case 'REMOVE-TASK': {
            const {todolistId, idTask} = action.payload
            return state.map(tl => tl.todolistId === todolistId ? {
                ...tl,
                tasks: tl.tasks.filter(t => t.idTask !== idTask)
            } : tl)
        }
        case 'CHANGE-TITLE-TASK': {
            const {todolistId, idTask, title} = action.payload
            return state.map(tl => tl.todolistId === todolistId
                ? {
                    ...tl, tasks: tl.tasks.map(task => task.idTask === idTask
                        ? {...task, title: title} : task)
                } : tl)
        }
        case 'CHANGE-STATUS-TASK': {
            const {todolistId, idTask, isDone} = action.payload
            return state.map(tl => tl.todolistId === todolistId ? {
                ...tl,
                tasks: tl.tasks.map(t => t.idTask === idTask ? {...t, isDone} : t)
            } : tl)
        }
        case 'DELETE-ALL-TASKS': {
            const {todolistId} = action.payload
            return state.map(tl => tl.todolistId === todolistId ? {...tl, tasks: []} : tl)
        }
        default:
            return state
    }
}

export const addTodolistAC = (title: string) => ({
    type: 'ADD-TODOLIST',
    payload: {
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
export const addTaskAC = (todolistId: string, title: string) => ({
    type: 'ADD-TASK',
    payload: {
        todolistId,
        title
    }
}) as const
export const deleteTaskAC = (todolistId: string, idTask: string) => ({
    type: 'REMOVE-TASK',
    payload: {
        todolistId,
        idTask
    }
}) as const

export const changeTitleTaskAC = (todolistId: string, idTask: string, title: string) => ({
    type: 'CHANGE-TITLE-TASK',
    payload: {
        todolistId,
        idTask,
        title
    }
}) as const
export const changeStatusTaskAC = (todolistId: string, idTask: string, isDone: boolean) => ({
    type: 'CHANGE-STATUS-TASK',
    payload: {
        todolistId,
        idTask,
        isDone
    }
}) as const

export const deleteAllTaskAC = (todolistId: string) => ({
    type: 'DELETE-ALL-TASKS',
    payload: {
        todolistId
    }
}) as const
