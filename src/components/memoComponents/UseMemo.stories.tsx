import type { Meta } from '@storybook/react';
import React, {memo, useMemo, useState} from 'react';
import {v1} from "uuid";

const meta: Meta = {
    title: 'UseMemo'
};

export default meta;

export const UseMemo = () => {
    const [num1, setNum1] = useState(3)
    const [num2, setNum2] = useState(3)

    let result1
    let result2

    result1 = useMemo(()=>
        fun(num1, true)
    , [num1])

    result2 = useMemo(()=>
        fun(num2, false)
    , [num2])

    function fun(num: number, dopCalculation: boolean) {
        let result = 1
        for (let i = 1; i <= num; i++){
            if(dopCalculation){
                let x = 0
                for(let a = 0; x < 100000000; a++){
                    x++
                    // const fakeValue = Math.random()
                }
            }
            result *= i
        }
        return result
    }

    return (
        <div>
            <div>
                <span>Num 1</span>
                <input value={num1} onChange={e => setNum1(+e.currentTarget.value)} type="text"/>
            </div>
            <div>
                <span>Num 2</span>
                <input value={num2} onChange={e => setNum2(+e.currentTarget.value)} type="text"/>
            </div>
            <div><span>Result 1: </span>{result1}</div>
            <div><span>Result 2: </span>{result2}</div>
        </div>
    )


}