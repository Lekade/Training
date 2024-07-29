import React from 'react';
import './App.css';
import Cards from "./components/cards/Cards";
import {Task_Filter} from "./components/tasks/Task&Filter";
import TodolistApp from './components/todo/TodolistApp'
import {IndicationButton} from "./components/indicatorBtn/IndicationButton";
import Stars from "./components/stars/Stars";
import {AccordionContainer} from "./components/accordion/AccordionContainer";
import {Provider} from "react-redux";
import {store} from "./components/todo/Store/store";


function App() {
    return <div className="wrapper">
        <Cards/>
        <div className='flexWrapper'>
            <Task_Filter/>
            <IndicationButton/>
            <div>
                <Stars key={'1'} initialData={1}/>
                <Stars key={'2'} initialData={2}/>
                <Stars key={'3'} initialData={3}/>
                <Stars key={'4'} initialData={4}/>
                <Stars key={'5'} initialData={5}/>
            </div>
            <AccordionContainer/>
        </div>
        <div className='todo'>
            <Provider store={store}>
                <TodolistApp/>
            </Provider>
        </div>


    </div>
}

export default App;





