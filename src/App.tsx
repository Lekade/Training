import React from 'react';
import './App.css';
import Cards from "./components/00_cards/Cards";
import {Task_Filter} from "./components/01_01_tasks/Task&Filter";
import FilterTodolist from './components/02_01_fiter/FiterTodolist'
import {IndicationButton} from "./components/02_01_fiter/IndicationButton";



function App() {
    return <div className="wrapper">
        <Cards/>
        <div className='flexWrapper'>
            <Task_Filter/>
            <FilterTodolist/>
            <IndicationButton/>
        </div>
    </div>
}

export default App;





