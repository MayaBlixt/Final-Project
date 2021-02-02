import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Restart} from './Restart'
import { GameOption } from './GameOption'
import { NewGame } from './NewGame'
import { GameDetails } from './GameDetails'


export const Memory = () => {

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
            <MemoryTitle> Memory Game</MemoryTitle>
            <GameDetails/>  
            <NewGame/>
            <Restart/> 
        </MemoryContainer>
    );
};

const MemoryContainer = styled.div`
    width: 1060px;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const GameOptionContainer = styled.div`
    width: 1060px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;
const MemoryTitle = styled.h2`
    margin-top: 140px;
    font-size: 60px;
    text-align: center;
    color:#C60303;
    font-family: 'Rye', cursive;
   
`;
