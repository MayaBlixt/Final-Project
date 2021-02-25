import React from 'react';

import {
    FooterContainer
} from '../components/StyledComponents';

export const Footer = () =>{
    

    return (
        
        <FooterContainer>
        <div class="wrapper">
            <ul>
                <li class="facebook"><a aria-label ="facebook"  href="https://www.facebook.com/marjaana.tienaho"><i class="fa fa-facebook fa-2x" ></i></a></li>
                <li class="instagram"><a aria-label ="instagram"  href="https://www.instagram.com/marjaana_star/"><i class="fa fa-instagram fa-2x"></i></a></li>
                <li class="twitter"><a aria-label ="twitter" href="https://www.twitter.com"><i class="fa fa-twitter fa-2x"></i></a></li>
            </ul>
            </div>
        </FooterContainer>

    )
};
