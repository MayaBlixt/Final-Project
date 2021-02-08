import React from 'react';
import "@lottiefiles/lottie-player";

import {
    WIPText,
    WIPContainer
    
} from '../components/StyledComponents';

export const WorkInProgress = () => {

    return (
  
        <WIPContainer>
          
                <lottie-player src={"https://assets6.lottiefiles.com/packages/lf20_kYKYYG.json"}
                                mode="bounce" 
                                background="transparent"  
                                speed="1"  
                                style={{width: 300 }}  
                                loop  
                                autoplay/>
                < WIPText> Work in progress </WIPText>
            
        </WIPContainer>
    );
}