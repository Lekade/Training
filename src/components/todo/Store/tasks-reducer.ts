import {TaskStateType, TaskType} from "../TodolistApp";
import {v1} from "uuid";
import {AddTodolistAT, DeleteTodolistAT} from "./todolists-reducer";

export type AddTaskAT = ReturnType<typeof addTaskAC>
export type RemoveTaskAT = ReturnType<typeof removeTaskAC>
export type ChangeTitleTaskAT = ReturnType<typeof changeTitleTaskAC>
export type ChangeStatusTaskAT = ReturnType<typeof changeStatusTaskAC>
export type DeleteAllTasksAT = ReturnType<typeof removeAllTaskAC>


type ActionType =
    AddTaskAT
    | RemoveTaskAT
    | ChangeTitleTaskAT
    | ChangeStatusTaskAT
    | DeleteAllTasksAT
    | AddTodolistAT
    | DeleteTodolistAT

export const tasksReducer = (tasks: TaskStateType = {}, action: ActionType): TaskStateType => {
    switch (action.type) {
        case 'ADD-TASK': {
            const {todolistId, title} = action.payload
            const newTask:TaskType  = {
                taskId: v1(), title, isDone: false
            }
            return {...tasks, [todolistId]: [newTask, ...tasks[todolistId]]}
        }
        case 'REMOVE-TASK': {
            const {todolistId, taskId} = action.payload
            return {...tasks, [todolistId]: tasks[todolistId].filter(t => t.taskId !== taskId)}
        }
        case 'CHANGE-TITLE-TASK': {
            const {todolistId, taskId, title} = action.payload
            return {...tasks, [todolistId]: tasks[todolistId].map(t => t.taskId === taskId ? {...t, title} : t)}
        }
        case 'CHANGE-STATUS-TASK': {
            const {todolistId, taskId, isDone} = action.payload
            return {...tasks, [todolistId]: tasks[todolistId].map(t => t.taskId === taskId ? {...t, isDone} : t)}
        }
        case 'REMOVE-ALL-TASKS': {
            const {todolistId} = action.payload
            return {...tasks, [todolistId]: []}
        }
        case 'ADD-TODOLIST': {
            const {todolistId, title} = action.payload
            return {...tasks, [todolistId]: []}
        }
        case 'DELETE-TODOLIST': {
            const {todolistId} = action.payload
            const {[todolistId]: [], ...rest} = tasks
            return rest
        }
        default:
            return tasks
    }
}


export const addTaskAC = (todolistId: string, title: string) => ({
    type: 'ADD-TASK',
    payload: {
        todolistId,
        title
    }
}) as const
export const removeTaskAC = (todolistId: string, taskId: string) => ({
    type: 'REMOVE-TASK',
    payload: {
        todolistId,
        taskId
    }
}) as const

export const changeTitleTaskAC = (todolistId: string, taskId: string, title: string) => ({
    type: 'CHANGE-TITLE-TASK',
    payload: {
        todolistId,
        taskId,
        title
    }
}) as const
export const changeStatusTaskAC = (todolistId: string, taskId: string, isDone: boolean) => ({
    type: 'CHANGE-STATUS-TASK',
    payload: {
        todolistId,
        taskId,
        isDone
    }
}) as const

export const removeAllTaskAC = (todolistId: string) => ({
    type: 'REMOVE-ALL-TASKS',
    payload: {
        todolistId
    }
}) as const
