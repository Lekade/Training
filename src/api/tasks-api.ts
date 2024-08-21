import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '470e32c0-943d-4aa1-985d-60cd15f8156e',
    }
})

export const tasksApi = {
    getTasks: (todolistId: string) => instance.get(`/todo-lists/${todolistId}/tasks`),
    createTask: (todolistId: string, title: string)=> instance.post(`/todo-lists/${todolistId}/tasks`,{title}),
    deleteTask: (todolistId: string, taskId: string) => instance.delete(`/todo-lists/${todolistId}/tasks/${taskId}`),
    updateTask: (todolistId: string, taskId: string, title: string) => instance.put(`/todo-lists/${todolistId}/tasks/${taskId}`, {title})
}
