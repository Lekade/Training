import React from 'react';
import {Checkbox, IconButton} from "@mui/material";
import {TitleInput} from "../titleInput/TitleInput";
import {Delete} from "@mui/icons-material";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/store";
import {FilterValuesType, TaskStateType, TaskType} from "../../TodolistApp";
import {changeStatusTaskAC, changeTitleTaskAC, removeTaskAC} from "../../Store/tasks-reducer";


type TasksPropsType = {
    todolistId: string
    activeFilter: FilterValuesType
}

export const Tasks = ({todolistId, activeFilter}:TasksPropsType) => {
    const tasks = useSelector<AppRootStateType,  TaskStateType>(state => state.tasks)
    const dispatch = useDispatch()

    function removeTask(taskId: string) {
        dispatch(removeTaskAC(todolistId, taskId))
    }
    function changeStatusTask(idTask: string, isDone: boolean) {
        dispatch(changeStatusTaskAC(todolistId, idTask, isDone))
    }
    function changeTitleTask(title:string, taskId: string){
        dispatch(changeTitleTaskAC(todolistId, taskId, title))
    }

    let tasksForTodolist: TaskType[] = tasks[todolistId];

    if (activeFilter === "active") {
        tasksForTodolist = tasks[todolistId].filter(t => !t.isDone);
    }
    if (activeFilter === "completed") {
        tasksForTodolist = tasks[todolistId].filter(t => t.isDone);
    }

    return (
        <StyledTasks>
            {
                tasksForTodolist.map(t => {
                        return (
                            <Task key={t.taskId}>
                                <Checkbox
                                    onChange={(e) => changeStatusTask(t.taskId, e.currentTarget.checked)}
                                    checked={t.isDone}/>
                                <TitleInput title={t.title} onChangeTitle={title =>  changeTitleTask(title, t.taskId)}/>
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => removeTask(t.taskId)}
                                >
                                    <Delete/>
                                </IconButton>
                            </Task>
                        )
                    }
                )
            }
        </StyledTasks>
    );
};


const StyledTasks = styled.ul`
  flex-grow: 1;
`

const Task = styled.li`
  list-style-type: none;
  display: flex;
`