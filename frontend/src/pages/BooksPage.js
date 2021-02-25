import React from 'react';

import book3 from "../assets/Book_3.png";
import book4 from "../assets/Book_4.png";
import book5 from "../assets/Book_5.png";
import { BackButton } from 'components/BackButton';
import {
    H1Title,
    Header,
    EndContainer,
    BooksPageContainer
} from '../components/StyledComponents';

export const BooksPage = () => {

    return (
        <BooksPageContainer>
            <Header> 
                <H1Title> August & Clowen book collection </H1Title> 
            </Header>
        <div class="container">
        <a target="_blank" rel="noopener noreferrer" href="https://www.adlibris.com/se/bok/august-och-clownen-moter-jons-9789198338027">
            <div class="box">
                <div class= "imgBx">
                    <img src={book3} alt="August clownen book"></img>
                </div>
                <div class="content">
                    <h2>August och Clownen möter Jöns (2017) </h2>
                </div>
            </div>   
            </a> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.adlibris.com/se/bok/august-och-clownen-fyller-ar-9789198338041">
            <div class="box">
            
                <div class= "imgBx">
                    <img src={book4} alt="August clownen book"></img>
                </div>
                <div class="content">
                    <h2>August och Clownen fyller år (2017)</h2>
                </div>
            </div>  
            </a>  
            <a target="_blank" rel="noopener noreferrer" href="https://www.adlibris.com/se/bok/august-och-clownen-i-manegen-9789198338058">
            <div class="box">
                <div class= "imgBx">
                    <img src={book5} alt="August clownen book"></img>
                </div>
                <div class="content">
                    <h2>August och Clownen i manegen (2018)</h2>
                </div>
            </div>  
            </a>  
        </div>  
             <BackButton/> 
        </BooksPageContainer>
    );
}