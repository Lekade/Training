import React, {useState} from 'react';
import Star from "./star/Star";
import './Stars.css'

export type starsType = 0 | 1 | 2 | 3 | 4 | 5
export type starsPropsType = {
    initialData: starsType
}

const Stars = (props: starsPropsType) => {
    const [starData, setStarData] = useState<starsType>(props.initialData)

    return (
        <ul className='stars'>
            <Star starData={starData} starNumber={1} setStarData={setStarData}/>
            <Star starData={starData} starNumber={2} setStarData={setStarData}/>
            <Star starData={starData} starNumber={3} setStarData={setStarData}/>
            <Star starData={starData} starNumber={4} setStarData={setStarData}/>
            <Star starData={starData} starNumber={5} setStarData={setStarData}/>
        </ul>
    );
};

export default Stars;