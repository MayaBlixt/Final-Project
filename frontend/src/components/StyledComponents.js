import styled from 'styled-components';
import { Link } from 'react-router-dom';

const red = '#C60303';
const redish = '#d5483f';
const black = '#1c2025';
const white = '#ffffff';

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
	width: 250px;
	height: 55px;
	border-radius: 30px;
	margin: 10px;
	border: 0;
	font-family: 'Rye', cursive;
    font-size: 18px;
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
    background-color: ${white};
    
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
    background-color:${white};
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

export const FooterContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${redish};
    color: white;
    text-align: center;
`;

/* Styling for Drawing Page */

export const WIPText = styled(Text)`
    font-family: 'Rye', cursive;
    font-size: 24px;
`;

export const WIPContainer = styled(BookContainer)`
    flex-direction:column; 
    width: 600px;
    height:auto;
    margin-bottom: 0;
    margin-top: 120px;
`;

/* Styling for GameDetails */

export const DetailsContainer = styled(Container)`
    padding: 20px;
    flex-direction:row;  
    margin-bottom: 20px;
    background-color:${white};
    
`;

/* Styling for GameOption */

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 30px;
  margin: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
    background-color: rgb(207,236,243, 0.8); 
    border-radius:16px;
  }
`;

export const UserInput = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  border: none;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(64,137,204);
  font-weight: 500;
  font-size: 25px;
  border-radius: 20px;
  margin: 10px;
`;

export const Label = styled.label`
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