import React, { useContext } from 'react'
import { AppContext } from '../App'
import RetryButton from './Buttons/RetryButton';

export default function RightSideBar() {
    const { score, setScore, highScore, pokeList } = useContext(AppContext);
    function handleClick() {
        setScore(score + 1);
        console.log(pokeList);
    }
  return (
    <div>
        <h1>
            Score: {score}
        </h1>
        <h2>
            Highest Score: {highScore}
        </h2>
        <RetryButton />
        <button onClick={handleClick}>
            Increase score
        </button>
    </div>
  )
}
