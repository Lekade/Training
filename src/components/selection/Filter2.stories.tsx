import type {Meta} from '@storybook/react';
import React, {memo, useMemo, useState} from 'react';
import {Selection} from "./Selection";
import styled from "styled-components";

const meta: Meta = {
    title: 'Filter2',
    component: Selection,
};
export default meta;

const filter: {id: string, name: filterType}[] = [
    {id: '01', name: 'All'},
    {id: '02', name: 'Belarus'},
    {id: '03', name: 'Russia'},
    {id: '04', name: 'Poland'}
]
type filterType = 'All' | 'Belarus' | 'Russia' | 'Poland'

type citiesType = {
  id: string
  city: string
  country: filterType
}[]

const cities: citiesType = [
    {id: '01', city: 'Minsk', country: 'Belarus'},
    {id: '02', city: 'Pink', country: 'Belarus'},
    {id: '03', city: 'Brest', country: 'Belarus'},
    {id: '04', city: 'Luninets', country: 'Belarus'},
    {id: '05', city: 'Vitebsk', country: 'Belarus'},
    {id: '06', city: 'Grodno', country: 'Belarus'},
    {id: '07', city: 'Gomel', country: 'Belarus'},
    {id: '08', city: 'Moscow', country: 'Russia'},
    {id: '09', city: 'Saint-Petersburg', country: 'Russia'},
    {id: '10', city: 'Kazan', country: 'Russia'},
    {id: '11', city: 'Volgograd', country: 'Russia'},
    {id: '12', city: 'Novosibirsk', country: 'Russia'},
    {id: '13', city: 'Warsaw', country: 'Poland'},
    {id: '14', city: 'Krakow', country: 'Poland'},
    {id: '15', city: 'Wroclaw', country: 'Poland'},
    {id: '16', city: 'Lodz', country: 'Poland'}
]


export const SelectionComponent = () => {
    const [filter1, setFilter1] = useState<filterType>('All')
    const [filter2, setFilter2] = useState<filterType>('All')

    const cities1 = cities.filter(c => filter1 === 'All' ? c : c.country === filter1)
    const cities2 = cities.filter(c => filter2 === 'All' ? c : c.country === filter2)

    const SelectionMemo = useMemo(() => memo(Selection), [filter])

    const changeFilter = (id: string, filterVariant:'filter1' | 'filter2') => {
        const newFilter: filterType | undefined = filter.find(f => f.id === id)?.name
         if(newFilter && filterVariant === "filter1"){
             setFilter1(prevState =>  newFilter)
         }
        if(newFilter && filterVariant === "filter2"){
            setFilter2(prevState =>  newFilter)
        }
    }

    return (
        <>
            <Container>
                <span>Cities 1:</span>
                <ul>
                    {cities1.map(c => <li key={c.id}>{c.city}</li>)}
                </ul>
                <span>Cities 2:</span>
                <ul>
                    {cities2.map(c => <li key={c.id}>{c.city}</li>)}
                </ul>
            </Container>
            <Container>
                <span>Filter cities 1:</span>
                <SelectionMemo items={filter} callBack={id => changeFilter(id, 'filter1')}/>
                <span>Filter cities 2:</span>
                <SelectionMemo items={filter} callBack={id => changeFilter(id, 'filter2')}/>
            </Container>
        </>

    );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`