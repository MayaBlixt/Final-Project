import React, { useState} from 'react'
import { game } from '../reducers/game';
import { useDispatch } from 'react-redux';
import "@lottiefiles/lottie-player";


import {
    H2Title,
    Button,
    Form,
    InputLabel,
    UserInput,
    WIPContainer,
    WIPText
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
                
                <Form onSubmit = {setUser}>
                    <H2Title>Start playing Memory</H2Title>
                    <WIPText>Choose a username to start playing the August & Clownen Memory game. </WIPText>
				    <InputLabel> Username:</InputLabel>
				    <UserInput
						required
						type="text"
                        name="select-username"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
						minLength="5"
						maxLength="30"
					/>
				
                <Button type="submit"> Choose username</Button>
                </Form>
            
             
        }
        {chooseLevel && 
                <WIPContainer>
                    <WIPText>And a difficulty level to play memory </WIPText>
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
            
