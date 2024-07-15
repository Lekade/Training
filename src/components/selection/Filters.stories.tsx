import type { Meta } from '@storybook/react';
import React, {memo} from 'react';
import {Selection, itemsType} from "./Selection";
import styled from "styled-components";

const users:itemsType[] = [
    {id: '01', name: 'Denis'},
    {id: '02', name: 'Valera'},
    {id: '03', name: 'Igor'},
    {id: '04', name: 'Vlad'}
]

const meta: Meta = {
    title: 'Filter',
    component: Selection,
};
export default meta;

export const SelectionComponent = () => {
    const usersFilterA = users.filter(u => u.name.toLowerCase().indexOf('a') > -1)
    const usersFilterE = users.filter(u => u.name.toLowerCase().indexOf('e') > -1)
    const usersFilterI = users.filter(u => u.name.toLowerCase().indexOf('i') > -1)

    const SelectionA = memo(Selection)
    const SelectionE = memo(Selection)
    const SelectionI = memo(Selection)

    return (
        <Container>
            <SelectionA items={usersFilterA} id={'01'} callBack={(id)=> {}}/>
            <SelectionE items={usersFilterE} id={'01'} callBack={(id)=> {}}/>
            <SelectionI items={usersFilterI} id={'01'} callBack={(id)=> {}}/>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`