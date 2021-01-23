import React from 'react';
import styled from 'styled-components';
import { game } from '../reducers/game';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from './Card'

export const Memory = () => {
    const dispatch = useDispatch();
    const level = useSelector((store) => store.game.gameoption.level)

    const updateGameLevel = (userlevel) => {
		const gamelevel = JSON.stringify(userlevel);
		dispatch(game.actions.setGameLevel({ level: gamelevel}));
        console.log(`Gamelevel ${gamelevel}`);
	};
   
if (!level) { 
        return (
    <Container>
        <h2>Choose level to start playing August & Clowen memory game </h2>
        <Button onClick={() => updateGameLevel(12)}>Easy </Button>
        <Button onClick={() => updateGameLevel(18)}>Medium</Button>
        <Button onClick={() => updateGameLevel(24)}>Hard</Button>
    </Container>
    );
};
return (
    <h1>Welcome to the Memory Game</h1>
)
};
const Container = styled.div`
	display: absolute;
	justify-content: center;
	align-items: center;
	margin: 250px;
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
	color: black;
	&:hover {
		background: lightgreen;
		cursor: pointer;
	}
`;