import {Button} from "@mui/material";
import {ButtonProps} from "@mui/material/Button/Button";
import {memo} from "react";


type MemoButtonTypeProps = ButtonProps & {}

export const MemoButton = memo(({children, ...rest}: MemoButtonTypeProps) => {
    return <Button {...rest}>{children}</Button>
})