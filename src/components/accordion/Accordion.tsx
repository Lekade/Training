import React, {ReactNode} from 'react';
import styled from "styled-components";

type  visibilityType = 'hidden' | 'visible'

type AccordionItems = {
    visibility: visibilityType
}
type Accordion = {
    collapsed: boolean
    children: ReactNode
    onClickHandler: () => void
}

export const Accordion = ({collapsed, children, onClickHandler}: Accordion) => {
    let visibility : visibilityType = collapsed ? 'hidden' : 'visible'
    return (
        < AccordionStyled>
            <AccordionTitle onClick={onClickHandler}>{children}</AccordionTitle>
            <AccordionItems visibility={visibility}>
                <li>1 point</li>
                <li>2 point</li>
                <li>3 point</li>
            </AccordionItems>
        </ AccordionStyled>
    );
};

const AccordionStyled = styled.div`
    padding: 50px;
`
const AccordionTitle = styled.button`
  background-color: aqua;
  padding: 10px;
  
`
const AccordionItems = styled.ul<AccordionItems>`
  list-style-type: none;
  padding-left: 5px;
  visibility: ${props => props.visibility};
`
