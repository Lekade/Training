import type { Meta } from '@storybook/react';
import React, {memo, useMemo, useState} from 'react';
import {v1} from "uuid";

const meta: Meta = {
    title: 'ReactMemo',
};

export default meta;

type usersType = {
    id: string
    name: string
}

const usersInitial: usersType[] = [
    {id: '01', name: 'Denis'},
    {id: '02', name: 'Vlad'},
    {id: '03', name: 'Igor'},
    {id: '04', name: 'Valera'},
    {id: '05', name: 'Gleb'}
]

const Users = ({users}:{users:usersType[]}) => {
    console.log('Users')
    return (
        <ul>
            {users.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
    )
}

const Display = ({counter}:{counter: number}) => {
    console.log('Display')
    return <div>{counter}</div>
}
const UsersMemo = memo(Users) // Убираем лишние перерисовки
const UseMemoDisplay = memo(Display)


export const ReactMemo = () => {
     const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(usersInitial)
    const addUser = () => {
         const newUser = {id:v1(), name: 'Felix' + new Date().getTime()}
        setUsers([...users, newUser])
    }

    const usersUseMemo = useMemo(()=> (
            users.filter(u => u.name.toLowerCase().indexOf('e'))
        ), [users])

    return(
        <div>
            <UseMemoDisplay counter={counter}/>
            <button onClick={() => setCounter(prevState => prevState + 1)}>add 1</button>
            <button onClick={addUser}>add user</button>
            <UsersMemo users={usersUseMemo}/>
        </div>

    )
}



