import React, {useEffect, useState} from 'react'
import {tasksApi} from "../api/tasks-api";
export default {
    title: 'API',
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = "5c8887e1-fd96-4842-8bd8-30e974652a44"
    useEffect(()=> {
        tasksApi.getTasks(todolistId)
            .then(response => {
                setState(response.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = "5c8887e1-fd96-4842-8bd8-30e974652a44"
    const title = 'JS'
    useEffect(()=> {
        tasksApi.createTask(todolistId, title)
            .then(response => {
                setState(response.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = "5c8887e1-fd96-4842-8bd8-30e974652a44"
    const taskId = "07465d15-d85d-47dc-9db1-287096a7d414"
    useEffect(()=> {
        tasksApi.deleteTask(todolistId, taskId)
            .then(response => {
                setState(response.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = "5c8887e1-fd96-4842-8bd8-30e974652a44"
    const taskId = "07465d15-d85d-47dc-9db1-287096a7d414"
    const title = 'TS'
    useEffect(()=> {
        tasksApi.updateTask(todolistId, taskId, title)
            .then(response => {
                setState(response.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}