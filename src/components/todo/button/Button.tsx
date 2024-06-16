import React, {ButtonHTMLAttributes} from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({onClick, className, children, disabled}:Props) => {
    return (
        <button style={{cursor:"pointer"}} className={className} onClick={onClick}>{children}</button>
    );
};

export default Button;