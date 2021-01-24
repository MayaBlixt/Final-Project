import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
        // Runs if two cards have been flipped
     }

     //Add Lottie animation here

     if(board.length === 0) return <div>loading...</div>

    else{

    }
     
    

};