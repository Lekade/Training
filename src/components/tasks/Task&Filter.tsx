import React, {useState} from 'react';
import {Tasks} from "./Tasks";
import styled from "styled-components";

export type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}

export const Task_Filter = () => {
    const data1 = {
        title: "What to do",
        tasks: [
            {taskId: 1, title: "HTML&CSS2", isDone: true},
            {taskId: 2, title: "JS2", isDone: true}
        ],
        students: [
            'Jago Wormald1',
            'Saul Milne2',
            'Aariz Hester3',
            'Dion Reeve4',
            'Anisa Ortega5',
            'Blade Cisneros6',
            'Malaikah Phelps7',
            'Zeeshan Gallagher8',
            'Isobella Vo9',
            'Rizwan Mathis10',
            'Menaal Leach11',
            'Kian Walton12',
            'Orion Lamb13',
            'Faizah Huynh14',
            'Crystal Vaughan15',
            'Vivien Hickman16',
            'Stuart Lu17',
        ]
    }

    const many = [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]

    const [filterMany, setFilterMany] = useState(many)


    const currentManyFilter = (nameFilter: 'All' | 'RUBLS' | 'Dollars') => {
        if (nameFilter === 'All') {
            return setFilterMany(many)
        }
        const currentMany = many.filter(m => m.banknots === nameFilter)
        return setFilterMany(currentMany)
    }

    return (
        <WorksWrapper>
            <div>
                <ul>
                    <li>
                        <Tasks data={data1}/>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <h1>Many</h1>
                    {filterMany.map((m, i) => <li key={i}>
                        <div><span>{m.banknots}</span><b> : {m.value}</b> <span>number banknote : </span> <span>{m.number}</span> </div>

                    </li>)}
                </ul>
                <button onClick={() => currentManyFilter('All')}>ALL</button>
                <button onClick={() => currentManyFilter('RUBLS')}>Rubel</button>
                <button onClick={() => currentManyFilter('Dollars')}>Dollar</button>
            </div>
        </WorksWrapper>
    );
}

const WorksWrapper = styled.div`
  display: flex;
`
