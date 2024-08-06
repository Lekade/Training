import React, {memo, useCallback} from 'react';
import {TodolistType} from '../../TodolistApp';
import '../../TodolistApp.css';
import {AddItemForm} from "../addItemForm/AddItemForm";
import styled from "styled-components";
import muistyled from '@emotion/styled'
import {TitleInput} from "../titleInput/TitleInput";
import {Button, ButtonGroup, Paper} from "@mui/material";
import {Tasks} from "../tasks/Tasks";
import {useDispatch} from "react-redux";
import {addTaskAC, removeAllTaskAC} from "../../Store/tasks-reducer";
import {changeFilterTodolistAC, changeTitleTodolistAC, deleteTodolistAC} from "../../Store/todolists-reducer";
import {MemoButton} from "../button/MemoButton";


type TodolistPropsType = {
    todolist: TodolistType
}

export const Todolist = memo(({todolist}: TodolistPropsType) => {
    const {todolistId, title, filter} = todolist
    const dispatch = useDispatch()


    const addTask = useCallback(( title: string) => {
        dispatch(addTaskAC(todolistId, title))
    }, [dispatch])
    const removeAllTasks = useCallback(() => {
        dispatch(removeAllTaskAC(todolistId))
    }, [dispatch])
    const deleteTodolist = useCallback(() => {
        dispatch(deleteTodolistAC(todolistId))
    }, [dispatch])
    const changeTitleTodolist = useCallback((title: string) => {
        dispatch(changeTitleTodolistAC(todolistId, title))
    }, [dispatch])
    const onAllFilter = useCallback(() => {
        dispatch(changeFilterTodolistAC(todolistId, 'all'))
    }, [dispatch, filter])
    const onActiveFilter = useCallback(() => {
        dispatch(changeFilterTodolistAC(todolistId, 'active'))
    }, [dispatch, filter])
    const onCompletedFilter = useCallback ( () => {
        dispatch(changeFilterTodolistAC(todolistId, 'completed'))
    }, [dispatch, filter])



    return <TodolistStyled>
        <TitleBlock>
            <TitleInput title={title} onChangeTitle={changeTitleTodolist}/>
        </TitleBlock>
        <AddItemForm addItem={addTask} placeholder={'Add task'}/>
        <ButtonGroup variant="contained" aria-label="Basic button group">
            <MemoButton
                style={{flexGrow: 1}}
                variant={filter === 'all' ? "outlined" : "contained"}
                onClick={onAllFilter}>All</MemoButton>
            <MemoButton
                style={{flexGrow: 1}}
                variant={filter === 'active' ? "outlined" : "contained"}
                onClick={onActiveFilter}>Active</MemoButton>
            <MemoButton
                style={{flexGrow: 1}}
                variant={filter === 'completed' ? "outlined" : "contained"}
                onClick={onCompletedFilter}>Completed</MemoButton>
        </ButtonGroup>
        <Tasks todolistId={todolistId} activeFilter={filter} />
        <ButtonGroup size="small" aria-label="Small button group">
            <Button onClick={removeAllTasks}>DELETE ALL TASKS</Button>
            <Button onClick={deleteTodolist}>Delete todolist</Button>
        </ButtonGroup>
    </TodolistStyled>
})


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