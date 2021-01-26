import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Restart} from './Restart'
import { GameOption } from './GameOption'
import { NewGame } from './NewGame'


export const Memory = () => {

    const level = useSelector((store) => store.game.gameoption.level)
    if (level === null) { 
        return (
                <Container>
                   <GameOption/>
                </Container>
        );
    };

    return (
        <Container>
            <Title> Welcome to the Memory Game</Title>
            <NewGame/>
            <Restart/>
        </Container>
    );
};

const Container = styled.div`
    width: 1060px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;