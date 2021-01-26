import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Card } from './Card';

export const NewGame = () => {
    
    const cardColors = [
        'blue',
        'red',
        'green',
        'yellow',
        'white',
        'grey',
        'purple',
        'orange',
        'pink',
        '#ebe1df',
        '#bc6ca7',
        '#bfd833',
      ];
    const level = useSelector((store) => store.game.gameoption.level);
    const [board, setBoard] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])

    useEffect (() => {
        const game = []
        for (let i =0; i< level /2; i++){
            const firstCard = {
                id: 2 * i,
                colorId: i,
                color: cardColors[i],
                flipped:false, 
            }
            console.log(firstCard)
            const secondCard = {
                id: 2 * i + 1,
                colorId: i,
                color: cardColors[i],
                flipped: false,
            }
            console.log(secondCard)
        
        game.push(firstCard);
        game.push(secondCard);
        }
        const gameBoard = game.sort(()=> Math.random() - 0.5)
        setBoard(gameBoard)   
    }, [])
    
    useEffect(() => {
        // Loads when the variables in the board changes
      }, [board])

    if (flippedIndexes.length === 2) {
        const match = board[flippedIndexes[0]].colorId === board[flippedIndexes[1]].colorId

  if (match) {
    const newGame = [...board]
    newGame[flippedIndexes[0]].flipped = true
    newGame[flippedIndexes[1]].flipped = true
    setBoard(newGame)

    const newIndexes = [...flippedIndexes]
    newIndexes.push(false)
    setFlippedIndexes(newIndexes)
  } else {
    const newIndexes = [...flippedIndexes]
    newIndexes.push(true)
    setFlippedIndexes(newIndexes)
  }
}

     //Add Lottie animation here

     if(board.length === 0) return <div>loading...</div>

     else {
        return (
          <CardsContainer>
            {board.map((card, index) => (
              <div className="card" key={index}>
                <Card
                  id={index}
                  color={card.color}
                  board={board}
                  flippedCount={flippedCount}
                  setFlippedCount={setFlippedCount}
                  flippedIndexes={flippedIndexes}
                  setFlippedIndexes={setFlippedIndexes}
                />
              </div>
            ))}
          </CardsContainer>
        )
      }
    };

    const CardsContainer = styled.div`
        width: 1060px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
`;