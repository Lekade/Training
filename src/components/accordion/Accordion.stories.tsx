import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'

import React, {useState} from "react";
import {Accordion} from "./Accordion";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const AccordionDemo2: Story = {
    args: {
        children: 'Accordion',
        collapsed: false,
        onClickHandler: () => {}
    },
};


const onChangeCallback = action('onChange')
export const CollapsedAccordion = () => {
    return <Accordion onClickHandler={onChangeCallback} collapsed={true}>Accordion</Accordion>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Accordion onClickHandler={() => setCollapsed(!collapsed)} collapsed={collapsed}>Accordion</Accordion>
    );
}