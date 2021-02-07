import React from 'react'

import book from "../assets/Book_img.png";
import memory from "../assets/Memory_img.png";
import drawing from "../assets/Memory1.png";
import {
    StyledLink,
    H1Title,
    LandingContainer,
    BookContainer,
    Wrapper,
    Text,
    Image,
    SectionContainer
} from '../components/StyledComponents';

export const LandingPage = () => {

    return (
    
        <LandingContainer>
            <H1Title> August & Clownen fan page </H1Title> 
            <StyledLink to="/memory"> 
            <BookContainer>
               <Text>Good news! This spring the fifth August and Clownen book will be release.</Text>
               <Image src={book}/>
            </BookContainer>
            </StyledLink>
            
            <Wrapper>
                <SectionContainer>
                    <StyledLink to="/memory"> 
                        <Text>Meet the August & Clownen carachters and play some Memory</Text>
                        <Image src={memory}/>
                    </StyledLink>
                </SectionContainer>
                <SectionContainer>
                    <StyledLink to="/drawings"> 
                        <Text>Upload some August & Clownen drawings </Text>
                        <Image src={drawing}/>
                    </StyledLink>
                </SectionContainer>
            </Wrapper>
            
            
        </LandingContainer>
    );
}

