import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './TodolistApp';
import './TodolistApp.css';

export type TaskType = {
    idTask: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    todolistId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    removeAllTasks: (todolistId: string) => void
    addNewTask: (inputValue: string, todolistId: string) => void
    changeStatusTask: (idTask: string, isDone: boolean, todolistId: string) => void
    activeFilter: FilterValuesType
    changeFilter: (value:FilterValuesType, todolistId: string) => void
}

export function Todolist(props: TodolistPropsType) {

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setInputValue(e.currentTarget.value)
    }

    const addTask = () => {
        if(inputValue.trim()){
            props.addNewTask(inputValue.trim(), props.todolistId)
            setInputValue('')
        }else {
            setError(true)
        }
    }

    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTask()

    let tasksForTodolist = props.tasks;

    if (props.activeFilter === "active") {
        tasksForTodolist = props.tasks.filter(t => !t.isDone);
    }
    if (props.activeFilter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone);
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? 'error' : ''} value={inputValue} onChange={changeInputValue} onKeyDown={onInputKeyDown}/>
            <button onClick={addTask}>+</button>
            {error && <div className='error-message'>The field is required</div>}
        </div>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.idTask}>
                    <input type="checkbox" onChange={(e) => props.changeStatusTask(t.idTask, e.currentTarget.checked, props.todolistId)}
                           checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => props.removeTask(t.idTask, props.todolistId)}>x</button>
                </li>)
            }
        </ul>
        <button onClick={() => props.removeAllTasks(props.todolistId)}>DELETE ALL TASKS</button>
        <div>
            <button className={props.activeFilter === 'all' ? 'active-filter' : ''} onClick={() => {
                props.changeFilter("all", props.todolistId)
            }}>
                All
            </button>
            <button className={props.activeFilter === 'active' ? 'active-filter' : ''} onClick={() => {
                props.changeFilter("active", props.todolistId)
            }}>
                Active
            </button>
            <button className={props.activeFilter === 'completed' ? 'active-filter' : ''} onClick={() => {
                props.changeFilter("completed", props.todolistId)
            }}>
                Completed
            </button>
        </div>
    </div>
}