import React from 'react';
import './App.css';
import Cards from "./components/cards/Cards";
import {Task_Filter} from "./components/tasks/Task&Filter";
import FilterTodolist from './components/todo/TodolistApp'
import {IndicationButton} from "./components/todo/IndicationButton";
import Stars from "./components/stars/Stars";



function App() {
    return <div className="wrapper">
        <Cards/>
        <div className='flexWrapper'>
            <Task_Filter/>
            <FilterTodolist/>
            <IndicationButton/>
            <div>
                <Stars initialData={1}/>
                <Stars initialData={2}/>
                <Stars initialData={3}/>
                <Stars initialData={4}/>
                <Stars initialData={5}/>
            </div>

        </div>
    </div>
}

export default App;





