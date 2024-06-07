import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './TodolistApp';
import './TodolistApp.css';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    removeAllTasks: () => void
    changeFilter: (value: FilterValuesType) => void
    addNewTask: (inputValue: string) => void
    changeStatusTask: (idTask: string, isDone: boolean) => void
    activeFilter: string
}

export function Todolist(props: TodolistPropsType) {

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)
    const [filterActive, setFilterActive] = useState<FilterValuesType>("all")

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setInputValue(e.currentTarget.value)
    }

    const addTask = () => {
        if(inputValue.trim() === ''){
            setError(true)
            return
        }
        props.addNewTask(inputValue.trim())
        setInputValue('')
    }

    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTask()

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? 'error' : ''} value={inputValue} onChange={changeInputValue} onKeyDown={onInputKeyDown}/>
            <button onClick={addTask}>+</button>
            {error && <div className='error-message'>The field is required</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" onChange={(e) => props.changeStatusTask(t.id, e.currentTarget.checked)}
                           checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => props.removeTask(t.id)}>x</button>
                </li>)
            }
        </ul>
        <button onClick={() => props.removeAllTasks()}>DELETE ALL TASKS</button>
        <div>
            <button className={props.activeFilter === 'all' ? 'active-filter' : ''} onClick={() => {
                props.changeFilter("all")
            }}>
                All
            </button>
            <button className={props.activeFilter === 'active' ? 'active-filter' : ''} onClick={() => {
                props.changeFilter("active")
            }}>
                Active
            </button>
            <button className={props.activeFilter === 'completed' ? 'active-filter' : ''} onClick={() => {
                props.changeFilter("completed")
            }}>
                Completed
            </button>
        </div>
    </div>
}