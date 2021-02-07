import React, { useState} from 'react'
import { game } from '../reducers/game';
import { useDispatch } from 'react-redux';


import {
    H2Title,
    Text,
    Button,
    Container,
    Form,
    Label
} from '../components/StyledComponents';

export const GameOption = () => {
    const dispatch = useDispatch();
    const [loadingState, setLoadingstate] = useState(false);
    const [chooseLevel, setChooseLevel] = useState(false);
   
    
   /* const setUser = (username) => {
		const player = JSON.stringify(username);
		dispatch(game.actions.setUser({ username: player}));
        setChooseLevel(true);
    }
   
    const updateGameLevel = (userlevel) => {
		const gamelevel = JSON.stringify(userlevel);
		dispatch(game.actions.setGameLevel({ level: gamelevel}));
        console.log(`Gamelevel ${gamelevel}`);
        setLoadingstate(true);
    }; */
    
    
   /* if(!loadingState){
    return (
        <>
        {!chooseLevel &&
            <> 
                <Form>
                    <H2Title>Start playing Memory</H2Title>
                    <Text>Choose a username to start playin the August & Clownen Memory game. </Text>
				<Label>
				    Username:
					<input
						required
						type="text"
						name="select-username"
						value={userlevel}
						onChange={(event) => setUser(event.target.value)}
						minLength="5"
						maxLength="30"
					/>
				</Label>
                <Button type="submit" onClick={setUser}> </Button>
                </Form>
             </>
            }
        
            {chooseLevel && <Container>
                <Button onClick={() => updateGameLevel(12)}>Easy </Button>
                <Button onClick={() => updateGameLevel(18)}>Medium</Button>
                <Button onClick={() => updateGameLevel(24)}>Hard</Button>
            </Container>}
            </>
             
             
        )
    }else { */
		    return (
                <>
              <loading></loading>
                
      
                </>
                
            )
    
        }
//}
/*{loadingState && <> <
    lottie-player
    autoplay
    loop
    mode="normal"
    src={'https://assets3.lottiefiles.com/temporary_files/jzVfLn.json'}
    style={{ height: 300 }}
  /></>}*/

