import React, {useReducer} from 'react';
import './TodolistApp.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";
import AddItemForm from "./addItemForm/AddItemForm";
import styled from "styled-components";
import {
    addTaskAC,
    addTodolistAC, changeFilterTodolistAC,
    changeStatusTaskAC, changeTitleTaskAC, changeTitleTodolistAC,
    deleteAllTaskAC, deleteTaskAC, deleteTodolistAC,
    globalReduser,
} from "./redusers/global-reduser";

export type FilterValuesType = "all" | "active" | "completed";

export type TodoType = {
    todolistId: string
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
}

const TodolistApp = () => {
    const [todolistsState, dispatch] = useReducer( globalReduser, [
        {
            todolistId: v1(), title: 'What to learn', filter: 'all',  tasks: [
                {idTask: v1(), title: "HTML&CSS", isDone: true},
                {idTask: v1(), title: "JS", isDone: true},
                {idTask: v1(), title: "ReactJS", isDone: false},
                {idTask: v1(), title: "Rest API", isDone: false},
                {idTask: v1(), title: "GraphQL", isDone: false}]
        },
        {
            todolistId: v1(), title: 'What to learn', filter: 'active',  tasks: [
                {idTask: v1(), title: "HTML&CSS", isDone: true},
                {idTask: v1(), title: "JS", isDone: true},
                {idTask: v1(), title: "ReactJS", isDone: false}]
        },
        {
            todolistId: v1(), title: 'What to learn', filter: 'completed',  tasks: [
                {idTask: v1(), title: "JS", isDone: true},
                {idTask: v1(), title: "GraphQL", isDone: false}]
        }
    ])

    function addTodolist(title:string)  {
        dispatch(addTodolistAC(title))
    }
    function deleteTodolist(todolistId: string){
        dispatch(deleteTodolistAC(todolistId))
    }
    function changeTitleTodolist(title:string, todolistId: string){
        dispatch(changeTitleTodolistAC(todolistId, title))
    }
    function changeFilter(filter:FilterValuesType, todolistId:string){
        dispatch(changeFilterTodolistAC(todolistId, filter))
    }


    function addNewTask(title: string, todolistId: string) {
        dispatch(addTaskAC(todolistId, title))
    }
    function removeTask(idTask: string, todolistId: string, ) {
        dispatch(deleteTaskAC(todolistId, idTask))
    }
    function changeStatusTask(idTask: string, isDone: boolean, todolistId: string) {
        dispatch(changeStatusTaskAC(todolistId, idTask, isDone))
    }
    function changeTitleTask(title:string, idTask: string, todolistId: string){
        dispatch(changeTitleTaskAC(todolistId, idTask, title))
    }
    function removeAllTasks(todolistId: string) {
        dispatch(deleteAllTaskAC(todolistId))
    }

    return (
        <ToDoListWrapper>
            <AddToDoListBlock>
                <h2>Add a todolist</h2>
                <AddItemForm addItem={addTodolist} placeholder={'Add todolist'}/>
            </AddToDoListBlock>
            <ToDoLists>
                {
                    todolistsState.map(tl => {
                        return <Todolist
                            todolistId={tl.todolistId}
                            title={tl.title}
                            tasks={tl.tasks}
                            removeTask={removeTask}
                            removeAllTasks={removeAllTasks}
                            addNewTask={addNewTask}
                            changeStatusTask={changeStatusTask}
                            activeFilter={tl.filter}
                            changeFilter={changeFilter}
                            deleteTodolist={deleteTodolist}
                            changeTitleTodolist={changeTitleTodolist}
                            changeTitleTask={changeTitleTask}

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
  
  h2{
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
