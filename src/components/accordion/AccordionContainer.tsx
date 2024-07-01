import React, {useState} from 'react';
import {Accordion} from "./Accordion";

export const AccordionContainer = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Accordion onClickHandler={() => setCollapsed(!collapsed)} collapsed={collapsed}>Accordion</Accordion>
    );
};