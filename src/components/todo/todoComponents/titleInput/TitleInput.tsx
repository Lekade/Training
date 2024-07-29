import React, {useState} from 'react';
import styled from "@emotion/styled";
import {Input} from "@mui/material";

type TitleInput = {
    onChangeTitle: (title: string) => void
    title: string
}

export const TitleInput = ({onChangeTitle, title}: TitleInput) => {
    const [addMode, setAddMode] = useState<boolean>(false)
    const [newTitle, seNewTitle] = useState<string>(title)

    const onBlurInputHandler = () => {
        if (newTitle.trim().length) {
            onChangeTitle(newTitle)
            setAddMode(false)
        }
    }

    return (
        <>
            {addMode
                ? <div>
                    <Input
                        placeholder="Placeholder"
                        onChange={e => seNewTitle(e.currentTarget.value)}
                        onKeyDown={e => e.key === "Enter" && onBlurInputHandler()}
                        onBlur={onBlurInputHandler}
                        value={newTitle}
                        autoFocus
                    />
                </div>
                : <Title onDoubleClick={() => setAddMode(true)}>{title}</Title>}
        </>
    );
};


const Title = styled.h3`
  display: flex;
  align-items: center;
`

