import React from 'react';
import {TaskType} from "./Task&Filter";


type TaskPropsType = {
    data: {
        title: string
        tasks: Array<TaskType>
        students: Array<string>
    }
}

export const Tasks = (props: TaskPropsType) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map(el => {
                    return (
                        <li>
                            <div><span> Task ID : </span><span>{el.taskId}</span></div>
                            <div><span> Task title : </span> <span>{el.title}</span></div>
                            <div><input type="checkbox" checked={el.isDone}/></div>
                        </li>
                    )
                })}
            </ul>

            <ul>
                {props.data.students.map(el => {
                    return (
                        <li>{el}</li>
                    )
                })}
            </ul>
        </div>
    );
};