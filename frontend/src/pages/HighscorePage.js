
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { fetchHighscore } from 'reducers/game';

import {
   WIPContainer,
   OrderedList,
   List,
   TotalScore,
   H2Title,
   BookImage
} from '../components/StyledComponents';
import { BackButton } from 'components/BackButton';
import highscore_img from "../assets/First_price.png";


export const HighscorePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHighscore());
	}, [dispatch]);

	const highscore = useSelector((store) => store.game.highscore);
	const slicedHighscore = highscore.slice(0, 6);



	return (
		<>
		<WIPContainer>
			<H2Title> Game highscore</H2Title>
			<BookImage src={highscore_img} alt="Bok image"/>
			<OrderedList start="1">
				{slicedHighscore.map((score, index) => {
					return (
						<List key={index}>
							{score.name} <TotalScore>{score.score} clicks</TotalScore>
						</List>
					);
				})}
			</OrderedList>
			<BackButton/>
		</WIPContainer>
		</>
	);
};
