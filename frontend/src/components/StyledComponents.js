import styled from 'styled-components';
import { Link } from 'react-router-dom';

const red = '#C60303';
const redish = '#d5483f';
const black = '#1c2025';

/* Common component styling */
export const Container = styled.section`
    width: 1060px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
`;

export const H1Title = styled.h1`
    margin-top: 140px;
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    color:${red};
    font-family: 'Rye', cursive;
`;
export const H2Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: ${black}
    font-family: 'Rye', cursive;
`;

export const Text = styled.p`
    font-size: 20px;
    text-align: center;
    font-family: 'Roboto', sans-serif;

`;

export const Button = styled.button`
	width: 200px;
	height: 50px;
	border-radius: 30px;
	margin: 10px;
	border: 0;
	font-family: 'Rye', cursive;
    font-size: 20px;
    font-weight: 500;
	background-color: ${red};
    box-shadow: 3px 5px ${black};
    &:hover {
        background: ${redish};
        cursor: pointer;
    }
`;
/* Styling for Memory Page */

export const MemoryContainer = styled(Container)`
    flex-direction:column;     
    margin-bottom: 20px;
`;

export const GameOptionContainer = styled(Container)`
     margin-bottom: 10px;
`;

/* Styling for Landing Page */

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

`;

export const LandingContainer = styled(Container)`
    flex-direction:column;
    margin-bottom: 20px;
    justify-content: space-around;
    align-items:stretch;

`;

export const BookContainer = styled(Container)`
    padding: 35px;
    flex-direction:row; 
    width: 950px;
    height: 300px; 
    margin-bottom: 30px;
    background-color: rgba(255, 255, 255);
    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;

`;

export const Image = styled.img`
    width: 160px;
    float: left;
    margin-right: 10px;
    text-decoration: none;
`;

export const BookImage = styled(Image)`
    width: 200px;
    opacity: 1
    transition: 0.3s;
    &:hover {
        opacity: 0.6;
    } 

`;

export const SectionContainer = styled.div`
    margin: 0 auto;
    padding: 30px;
    display: flex;
    width: 420px;
    height: 250px;
    flex-direction:row;
  
    align-items: center;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255);
    border-radius: 30px;
    text-decoration: none;
    cursor: pointer;
`;

export const SectionWrapper = styled.div`
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    border-radius: 30px;
`;
/* Styling for GameDetails */

export const DetailsContainer = styled(Container)`
    padding: 20px;
    flex-direction:row;  
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255);
    
`;

/* Styling for GameOption */

export const Form = styled.form`
	margin: 130px 0 0 0;
	background: rgba(255, 255, 255, 0.8);
	padding: 3em;
	height: 300px;
	border-radius: 20px;
	border-left: 1px solid rgba(255, 255, 255, 0.8);
	border-top: 1px solid rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(5px);
	box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
	text-align: left;
	position: relative;
`;

export const Label = styled.label`
	color: grey;
	font-size: 13px;
`;

/* Styling for NewGame */

export const CardsContainer = styled.div`
    width: 1060px;
    height: auto;
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;