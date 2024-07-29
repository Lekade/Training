import React from 'react';
import './TodolistApp.css';
import {Todolist} from './todoComponents/todolist/Todolist';
import AddItemForm from "./todoComponents/addItemForm/AddItemForm";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Store/store";
import {
    addTodolistAC,
    changeFilterTodolistAC,
    changeTitleTodolistAC,
    deleteTodolistAC
} from "./Store/todolists-reducer";
import {addTaskAC, removeAllTaskAC} from "./Store/tasks-reducer";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    todolistId: string
    title: string
    filter: FilterValuesType
}
export type TaskType = {
    taskId: string
    title: string
    isDone: boolean
}
export type TaskStateType = {
    [todolistId: string]: TaskType[]
}

const TodolistApp = () => {
    const todolists = useSelector<AppRootStateType, TodolistType[]>(state => state.todolists)
    const dispatch = useDispatch()

    function addTodolist(title: string) {
        dispatch(addTodolistAC(title))
    }

    function deleteTodolist(todolistId: string) {
        dispatch(deleteTodolistAC(todolistId))
    }

    function changeTitleTodolist(title: string, todolistId: string) {
        dispatch(changeTitleTodolistAC(todolistId, title))
    }

    function changeFilter(filter: FilterValuesType, todolistId: string) {
        dispatch(changeFilterTodolistAC(todolistId, filter))
    }
    function addNewTask(todolistId: string, title: string) {
        dispatch(addTaskAC(todolistId, title))
    }
    function removeAllTasks(todolistId: string) {
        dispatch(removeAllTaskAC(todolistId))
    }


    return (
        <ToDoListWrapper>
            <AddToDoListBlock>
                <h2>Add a todolist</h2>
                <AddItemForm addItem={addTodolist} placeholder={'Add todolist'}/>
            </AddToDoListBlock>
            <ToDoLists>
                {
                    todolists.map(tl => {
                        return <Todolist
                            key={tl.todolistId}
                            todolistId={tl.todolistId}
                            title={tl.title}
                            activeFilter={tl.filter}
                            deleteTodolist={deleteTodolist}
                            changeTitleTodolist={changeTitleTodolist}
                            changeFilter={changeFilter}
                            addNewTask={addNewTask}
                            removeAllTasks={removeAllTasks}
                        />
                    })
                }
            </ToDoLists>
        </ToDoListWrapper>
    );
}

export default TodolistApp


const ToDoListWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #ECEFF7;
`
const AddToDoListBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  h2 {
    margin-right: 50px;
  }
`
const ToDoLists = styled.ul`
  padding: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  flex-wrap: wrap;
`
