import React, {memo, useCallback, useMemo} from 'react';
import {Checkbox, IconButton} from "@mui/material";
import {TitleInput} from "../titleInput/TitleInput";
import {Delete} from "@mui/icons-material";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Store/store";
import {FilterValuesType, TaskType} from "../../TodolistApp";
import {changeStatusTaskAC, changeTitleTaskAC, removeTaskAC} from "../../Store/tasks-reducer";


type TasksPropsType = {
    todolistId: string
    activeFilter: FilterValuesType
}

export const Tasks = memo(({todolistId, activeFilter}:TasksPropsType) => {
    const tasks = useSelector<AppRootStateType,  TaskType[]>(state => state.tasks[todolistId])
    const dispatch = useDispatch()

    const removeTask = useCallback((taskId: string) => {
        dispatch(removeTaskAC(todolistId, taskId))
    }, [dispatch])
    const changeStatusTask = useCallback((taskId: string, isDone: boolean) => {
        dispatch(changeStatusTaskAC(todolistId, taskId, isDone))
    }, [dispatch])
    const changeTitleTask = useCallback((title:string, taskId: string) =>{
        dispatch(changeTitleTaskAC(todolistId, taskId, title))
    }, [dispatch])

    let tasksForTodolist:TaskType[] = useMemo(() => {
        if (activeFilter === "active") {
            return  tasks.filter(t => !t.isDone);
        }
        if (activeFilter === "completed") {
            return  tasks.filter(t => t.isDone);
        }
        return tasks

    }, [activeFilter, tasks])


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
});


const StyledTasks = styled.ul`
  flex-grow: 1;
`

const Task = styled.li`
  list-style-type: none;
  display: flex;
`