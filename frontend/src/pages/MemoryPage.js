import React from 'react';
import { useSelector } from 'react-redux';

import { Restart} from '../components/Restart'
import { GameOption } from '../components/GameOption'
import { NewGame } from '../components/NewGame'
import { GameDetails } from '../components/GameDetails'
import {
    Title,
    GameOptionContainer,
    MemoryContainer,
    RestartWrapper,
} from '../components/StyledComponents';
import { BackButton } from 'components/BackButton';
import { Highscorebutton } from 'components/Highscorebutton';

export const MemoryPage = () => {

    const level = useSelector((store) => store.game.gameoption.level)
    if (level === null) { 
        return (
                <GameOptionContainer>
                   <GameOption/>
                </GameOptionContainer>
        );
    };

    return (
        <MemoryContainer>
            <Title> Memory Game</Title>
            <GameDetails/>  
            <NewGame/>
            <RestartWrapper>
                <BackButton/> 
                <Highscorebutton/>
            </RestartWrapper>
        </MemoryContainer>
    );
};


