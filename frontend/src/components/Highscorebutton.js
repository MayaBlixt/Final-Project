import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button,
} from './StyledComponents';

export const Highscorebutton = () =>{
    

    return (
        <>
            <Link to="/highscore"> <Button> To Highscore </Button> </Link>
        </>

    )
};