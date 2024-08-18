import React, {useEffect, useState} from 'react';
import {keyboard, keyboardKey} from "@testing-library/user-event/dist/keyboard";

export const PrintedSymbols = () => {
    const [text, setText] = useState('')
    useEffect(()=>{
        const handler = (e: keyboardKey)=> {
            setText(state => state + e.key)
        }
        window.addEventListener('keyup', handler)

        return () => {
            window.removeEventListener('keyup', handler)
        }
    }, [text])

    return (
        <div>
            printed : {text}
        </div>
    );
};


