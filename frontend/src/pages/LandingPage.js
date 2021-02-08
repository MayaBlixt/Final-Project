import React from 'react'

import book from "../assets/Book_img.png";
import memory from "../assets/Memory_img.png";
import drawing from "../assets/Memory1.png";
import { Footer } from '../components/Footer'

import {
    StyledLink,
    H1Title,
    LandingContainer,
    BookContainer,
    Wrapper,
    Text,
    Image,
    SectionContainer,
    Button,
    SectionWrapper,
    BookImage
} from '../components/StyledComponents';

export const LandingPage = () => {

    return (
    
        <LandingContainer>
            <H1Title> August & Clownen fan page </H1Title> 
            
            <BookContainer>
               <SectionWrapper>
                    <Text>This spring the fifth August and Clownen book will be release.</Text>
                    <StyledLink to="/book"> 
                        <Button>Check out books</Button>
                    </StyledLink>
                </SectionWrapper>
               <BookImage src={book}/>
            </BookContainer> 
            <Wrapper>
                <SectionContainer>
                    <SectionWrapper>
                        <Text>Meet the August & Clownen characters and play some Memory</Text>
                        <StyledLink to="/memory"> 
                            <Button>Play memory</Button>
                        </StyledLink>
                    </SectionWrapper>
                    <Image src={memory}/>
                </SectionContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <Text>Upload some August & Clownen drawings </Text>
                        <StyledLink to="/drawings"> 
                            <Button>Upload drawing</Button>
                        </StyledLink>
                    </SectionWrapper>
                    <Image src={drawing}/>
                </SectionContainer>
            </Wrapper>
            <Footer/>
        </LandingContainer>
        
    );
}

