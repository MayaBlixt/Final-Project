
import React from 'react';
import { game } from '../reducers/game';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    Button,
    RestartWrapper
} from '../components/StyledComponents';

export const Restart = () =>{
    const dispatch = useDispatch();

    const updateGameLevel = (userlevel) => {
		const gamelevel = JSON.stringify(userlevel);
		dispatch(game.actions.setGameLevel({ level: gamelevel}));
        console.log(`Gamelevel ${gamelevel}`);
	};

    return (
        <RestartWrapper>
            <Link to="/memory"> <Button onClick={() => updateGameLevel(null)}> Restart game </Button> </Link>
            <Link to="/"> <Button onClick={() => updateGameLevel(null)}> Back to main page </Button> </Link>
        </RestartWrapper>

    )
};

