import React from 'react';
import styled from 'styled-components';
import { game } from '../reducers/game';
import { useSelector } from 'react-redux';

import { Restart} from './Restart'
import { GameOption } from './GameOption'


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
            <Restart/>
        </Container>
    );
};

const Container = styled.div`
	display: absolute;
	justify-content: center;
	align-items: center;
	margin: 250px;
`;
const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;