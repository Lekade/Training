import React from 'react';
import {FilterValuesType} from './TodolistApp';
import './TodolistApp.css';
import AddItemForm from "./addItemForm/AddItemForm";
import styled from "styled-components";
import muistyled from '@emotion/styled'
import {TitleInput} from "./titleInput/TitleInput";
import {Button, ButtonGroup, Checkbox, IconButton, Paper} from "@mui/material";
import {Delete} from "@mui/icons-material";

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
        <TitleBlock>
            <TitleInput title={props.title} onChangeTitle={changeTitleTodolistHandler}/>
        </TitleBlock>
        <AddItemForm addItem={addItemTasks} placeholder={'Add task'}/>
        <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
                style={{flexGrow: 1}}
                sx={props.activeFilter === 'all' ? {backgroundColor: '#1565c0',
                } : {backgroundColor: '#1976D2'}}
                onClick={() => {
                    props.changeFilter("all", props.todolistId)
                }}>All</Button>
            <Button
                style={{flexGrow: 1}}
                sx={props.activeFilter === 'active' ? {backgroundColor: '#1565c0'} : {backgroundColor: '#1976D2'}}
                onClick={() => {
                    props.changeFilter("active", props.todolistId)
                }}>Active</Button>
            <Button
                style={{flexGrow: 1}}
                sx={props.activeFilter === 'completed' ? {backgroundColor: '#1565c0'} : {backgroundColor: '#1976D2'}}
                onClick={() => {
                    props.changeFilter("completed", props.todolistId)
                }}>Completed</Button>
        </ButtonGroup>
        <Tasks>
            {
                tasksForTodolist.map(t => {
                        const changeTitleTaskHandler = (title: string) => {
                            props.changeTitleTask(title, t.idTask, props.todolistId)
                        }

                        return (
                            <Task key={t.idTask}>
                                <Checkbox
                                    onChange={(e) => props.changeStatusTask(t.idTask, e.currentTarget.checked, props.todolistId)}
                                    checked={t.isDone}/>
                                <TitleInput title={t.title} onChangeTitle={changeTitleTaskHandler}/>
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => props.removeTask(t.idTask, props.todolistId)}
                                >
                                    <Delete/>
                                </IconButton>
                            </Task>
                        )
                    }
                )
            }
        </Tasks>
        <ButtonGroup size="small" aria-label="Small button group">
            <Button onClick={() => props.removeAllTasks(props.todolistId)}>DELETE ALL TASKS</Button>
            <Button onClick={() => props.deleteTodolist(props.todolistId)}>Delete todolist</Button>
        </ButtonGroup>
    </TodolistStyled>
}


const TodolistStyled = muistyled(Paper)`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 200px;
  background-color: #fff;
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
const Tasks = styled.ul`
  flex-grow: 1;
`

const Task = styled.li`
  list-style-type: none;
  display: flex;
`
const  TitleBlock = styled.div`
    margin-bottom: 25px;
`