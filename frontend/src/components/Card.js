import React, { useState, useEffect } from 'react'
import styled from 'styled-components' 
import { useSpring, animated as a } from "react-spring";


export const Card = ({
  id,
  color,
  board,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes,
}) => {

  const [flipped, set] = useState(false)
  //React Spring for flipping cards
  const {transform, opacity} = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: {mass: 5, tension: 500, friction: 80},
  })

  useEffect(() => {
    //flippedCount will increase if: first guess is flipped, second guess is flipped and 
    //Flippedindex will keep track of which cards that have been matched
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
          backgroundImage: `url(${color})` 
        }}
      />
    </div>
  )

}