import React, {useState} from 'react';
import './TodolistApp.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

type TodoType = {
    todolistId: string
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
}

const TodolistApp = () => {
    const [todoList, setTodoList] = useState<Array<TodoType>>([
        {
            todolistId: v1(), title: 'What to learn', filter: 'all',  tasks: [{idTask: v1(), title: "HTML&CSS", isDone: true},
                {idTask: v1(), title: "JS", isDone: true},
                {idTask: v1(), title: "ReactJS", isDone: false},
                {idTask: v1(), title: "Rest API", isDone: false},
                {idTask: v1(), title: "GraphQL", isDone: false}]
        },
        {
            todolistId: v1(), title: 'What to learn', filter: 'active',  tasks: [{idTask: v1(), title: "HTML&CSS", isDone: true},
                {idTask: v1(), title: "JS", isDone: true},
                {idTask: v1(), title: "ReactJS", isDone: false}]
        },
        {
            todolistId: v1(), title: 'What to learn', filter: 'completed',  tasks: [
                {idTask: v1(), title: "JS", isDone: true},
                {idTask: v1(), title: "GraphQL", isDone: false}]
        }
    ])

    function addNewTask(newTaskTitle: string, todolistId: string) {
        const newTask = {
            idTask: v1(),
            title: newTaskTitle,
            isDone: false
        }
        setTodoList(todoList.map(tl => tl.todolistId === todolistId ? {...tl, tasks: [newTask, ...tl.tasks]} : tl))
    }

    function changeStatusTask(idTask: string, isDone: boolean, todolistId: string) {
        setTodoList(todoList.map(tl => tl.todolistId === todolistId ? {...tl, tasks: tl.tasks.map(t => t.idTask  === idTask ? {...t, isDone : isDone } : t )} : tl))
    }

    function removeTask(idTask: string, todolistId: string, ) {
        setTodoList(todoList.map(tl => tl.todolistId === todolistId ? {...tl, tasks: tl.tasks.filter(t => t.idTask  !== idTask)} : tl))
    }

    function removeAllTasks(todolistId: string) {
        setTodoList(todoList.map(tl => tl.todolistId === todolistId ? {...tl, tasks: []} : tl))
    }

    function changeFilter(value:FilterValuesType, todolistId:string){
        setTodoList(todoList.map(tl => tl.todolistId === todolistId ? {...tl, filter: value} : tl))
    }

    return (
        <div className="filterTodo">
            {
                todoList.map(tl => {
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
                    />
                })
            }
        </div>
    );
}

export default TodolistApp
