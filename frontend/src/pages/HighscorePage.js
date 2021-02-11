import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import {
   WIPContainer,
   Button,
   FirstPlaceContainer,
   HeaderScore,
   Header,
   FirstPlaceScore,
   OrderedList,
   List,
   TotalScore,
   H1Title
} from '../components/StyledComponents';
import { fetchHighscore } from 'reducers/game';

export const HighscorePage = () => {
    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHighscore());
	}, []);

	const highscore = useSelector((store) => store.game.highscore);
	const slicedHighscore = highscore.slice(1, 6);
	const firstPlace = highscore[0];


    return (
		<>
		<H1Title> Highscore  </H1Title> 
        <WIPContainer>
			<FirstPlaceContainer>
          
					<HeaderScore style={{ fontSize: 48 }}>1</HeaderScore>

				{firstPlace && (
					<>
						<Header style={{ margin: 5 }}>{firstPlace.name}</Header>
						<FirstPlaceScore>{firstPlace.score}p</FirstPlaceScore>
					</>
				)}
			</FirstPlaceContainer>

			<OrderedList start="2">
				{slicedHighscore.map((score, index) => {
					return (
						<List key={index}>
							{score.name} <TotalScore>{score.score}p</TotalScore>
						</List>
					);
				})}
			</OrderedList>
            <Link to="/"> <Button> Back to main page </Button> </Link>
        </WIPContainer>
		</>
    )
}