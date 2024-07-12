import React, {useState, KeyboardEvent, useEffect, useRef} from 'react';
import styled from "styled-components";


export type usersType = {
    id:string, name:string
}
type SelectionType = {
    users: usersType[]
    id: string
    callBack: (id:string) => void
}
type visibility = 'visible' | 'hidden'

type SelectionListType = {
    visibility:  visibility
}

type SelectionListItemType = {
    activeItemHover: boolean
}

export const Selection = ({users, id, callBack}: SelectionType) => {
    let initialUser = users.find(u => u.id === id)

    const [selectUser, setSelectUser] = useState<usersType>(initialUser ? initialUser : users[0])
    const [visibility, setVisibility] = useState<boolean>(false)
    const [hoveredItem, setHoveredItem] = useState(selectUser)

    const onClick = (id: string, withoutVisibility?: boolean) => {
        callBack(id)
        setSelectUser(prevState =>  users.filter(u => u.id === id)[0])
        visibilityItemListHandler(withoutVisibility)
    }

    const visibilityItemListHandler = (withoutVisibility?: boolean) => {
        if(!withoutVisibility){
            setVisibility(prevState => !prevState)
        }
        setHoveredItem(prevState =>  selectUser)
    }

    const keyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        let userIndex = users.indexOf(hoveredItem)
        if(users[userIndex - 1]){e.key === "ArrowUp" && onClick(users[userIndex - 1].id, true )}
        if(users[userIndex + 1]){e.key === "ArrowDown" && onClick(users[userIndex + 1].id, true)}
        e.key === "Enter" && onClick(hoveredItem.id)
        e.key === "Escape" && visibilityItemListHandler()
    }

    useEffect(()=> {
        setHoveredItem(prevState =>  selectUser)
    }, [selectUser])

    // const selectorRef = useRef(null)
    // useEffect(()=> {
    //     if(!visibility) return
    //
    //     const handlerClick = (e: any) => {
    //         if(!selectorRef.current) return
    //         if(!selectorRef.current.contains(e.target)){
    //             visibilityItemListHandler()
    //         }
    //     }
    //     document.addEventListener('click', handlerClick)
    //
    //     return () => {
    //         document.removeEventListener('click', handlerClick)
    //     }
    // }, [visibility])


    return (
        <StyledSelection
            // ref={selectorRef}
        >
            <SelectionTitle
                onClick={() => visibilityItemListHandler(false)}
                onKeyUp={keyUpHandler} tabIndex={0}
            >{selectUser.name ? selectUser.name : ''}</SelectionTitle>
            <SelectionList visibility={visibility ? 'visible' : 'hidden'}>
                {
                    users.length && users.map(u =>
                        <SelectionListItem
                            key={u.id}
                            tabIndex={1}
                            activeItemHover={hoveredItem.id === u.id}
                            onMouseOver={() => setHoveredItem(u)}
                            onClick={(e) =>  onClick(u.id)}
                        >
                            {u.name}
                        </SelectionListItem>)
                }
            </SelectionList>
        </StyledSelection>
    );
};


const StyledSelection = styled.div`
  display: inline-block;
`

const  SelectionTitle = styled.div`
  padding: 10px;
  border: 1px #000 solid;
  cursor: pointer;
`

const SelectionList = styled.ul<SelectionListType>`
  padding-left: 0;
  margin: 0;
  visibility: ${props => props.visibility};
  max-height: ${props => props.visibility === 'hidden' ? '0' : '100%'};
  list-style-type: none;
  border: 1px #000 solid;
`

const SelectionListItem = styled.li<SelectionListItemType>`
  padding: 10px;
  cursor: pointer;
  background-color: ${props => props.activeItemHover ? '#000' : 'transparent'};
  color: ${props => props.activeItemHover ? '#fff' : '#000'};
  transition: background-color 0.5s, color 0.5s;
`

