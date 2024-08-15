import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '470e32c0-943d-4aa1-985d-60cd15f8156e',
    }
})

export const todolistApi = {
    getTodolists(){
        return  instance.get<TodolistType[]>('/todo-lists')
    },
    createTodo(title: string){
        return instance.post<ResponseType<{item: TodolistType}>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title})
    },
    deleteTodo(todolistId: string){
        return  instance.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`)
    },
    updateTodo(todolistId: string, title: string){
        return instance.put<ResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title})
    }
}

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
type ResponseType<T={}> ={
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: T
}
