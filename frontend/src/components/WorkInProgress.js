import React from 'react';
import "@lottiefiles/lottie-player";
import { Link } from 'react-router-dom';

import {
    WIPText,
    WIPContainer,
    Button
} from '../components/StyledComponents';

export const WorkInProgress = () => {

    return (
  
        <WIPContainer>
             <WIPText> Ooops! We can´t seem to find the page You´re looking for </WIPText>
          
                <lottie-player src={"https://assets6.lottiefiles.com/packages/lf20_kYKYYG.json"}
                                mode="bounce" 
                                background="transparent"  
                                speed="1"  
                                style={{width: 200 }}  
                                loop  
                                autoplay/>
                
                <Link to="/"> <Button> Back to main page </Button> </Link>
            
        </WIPContainer>
    );
}