import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from "@mui/material";
import styled from "styled-components";

type AddItemForm = {
    addItem: (inputValue: string) => void
    placeholder: string
}

const AddItemForm = ({addItem, placeholder}: AddItemForm) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)
    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setInputValue(e.currentTarget.value)
    }
    const addItemHandler = () => {
        if (inputValue.trim()) {
            addItem(inputValue.trim())
            setInputValue('')
        } else {
            setError(true)
        }
    }
    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addItemHandler()
    return (
        <StyledAddItemForm>
            <TextField
                id="outlined-basic"
                label={placeholder}
                variant="outlined"
                value={inputValue}
                onChange={changeInputValue}
                onKeyDown={onInputKeyDown}
                error={!!error}
            />
            {/*<input className={error ? 'error' : ''} value={inputValue} onChange={changeInputValue} onKeyDown={onInputKeyDown}/>*/}
            <Button
                variant="contained"
                onClick={addItemHandler}
                sx={{
                    height: '56px',
                    textTransform: 'capitalize'
                }}
            >Add</Button>
            {error && <div className='error-message'>The field is required</div>}
        </StyledAddItemForm>
    );
};

export default AddItemForm;
const StyledAddItemForm = styled.div`
  margin-bottom: 25px;
`