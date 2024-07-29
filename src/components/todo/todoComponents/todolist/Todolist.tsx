import React from 'react';
import {FilterValuesType} from '../../TodolistApp';
import '../../TodolistApp.css';
import AddItemForm from "../addItemForm/AddItemForm";
import styled from "styled-components";
import muistyled from '@emotion/styled'
import {TitleInput} from "../titleInput/TitleInput";
import {Button, ButtonGroup, Paper} from "@mui/material";
import {Tasks} from "../tasks/Tasks";


type TodolistPropsType = {
    todolistId: string
    title: string
    activeFilter: FilterValuesType
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    deleteTodolist: (todolistId: string) => void
    changeTitleTodolist: (title: string, todolistId: string) => void
    removeAllTasks: (todolistId: string) => void
    addNewTask: (inputValue: string, todolistId: string) => void
}

export function Todolist(props: TodolistPropsType) {

    const addItemTasks = (inputValue: string) => {
        props.addNewTask(props.todolistId, inputValue.trim())
    }
    const changeTitleTodolistHandler = (title: string) => {
        props.changeTitleTodolist(title, props.todolistId)
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
        <Tasks todolistId={props.todolistId} activeFilter={props.activeFilter} />
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

const  TitleBlock = styled.div`
    margin-bottom: 25px;
`