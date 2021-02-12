import React from 'react'
import "@lottiefiles/lottie-player";

import book from "../assets/Book_img.png";
import memory from "../assets/Memory_img.png";
import drawing from "../assets/Memory1.png";
import highscore from "../assets/Memory2.png";
import trapets from "../assets/Trapets.png";


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
    BookImage,
    H2Title,
    EndContainer
} from '../components/StyledComponents';

export const LandingPage = () => {

    return (
    
        <LandingContainer>
            <H1Title> August & Clownen fan page </H1Title> 
            <BookContainer>
            <BookImage src={book} alt="Bok image"/>
               <SectionWrapper>
                    <H2Title>New book release</H2Title>
                    <Text>This spring the fifth August and Clownen book will be release. <br></br>Until then check out the earlier books August & Clowen books </Text>
                    <StyledLink to="/books"> 
                        <Button>Check out books</Button>
                    </StyledLink>
                </SectionWrapper>
               <BookImage src={book} alt="Bok image"/>
            </BookContainer> 
            <Wrapper>
                <SectionContainer>
                    <SectionWrapper>
                        <H2Title>Memory game</H2Title>
                        <Text>Meet the August & Clownen characters and play some Memory</Text>
                        <StyledLink to="/memory"> 
                            <Button>Play memory</Button>
                        </StyledLink>
                    </SectionWrapper>
                    <Image src={memory} alt="August & Clownen"/>
                </SectionContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <H2Title> Game highscore</H2Title>
                        <Text>Take a look at the memory game highscore </Text>
                        <StyledLink to="/highscore"> 
                            <Button>Go to highscore </Button>
                        </StyledLink>
                    </SectionWrapper>
                    <Image src={drawing} alt="Clown"/>
                </SectionContainer>
            </Wrapper>
            <BookContainer>
            <BookImage src={highscore}/>
               <SectionWrapper>
                 <H2Title>Share your drawings</H2Title>
                    <Text> Show the whole world your best August & Clownen drawings. Go to the upload drawings page to make it happend </Text>
                    <StyledLink to="/drawings"> 
                        <Button>Upload drawing</Button>
                    </StyledLink>
                </SectionWrapper>
               <Image src={trapets} alt="Girl"/>
            </BookContainer> 
        <EndContainer></EndContainer>
            <Footer/>

        </LandingContainer>
        
    );
}

