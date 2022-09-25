import React from 'react';
import styled from 'styled-components';

export default function Card({handleCardClick, naruto}) {
    console.log("url", naruto.images.original.url)
    return (
    <CardWrapper className='card' onClick={handleCardClick}>
        <Image src={naruto.images.original.url} alt={naruto.id} />
        <Name className='name' style={{display: 'none'}}>{naruto.id}</Name>
    </CardWrapper>
    
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: transform 0.3s;
    cursor: pointer;
    &:hover {
    transform: scale(1.05);
}
`

const Image = styled.img`
    padding: 0.5rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

const Name = styled.p`
    padding: 0.5rem;
    font-size: 0;
    font-weight: 0;
    text-align: center;
`
