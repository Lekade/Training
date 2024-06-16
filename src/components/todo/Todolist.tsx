import React from 'react';
import {FilterValuesType} from './TodolistApp';
import './TodolistApp.css';
import Button from "./button/Button";
import AddItemForm from "./addItemForm/AddItemForm";
import styled from "styled-components";
import {TitleInput} from "./titleInput/TitleInput";

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
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    deleteTodolist: (todolistId: string) => void
    changeTitleTodolist: (title: string, todolistId: string) => void
    changeTitleTask: (title: string, idTask: string, todolistId: string) => void
}

export function Todolist(props: TodolistPropsType) {

    const addItemTasks = (inputValue: string) => {
        props.addNewTask(inputValue.trim(), props.todolistId)
    }
    const changeTitleTodolistHandler = (title: string) => {
        props.changeTitleTodolist(title, props.todolistId)
    }

    let tasksForTodolist = props.tasks;

    if (props.activeFilter === "active") {
        tasksForTodolist = props.tasks.filter(t => !t.isDone);
    }
    if (props.activeFilter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone);
    }


    return <TodolistStyled>
        <DeleteTodolist><Button onClick={() => props.deleteTodolist(props.todolistId)}>X</Button></DeleteTodolist>
        <TitleInput title={props.title} onChangeTitle={changeTitleTodolistHandler}/>
        <AddItemForm addItem={addItemTasks}/>
        <ul>
            {
                tasksForTodolist.map(t => {
                    const changeTitleTaskHandler = (title: string)=>{
                        props.changeTitleTask(title, t.idTask, props.todolistId)
                    }

                        return (
                            <Task key={t.idTask}>
                                <input type="checkbox"
                                       onChange={(e) => props.changeStatusTask(t.idTask, e.currentTarget.checked, props.todolistId)}
                                       checked={t.isDone}/>
                                <TitleInput title={t.title} onChangeTitle={changeTitleTaskHandler}/>
                                <Button onClick={() => props.removeTask(t.idTask, props.todolistId)}>X</Button>
                            </Task>
                        )}
                )
            }
        </ul>
        <Button onClick={() => props.removeAllTasks(props.todolistId)}>DELETE ALL TASKS</Button>
        <div>
            <Button className={props.activeFilter === 'all' ? 'active-filter' : ''}
                    onClick={() => {
                        props.changeFilter("all", props.todolistId)
                    }}>All</Button>
            <Button className={props.activeFilter === 'active' ? 'active-filter' : ''}
                    onClick={() => {
                        props.changeFilter("active", props.todolistId)
                    }}>Active</Button>
            <Button className={props.activeFilter === 'completed' ? 'active-filter' : ''}
                    onClick={() => {
                        props.changeFilter("completed", props.todolistId)
                    }}>Completed</Button>
        </div>
    </TodolistStyled>
}


const TodolistStyled = styled.li`
  display: block;
  min-width: 300px;
  min-height: 200px;
  background-color: cadetblue;
  padding: 30px;
  margin: 0;
  border-radius: 10px;
  position: relative;
  list-style-type: none;

  ul {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 0;
  }
`
const DeleteTodolist = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;

  Button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 25px;
    border: none;
  }
`

const Task = styled.li`
  list-style-type: none;
  display: flex;

`