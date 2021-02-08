import React, { useState} from 'react'
import { game } from '../reducers/game';
import { useDispatch } from 'react-redux';
import "@lottiefiles/lottie-player";

import cannon from "../assets/Cannon.png";
import tent from "../assets/Trapets.png";
import {
    GameImage,
    Button,
    Form,
    InputLabel,
    UserInput,
    WIPContainer,
    WIPText,
    H2Title
} from '../components/StyledComponents';

export const GameOption = () => {
    const dispatch = useDispatch();
    const [loadingState, setLoadingstate] = useState(false);
    const [chooseLevel, setChooseLevel] = useState(false);
    const [name, setName] = useState('');
   
    
   const setUser = () => {
		/*const player = JSON.stringify(username);
        dispatch(game.actions.setUser({ username: player}));*/
        console.log(`Username: ${name}`)
        setChooseLevel(true);
    }
   
    const updateGameLevel = (userlevel) => {
		const gamelevel = JSON.stringify(userlevel);
		dispatch(game.actions.setGameLevel({ level: gamelevel}));
        console.log(`Gamelevel ${gamelevel}`);
        setLoadingstate(true);
    };
    
    
   
    return (
         <>
        {!chooseLevel && 
                <WIPContainer>
                <Form onSubmit = {setUser}>
                    <H2Title> Pick a username to start playing ... </H2Title>
                    <GameImage src={cannon}/>
				    <InputLabel> Username:</InputLabel>
				    <UserInput
						required
						type="text"
                        name="select-username"
                        placeholder="enter a username"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
						minLength="5"
						maxLength="30"
					/>
				
                <Button type="submit"> Start playing</Button>
                </Form>
                </WIPContainer>
            
             
        }
        {chooseLevel && 
                <WIPContainer>
                    <H2Title>... and pick a difficulty level </H2Title>
                    <GameImage src={tent}/>
                    <Button onClick={() => updateGameLevel(12)}>Easy </Button>
                    <Button onClick={() => updateGameLevel(18)}>Medium</Button>
                    <Button onClick={() => updateGameLevel(24)}>Hard</Button>
                </WIPContainer>
               
            
        }
        {loadingState &&  <lottie-player src={"https://assets6.lottiefiles.com/packages/lf20_kYKYYG.json"}
                                mode="bounce" 
                                background="transparent"  
                                speed="1"  
                                style={{width: 300 }}  
                                loop  
                                autoplay/>}
        </>
        )
    }
            
