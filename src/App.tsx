import React from 'react';
import './App.css';
import Cards from "./components/00_cards/Cards";
import {Task_Filter} from "./components/01_01_tasks/Task&Filter";


function App() {
  return <div className="wrapper">
    <Cards/>
      <Task_Filter/>
  </div>
}

export default App;



