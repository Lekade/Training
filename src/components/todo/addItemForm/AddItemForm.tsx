import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from "../button/Button";

type AddItemForm = {
    addItem: (inputValue: string) => void
}

const AddItemForm = (props: AddItemForm) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)
    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setInputValue(e.currentTarget.value)
    }
    const addItem = () => {
        if(inputValue.trim()){
            props.addItem(inputValue.trim())
            setInputValue('')
        }else {
            setError(true)
        }
    }
    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addItem()
    return (
        <div>
            <input className={error ? 'error' : ''} value={inputValue} onChange={changeInputValue} onKeyDown={onInputKeyDown}/>
            <Button onClick={addItem}>Add</Button>
            {error && <div className='error-message'>The field is required</div>}
        </div>
    );
};

export default AddItemForm;