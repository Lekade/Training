import React, { useEffect, useState } from 'react'
import axios, {AxiosRequestConfig} from "axios";
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API',
}

const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: {
        'API-KEY': "470e32c0-943d-4aa1-985d-60cd15f8156e"
    }
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistApi.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const  title = 'React'
        todolistApi.createTodo(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'af2f57b8-436c-4901-8a88-ee1b6ef75736'
        todolistApi.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'aed7f998-866b-4dd6-bad0-c7ede8f39067'
        const title = 'Redux'
        todolistApi.updateTodo(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}