import React from 'react'

import {
    Text,
    WIPText,
    DetailsContainer
} from '../components/StyledComponents';

export const GameDetails = () => {

//Hämta värdet Score from the store + sätta score i newgame
    return (
        <>
         <DetailsContainer>
            <WIPText>Welcome ${} !</WIPText>
            <WIPText>Your score is:  </WIPText>
        </DetailsContainer> 
        </>
    )
};
