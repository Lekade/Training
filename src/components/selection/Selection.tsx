import React, {useState} from 'react';
import {AccordionItems, AccordionStyled, AccordionTitle} from "../accordion/Accordion";


export type usersType = {
    id:string, name:string
}
type SelectionType = {
    users: usersType[]
    callBack: (id:string) => void
}


export const Selection = ({users, callBack}: SelectionType) => {
    const [selectUser, setSelectUser] = useState<usersType>(users[0])
    const [visibility, setVisibility] = useState<'hidden' | 'visible'>('hidden')
    const onClick = (id: string) => {
        callBack(id)
        setSelectUser(users.filter(u => u.id === id)[0])
        setVisibility('hidden')
    }
    return (
        <AccordionStyled>
            <AccordionTitle onClick={() => setVisibility('visible')}>{selectUser.name}</AccordionTitle>
            <AccordionItems visibility={visibility}>
                {
                    users.map(u =>
                        <li onClick={() =>  onClick(u.id)} key={u.id}>{u.name}</li>)
                }
            </AccordionItems>
        </AccordionStyled>
    );
};
