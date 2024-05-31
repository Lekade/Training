import React from 'react';
import './App.css';
import Cards from "./components/00_cards/Cards";
import {Task_Filter} from "./components/01_01_tasks/Task&Filter";
import FilterTodolist from './components/02_01_fiter/FiterTodolist'



function App() {
    return <div className="wrapper">
        <Cards/>
        <div className='flexWrapper'>
            <Task_Filter/>
            <FilterTodolist/>
        </div>
    </div>
}

export default App;



