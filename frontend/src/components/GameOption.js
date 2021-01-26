import React from 'react'
import styled from 'styled-components'
import { game } from '../reducers/game';
import { useDispatch } from 'react-redux';

export const GameOption = () => {
    const dispatch = useDispatch();

    const updateGameLevel = (userlevel) => {
		const gamelevel = JSON.stringify(userlevel);
		dispatch(game.actions.setGameLevel({ level: gamelevel}));
        console.log(`Gamelevel ${gamelevel}`);
    };
    
    return (
        <>
            <Title>Choose level to start playing August & Clowen memory game </Title>
            <Button onClick={() => updateGameLevel(12)}>Easy </Button>
            <Button onClick={() => updateGameLevel(18)}>Medium</Button>
            <Button onClick={() => updateGameLevel(24)}>Hard</Button>
        </>
    )
}
const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: black
`;
const Button = styled.button`
    background: #00ad9f;
    border-radius: 4px;
    font-weight: 700;
    color: #fff;
    border: none;
    padding: 7px 15px;
    margin-left: 8px;
    cursor: pointer;
`;