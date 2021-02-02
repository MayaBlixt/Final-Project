import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Card } from './Card';
import memory1 from "../assets/Memory1.png";
import memory2 from "../assets/Memory2.png";
import memory3 from "../assets/Memory3.png";
import memory4 from "../assets/Memory4.png";
import memory5 from "../assets/Memory5.png";
import memory6 from "../assets/Memory6.png";
import memory7 from "../assets/Memory7.png";
import memory8 from "../assets/Memory8.png";
import memory9 from "../assets/Memory9.png";
import memory10 from "../assets/Memory10.png";
import memory11 from "../assets/Memory11.png";
import memory12 from "../assets/Memory12.png";


export const NewGame = () => {
    
    const cardColors = [
        memory1,
        memory2,
        memory3,
        memory4,
        memory5,
        memory6,
        memory7,
        memory8,
        memory9,
        memory10,
        memory11,
        memory12,
      ];
    const level = useSelector((store) => store.game.gameoption.level);
    const [board, setBoard] = useState([])
    const [flippedCount, setFlippedCount] = useState(0)
    const [flippedIndexes, setFlippedIndexes] = useState([])

    useEffect (() => {
      //Create a new array with the number of cards depending on set level and that gives 2 cards the same color 
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
        //Runs if 2 cards have been matched 
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
        height: auto;
        margin: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
`;