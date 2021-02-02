import React, { useState} from 'react'
import styled from 'styled-components'
import { game } from '../reducers/game';
import { useDispatch } from 'react-redux';
import "@lottiefiles/lottie-player";

export const GameOption = () => {
    const dispatch = useDispatch();
    const [loadingState, setLoadingstate] = useState(false);
    const [player, setPlayer] = useState('');

    const updateGameLevel = (userlevel) => {
		const gamelevel = JSON.stringify(userlevel);
		dispatch(game.actions.setGameLevel({ level: gamelevel}));
        console.log(`Gamelevel ${gamelevel}`);
        setLoadingstate(true);
    };
    
    return (
        <>
         {!loadingState && 
            <> 
                <Title>Choose a username and s level to start playing the August & Clowen memory game </Title>
                	<Form>
				<Label>
				    Username:
					<input
						required
						type="text"
						name="select-username"
						value={player}
						onChange={(event) => setPlayer(event.target.value)}
						minlength="5"
						maxlength="30"
					/>
				</Label>
                <Container>
                <Button onClick={() => updateGameLevel(12)}>Easy </Button>
                <Button onClick={() => updateGameLevel(18)}>Medium</Button>
                <Button onClick={() => updateGameLevel(24)}>Hard</Button></Container>
                </Form>
             </>}
        
        </>
    )
}
/*{loadingState && <> <
    lottie-player
    autoplay
    loop
    mode="normal"
    src={'https://assets3.lottiefiles.com/temporary_files/jzVfLn.json'}
    style={{ height: 300 }}
  /></>}*/

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black
`;
const Button = styled.button`
    background: #00ad9f;
    border-radius: 4px;
    font-weight: 700;
    color:#C60303;
    font-family: 'Roboto', sans-serif;
    border: none;
    padding: 7px 15px;
    margin-left: 8px;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content: center;
`;
const  Container = styled.div`
    width: 1060px;
    hight: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    background: white;
    border-radius: 5%;
`;
const Form = styled.form`
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
const Label = styled.label`
	color: grey;
	font-size: 13px;
`;
