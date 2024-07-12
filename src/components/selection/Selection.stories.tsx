import type { Meta } from '@storybook/react';
import React from 'react';
import {Selection, usersType} from "./Selection";

const users:usersType[] = [
    {id: '01', name: 'Denis'},
    {id: '02', name: 'Valera'},
    {id: '03', name: 'Igor'},
    {id: '04', name: 'Vlad'}
]

const meta: Meta = {
    title: 'Selection',
    component: Selection,
};
export default meta;

export const SelectionContainer = () => {
    return (
        <Selection users={users} id={'03'} callBack={(id)=> {}}/>
    );
};