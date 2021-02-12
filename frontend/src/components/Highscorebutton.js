import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button,
    RestartWrapper
} from './StyledComponents';

export const Highscorebutton = () =>{
    

    return (
        <>
            <Link to="/highscore"> <Button> To Highscore </Button> </Link>
        </>

    )
};