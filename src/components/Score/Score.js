import React from 'react'
import styled from 'styled-components';

export default function Score({currentScore, bestScore}) {
    return (
        <div>
            <h4>Current score: {currentScore}</h4>
            <h4>Best score: {bestScore}</h4>  
        </div>
    )
}
