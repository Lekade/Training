import React from 'react';
import './Star.css'
import {starsType} from "../Stars";

type starPropsType = {
    starData : starsType
    starNumber: starsType
    setStarData: (data: starsType) => void
}

const Star = (props: starPropsType) => {
    return (
        <li className={props.starData >= props.starNumber ? `star active` : 'star'}>
            <button className='starBtn' onClick={() => props.setStarData(props.starNumber)}></button>
        </li>
    );
};

export default Star;