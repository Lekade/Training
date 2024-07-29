import React, {ButtonHTMLAttributes} from 'react';
import styled from '@emotion/styled'
import {Button} from "@mui/material";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?:   "text" | "outlined" | "contained" | undefined
}

export const StButton = ({onClick, className, children, disabled, variant='text'}:Props) => {
    return (
        <StyledButton color={'primary'} variant={variant} style={{cursor:"pointer"}} className={className} onClick={onClick}>{children}</StyledButton>
    );
};

const StyledButton = styled(Button)`
  color: ${props => props.color};
`

