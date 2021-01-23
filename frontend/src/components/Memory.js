import React from 'react';
import styled from 'styled-components';
import { game } from '../reducers/game';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from './Card'

export const Memory = () => {
    const dispatch = useDispatch();
    const level = useSelector((store) => store.game.gameoption.level)
   
if (!level) { 
        return (
    <Container>
     <Card/>  
    </Container>
    );
};
};
const Container = styled.div`
	display: absolute;
	justify-content: center;
	align-items: center;
	margin: 250px;
`;