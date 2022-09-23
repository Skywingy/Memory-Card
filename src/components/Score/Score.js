import React from 'react';
import BestScore from './BestScore';
import Current from './Current';

export default function Score() {
    return (
        <div className='Score'>
            <Current />
            <BestScore />
        </div>
    )
}
