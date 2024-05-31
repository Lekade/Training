import React, {useState} from 'react';
import './FilterTodolist.css';
import {Todolist} from './Todolist';

export type FilterValuesType = "all" | "active" | "completed";

// Hi guys!
// 1. Let's create a 'DELETE ALL TASKS' button, and place it above the filter buttons
// Clicking the button removes all tasks
// 2. Let's create a fourth filter button-if you click it, the first three tasks will be displayed
// 3. Relocate everything associated with  filters to the Todolist.tsx component. Make it work
//
// Привет ребята!
// 1. Давайте создадим кнопку "УДАЛИТЬ ВСЕ задачи" и разместим ее над кнопками фильтрации
// Нажатие на эту кнопку приведет к удалению всех задач
// 2. Давайте создадим четвертую кнопку фильтрации - при нажатии на нее будут отображаться первые три задачи
// 3. Переместите все, что связано с фильтрами, в компонент Todolist.tsx. Чтобы все заработало


const FiterTodolist = () => {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ]);

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function removeAllTasks() {
        setTasks([])
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return (
        <div className="filterTodo">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      removeAllTasks={removeAllTasks}
            />

        </div>
    );
}

export default FiterTodolist

// -------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {Todolist} from './Todolist';
//
//
// export type FilterValuesType = "all" | "active" | "completed" | "three";
//
// function FiterTodolist() {
//
//     let [tasks, setTasks] = useState([
//         {id: 1, title: "HTML&CSS", isDone: true},
//         {id: 2, title: "JS", isDone: true},
//         {id: 3, title: "ReactJS", isDone: false},
//         {id: 4, title: "Rest API", isDone: false},
//         {id: 5, title: "GraphQL", isDone: false},
//     ]);
//
//     const deleteAllTasks = () => {
//         setTasks([])
//     }
//
//     function removeTask(id: number) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let tasksForTodolist = tasks;
//
//     if (filter === "active") {
//         tasksForTodolist = tasks.filter(t => t.isDone === false);
//     }
//     if (filter === "completed") {
//         tasksForTodolist = tasks.filter(t => t.isDone === true);
//     }
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//     return (
//         <div>
//             <Todolist
//                 title="What to learn"
//                 tasks={tasks}
//                 removeTask={removeTask}
//                 changeFilter={changeFilter}
//                 deleteAllTasks={deleteAllTasks}
//              />
//         </div>
//     );
// }
//
// export default FiterTodolist;