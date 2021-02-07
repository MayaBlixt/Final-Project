import React, { useState, useEffect } from 'react'
import { useSpring, animated as a } from "react-spring";
import { game } from '../reducers/game';
import { useDispatch } from 'react-redux';

export const Card = ({
  id,
  image,
  board,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes,
}) => {

  const [flipped, set] = useState(false)
  const [score, setScore] = useState(0)
  const dispatch = useDispatch();
  //React Spring for flipping cards
  const {transform, opacity} = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: {mass: 5, tension: 500, friction: 80},
  })

  /*const updateScore = (sentScore) => {
    const newScore = JSON.stringify(sentScore);
    console.log(`Newscore ${newScore}`);
    dispatch(game.actions.setScore({ clicks: newScore}));
    
       
    };*/

  useEffect(() => {
    //flippedCount will increase if: first guess is flipped, second guess is flipped and 
    //Flippedindex will keep track of which cards that have been matched
   
    //setScore(score+1);
      if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
          //If a match set flipped to false  
          setTimeout(() => {
            set(state => !state)
            setFlippedCount(flippedCount + 1)
            setFlippedIndexes([])
    
            
          }, 1000)
        } else if (flippedIndexes[2] === false && id === 0) {
          setFlippedCount(flippedCount + 1)
          setFlippedIndexes([])
          
        }
        console.log(`score ${score}`);
      }, [flippedIndexes])

  const onCardClick = () => {
     
    //Remainder: Returns the integer remainder of dividing the two operands.
      if (!board[id].flipped && flippedCount % 3 === 0) {
        set(state => !state)
        setFlippedCount(flippedCount + 1)
        const newIndexes = [...flippedIndexes]
        newIndexes.push(id)
        setFlippedIndexes(newIndexes)
      } else if (
        flippedCount % 3 === 1 &&
        !board[id].flipped &&
        flippedIndexes.indexOf(id) < 0
      ) {
        set(state => !state)
        setFlippedCount(flippedCount + 1)
        const newIndexes = [...flippedIndexes]
        newIndexes.push(id)
        setFlippedIndexes(newIndexes)
      }
    }
// Use React sprint for flip card animation
  return (
    <div onClick={onCardClick}>
      <a.div
        className="c back"
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      />
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          backgroundImage: `url(${image})` 
        }}
      />
    </div>
  )

}