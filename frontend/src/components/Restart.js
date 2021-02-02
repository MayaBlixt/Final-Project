
import React from 'react';
import styled from 'styled-components';
import { game } from '../reducers/game';
import { useDispatch } from 'react-redux';


export const Restart = () =>{
    const dispatch = useDispatch();

    const updateGameLevel = (userlevel) => {
		const gamelevel = JSON.stringify(userlevel);
		dispatch(game.actions.setGameLevel({ level: gamelevel}));
        console.log(`Gamelevel ${gamelevel}`);
	};

    return (
        <Button onClick={() => updateGameLevel(null)}> Restart game </Button>

    )
};

const Button = styled.button`
    display: block;
    margin: 30px;
    height: 50px;
    width: 220px;
    background:#C60303;
    font-family: 'Rye', cursive;
    border-radius: 50px;
    
    font-size: 20px;
    font-weight: bold;
    color: white;
    &:hover {
        background: red;
        cursor: pointer;
}
`;