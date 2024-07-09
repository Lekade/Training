import React from 'react';
import {Selection, usersType} from "./Selection";
import {v1} from "uuid";

const users:usersType[] = [
    {id: v1(), name: 'Denis'},
    {id: v1(), name: 'Valera'},
    {id: v1(), name: 'Igor'},
    {id: v1(), name: 'Vlad'}
]

export const SelectionContainer = () => {
    return (
        <Selection users={users} callBack={(id)=> alert(id)}/>
    );
};