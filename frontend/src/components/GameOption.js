import React from 'react'
import styled from 'styled-components'
import { game } from '../reducers/game';
import { useSelector, useDispatch } from 'react-redux';

export const GameOption = () => {
    const dispatch = useDispatch();
    const level = useSelector((store) => store.game.gameoption.level)

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
	display: block;
	margin: 30px 0;
	height: 30px;
	width: 150px;
	border-radius: 50px;
	background: pink;
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	font-size: 18px;
	font-weight: bold;
	color: ;
	&:hover {
		background: lightgreen;
		cursor: pointer;
	}
`;