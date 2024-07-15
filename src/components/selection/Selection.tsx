import React, {useState, KeyboardEvent, useEffect, useRef} from 'react';
import styled from "styled-components";


export type itemsType = {
    id:string, [key: string]:string
}
type SelectionType = {
    items: itemsType[]
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

export const Selection = ({items, id, callBack}: SelectionType) => {
    console.log(items)
    let initialItems = items.find(i => i.id === id)

    const [selectItem, setSelectItem] = useState<itemsType>(initialItems ? initialItems : items[0])
    const [visibility, setVisibility] = useState<boolean>(false)
    const [hoveredItem, setHoveredItem] = useState(selectItem)

    const onClick = (id: string, withoutVisibility?: boolean) => {
        callBack(id)
        setSelectItem(prevState =>  items.filter(i => i.id === id)[0])
        visibilityItemListHandler(withoutVisibility)
    }

    const visibilityItemListHandler = (withoutVisibility?: boolean) => {
        if(!withoutVisibility){
            setVisibility(prevState => !prevState)
        }
        setHoveredItem(prevState =>  selectItem)
    }

    const keyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        let itemIndex = items.indexOf(hoveredItem)
        if(items[itemIndex - 1]){e.key === "ArrowUp" && onClick(items[itemIndex - 1].id, true )}
        if(items[itemIndex + 1]){e.key === "ArrowDown" && onClick(items[itemIndex + 1].id, true)}
        e.key === "Enter" && onClick(hoveredItem.id)
        e.key === "Escape" && visibilityItemListHandler()
    }

    useEffect(()=> {
        setHoveredItem(prevState =>  selectItem)
    }, [selectItem])

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
            >{selectItem.name ? selectItem.name : ''}</SelectionTitle>
            <SelectionList visibility={visibility ? 'visible' : 'hidden'}>
                {
                    items.length && items.map(i =>
                        <SelectionListItem
                            key={i.id}
                            tabIndex={1}
                            activeItemHover={hoveredItem.id === i.id}
                            onMouseOver={() => setHoveredItem(i)}
                            onClick={(e) =>  onClick(i.id)}
                        >
                            {i.name}
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

