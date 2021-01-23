
import React from 'react';
import styled from 'styled-components';
import { game } from '../reducers/game';
import { useSelector, useDispatch } from 'react-redux';


export const Restart = () =>{
    const dispatch = useDispatch();
    const level = useSelector((store) => store.game.gameoption.level)

    const updateGameLevel = (userlevel) => {
		const gamelevel = JSON.stringify(userlevel);
		dispatch(game.actions.setGameLevel({ level: gamelevel}));
        console.log(`Gamelevel ${gamelevel}`);
	};

    return (
        <button onClick={() => updateGameLevel(null)}>Start over</button>

    )
};

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