import React from 'react';

import book1 from "../assets/Book_1.png";
import book2 from "../assets/Book_2.png";
import book3 from "../assets/Book_3.png";
import book4 from "../assets/Book_4.png";
import book5 from "../assets/Book_5.png";
import { BackButton } from 'components/BackButton';
import {
    Title,
    Text,
} from '../components/StyledComponents';

export const BooksPage = () => {

    return (
        <> 
        <Title> August & Clowen book collection </Title> 
        <div class="container">
        <Text>Get to know all of the five books of the August & clowen series. Hover over the books to get more info. </Text>
            <div class="box">
                <div class= "imgBx">
                    <img src={book1}></img>
                </div>
                <div class="content">
                    <h2>Här kommer August och Clownen<span>(Bok 1)</span></h2>
                </div>
            </div> 
            <div class="box">
                <div class= "imgBx">
                    <img src={book2}></img>
                </div>
                <div class="content">
                    <h2>August and Clownen<span>Second book </span></h2>
                </div>
            </div> 
            <div class="box">
                <div class= "imgBx">
                    <img src={book3}></img>
                </div>
                <div class="content">
                    <h2>August and Clownen</h2>
                    <p>Third book </p>
                </div>
            </div>     
            <div class="box">
                <div class= "imgBx">
                    <img src={book4}></img>
                </div>
                <div class="content">
                    <h2>August and Clownen<span>Third book </span></h2>
                </div>
            </div>     
            <div class="box">
                <div class= "imgBx">
                    <img src={book5}></img>
                </div>
                <div class="content">
                    <h2>August and Clownen<span>Third book </span></h2>
                </div>
            </div>     
        </div>  
             <BackButton/> 
        </>
    );
}