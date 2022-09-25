import React, { useEffect, useState } from 'react';
import Score from './Score/Score';
import CardGrid from './Card/CardGrid';
import styled from 'styled-components';
import { shuffleArray } from './Files/Utils';


export default function Main() {
    const amount = 12;
    const [naruto, setNaruto] = useState([]);
    const [clickedNaruto, setClickedNaruto] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    console.log("Start"); 
    
        useEffect(() => {
        const loadCards = async () => {
            setNaruto(shuffleArray(await fetchNarutos(amount)))
            console.log("shuffled")
        }
            loadCards()
        }, [])

        const fetchNarutos = async (amount) => {
            const naruto = []

            for (let i = 1; i <= amount; i++) {
            const narutoUrl = `https://api.giphy.com/v1/gifs/search?api_key=w0cPdXNtAyZ3SGAsxdszCWT7TZGG8YSY&q=Naruto&limit=12&offset=0&rating=g&lang=en/${i}`
            const response = await fetch(narutoUrl)
            const narutoChar = await response.json()
            
            const id = narutoChar.data[i].id
            
            const image = narutoChar.data[i].images.original.url
            
            
            naruto.push({id, image})
            setNaruto(narutoChar.data)
            }
            return naruto
            }
        /* useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=w0cPdXNtAyZ3SGAsxdszCWT7TZGG8YSY&q=Naruto&limit=12&offset=0&rating=g&lang=en/${naruto}`)
        .then(response => response.json())
        .then(json => setNaruto(json))
        
        }, [naruto])

        console.log("naruto", naruto);
        console.log("naruto.data", naruto.data)
        const data = naruto.data;
        console.log(data); */ 
        
        const handleCardClick = (e) => {
            const narutoName = e.target.parentNode.lastChild.textContent
            playRound(narutoName)
            setNaruto(shuffleArray(naruto))
        }

        const playRound = (narutoName) => {
            if (clickedNaruto.includes(narutoName)) {
                resetGame()
            } else {
                const newScore = currentScore + 1
                if (newScore > bestScore) setBestScore(newScore)
                setCurrentScore(newScore)
                setClickedNaruto((prevState) => [...prevState, narutoName])
            }
        };

        const resetGame = () => {
            setClickedNaruto([])
            setCurrentScore(0)
        }
        
    return (
        <MainWrapper className='main'>
        <Score
            currentScore={currentScore}
            bestScore={bestScore}
        ></Score>
        
        <CardGrid
            narutos={naruto}
            handleclick={handleCardClick}
        >
        </CardGrid>
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 4rem;
    margin-bottom: 3.5rem;
`
