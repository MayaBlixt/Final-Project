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
    margin-top: 90px;
    margin-bottom: 40px;
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    color:${black};
    font-family: 'Rye', cursive;
    @media (max-width: 668px) {
        font-size: 50px;
        
      };
      @media (min-width: 669px) and (max-width: 1023px) {
        margin-bottom: 45px;
      };
`;
export const H2Title = styled.h2`
    font-size: 24px;
    text-align: center;
    color: ${black};
    font-family: 'Rye', cursive;
    margin-bottom:0;
`;
export const H3Title = styled.h3`
    font-size: 20px;
    text-align: center;
    color: ${black};
    font-family: 'Rye', cursive;
    margin-bottom:0;
    font-weight:500;
    @media (max-width: 668px) {
        font-size: 30px;
        
      };
      @media (min-width: 669px) and (max-width: 1023px) {
        margin-bottom: 25px;
      };
`;

export const Text = styled.p`
    font-size: 14px;
    text-align: justify;
    font-family: 'Roboto', sans-serif;
    font-weight:500;
    margin-top:1;
    @media (max-width: 668px) {
        font-size: 22px;
        
      };
      @media (min-width: 669px) and (max-width: 1023px) {
        margin-bottom: 18px;
      };

`;

export const Button = styled.button`
	width: 180px;
	height: 40px;
	border-radius: 30px;
	margin: 10px;
	border: 0;
	font-family: 'Rye', cursive;
    font-size: 14px;
    font-weight: 500;
	background-color: ${red};
    box-shadow: 3px 5px ${black};
    &:hover {
        background: ${redish};
        cursor: pointer;
    }
    @media (max-width: 668px) {
        width: 220px;
        height: 60px
      };
      @media (min-width: 669px) and (max-width: 1023px) {
        width: 220px;
        height: 60px
      };
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
    width: 800px;
    height: 130px; 
    margin-bottom: 15px;
    background-color: ${white};
    @media (max-width: 668px) {
        width: 80%;
        height: 70%;
      };
      @media (min-width: 669px) and (max-width: 1023px) {
        width: 650px;
        height: 45%;
      };
    
`;
export const EndContainer = styled(Container)`
    padding: 35px;
    flex-direction:row; 
    width: 800px;
    height: 100px; 
    margin-bottom: 15px;
    
`;

export const Wrapper = styled.div`
    width: 1060px;
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    margin-bottom: 5px;
    @media (max-width: 668px) {
    
        flex-direction:column;
      };
      @media (min-width: 669px) and (max-width: 1023px) {
       
        flex-direction:column;
      };

`;

export const Image = styled.img`
    width: 140px;
    text-decoration: none;
    padding-right: 10px;
`;

export const BookImage = styled(Image)`
    width: 120px;
    opacity: 1
    transition: 0.3s;
    :hover {
        animation: shake 1s;
        animation-iteration-count: infinite;
      }
      
      @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
    

`;

export const SectionContainer = styled.div`
    margin: 10px;
    padding: 15px;
    display: flex;
    width: 392px;
    height: 200px;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    background-color:${white};
    border-radius: 30px;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 668px) {
        width: 100%
        height: 50%;
      
      };
      @media (min-width: 669px) and (max-width: 1023px) {
        width: 680px;
        height: 45%;
       
      };
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
    background-color: #c60303;
    color: white;
    text-align: center;
    height: 60px;
`;

/* Styling for Drawing Page */

export const WIPText = styled(Text)`
    font-family: 'Rye', cursive;
    font-size: 18px;
`;

export const WIPContainer = styled(BookContainer)`
    flex-direction:column; 
    width: 400px;
    height:auto;
    margin-bottom: 0;
    margin-top: 120px;
`;

/* Styling for GameDetails */

export const DetailsContainer = styled(Container)`
    padding: 20px;
    flex-direction:row;  
    margin-bottom: 20px;
    width:920px;
    height:25px;
    background-color:${white};
    justify-content: space-evenly;
    
`;

/* Styling for GameOption */

export const Form = styled.form`
  width: 500px;
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
    width: 180px;
    height: 40px;
    border-radius: 30px;
    margin-bottom: 15px;
    font-size: 14px;
    font-family: 'Rye', cursive;
    text-align: center;
    border: none;
    -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
    box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
`;

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: 'Rye', cursive;
    font-size: 16px;
    color:${black};
    font-weight: 500;
    border-radius: 20px;
    margin: 20px;
    margin-top:40px;
`;

export const Label = styled.label`
	font-size: 13px;
`;

export const GameImage = styled(Image)`
    width: 250px;
    opacity: 1
    transition: 0.3s;
    

`;

/* Styling for NewGame */

export const CardsContainer = styled.div`
    width: 960px;
    height: auto;
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const RestartWrapper = styled.div`
flex-direction:row;
`;

/* Styling for Highscore page */

export const TotalScore = styled.span`
	color: ${red};
	float: right;
	margin-left: 10px;
	font-size: 20px;
	font-weight: bold;
`;
export const FirstPlaceCirkel = styled.div`
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background-color: ${red};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;


export const FirstPlaceScore = styled(TotalScore)`
	font-size: 24px;
`;
export const FirstPlace = styled.div`
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background-color: ${red};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

export const FirstPlaceContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const HeaderScore = styled.h1`
	font-size: 100px;
	margin: 0;
	padding: 0;
	color: ${red};
	font-weight: 900;
	line-height: 90px;
`;
export const Header = styled.h1`
	color: ${red};
	text-align: center;
	font-size: 30px;
`;
export const OrderedList = styled.ol`
	width: 90%;
	box-sizing: border-box;
	font-weight: bold;
	margin: 30px;
`;
export const List = styled.li`
	color: ${red};
	border-bottom: 0.2px solid #0b1d34;
	padding: 15px;
	font-size: 24px;
	::marker {
		color: ${red};
		font-size: 18px;
	}
`;