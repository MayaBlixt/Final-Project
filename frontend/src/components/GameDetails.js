import React from 'react'

import {
    Text,
    DetailsContainer
} from '../components/StyledComponents';

export const GameDetails = () => {

//Hämta värdet Score from the store + sätta score i newgame
    return (
        <>
         <DetailsContainer>
            <Text>User:  </Text>
            <Text>Time:  </Text>
            <Text>Score:  </Text>
        </DetailsContainer> 
        </>
    )
};
