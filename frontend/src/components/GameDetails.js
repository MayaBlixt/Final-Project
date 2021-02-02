import React from 'react'
import styled from 'styled-components'

export const GameDetails = () => {

    return (
        <>
         <Container>
            <Text>User:  </Text>
            <Text>Time:  </Text>
            <Text>Score:  </Text>
        </Container> 
        </>
    )
};
const Container = styled.div`
    width: 1060px;
    hight: 60x;
    margin: 0 auto;
    display: flex;
    background-color: rgba(255, 255, 255, 0.9);
    justify-content: space-around;
    border-radius: 30px;
`;
const Text = styled.p`
    font-size: 25px;
    text-align: center;
    font-family: 'Rye', cursive;
`;