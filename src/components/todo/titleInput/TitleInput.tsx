import React, {ReactNode, useState} from 'react';

type TitleInput = {
    onChangeTitle: (title: string) => void
    title: string
}

export const TitleInput = ({onChangeTitle, title}:TitleInput) => {
    const [addMode, setAddMode] = useState<boolean>(false)
    const [newTitle, seNewTitle] = useState<string>(title)

    const onBlurInputHandler = () => {
        if(newTitle.trim().length){
            onChangeTitle(newTitle)
            setAddMode(false)
        }
    }

    return (
        <>
            {addMode
                ? <div><input
                    onChange={e => seNewTitle(e.currentTarget.value)}
                    onKeyDown={e => e.key === "Enter" && onBlurInputHandler()}
                    onBlur={onBlurInputHandler}
                    value={newTitle}
                    type="text"/></div>
                : <h3 onDoubleClick={() => setAddMode(true)}>{title}</h3>}
        </>
    );
};
