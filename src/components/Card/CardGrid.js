import React from 'react';
import styled from 'styled-components';
import Card from './Card'

export default function CardGrid({narutos, handleclick}) {
    console.log("narutos which is naruto state", narutos)
    const narutoCards = narutos.map((naruto) => {
        return <Card className='Card' key={naruto.id} naruto={naruto} handleCardClick={handleclick}/>
})
    console.log("narutoCards which is mapped and got id ans image", narutoCards)
    return (
        <CardsGridWrapper className='Cardgrid'>
            {narutoCards}
        </CardsGridWrapper>
    )
}

const CardsGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
}
    @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    }
`
