import React from 'react';

import {
    Text,
    FooterContainer
} from '../components/StyledComponents';

export const Footer = () =>{
    

    return (
        
        <FooterContainer>
        <div class="wrapper">
            <ul>
                <li class="facebook"><a href="https://www.facebook.com/marjaana.tienaho"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
                <li class="instagram"><a href="https://www.instagram.com/marjaana_star/"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                <li class="twitter"><a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
            </ul>
            </div>
        </FooterContainer>

    )
};
