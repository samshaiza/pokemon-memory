import React, { useContext } from 'react'
import { AppContext } from '../App'

export default function RightSideBar() {
    const { score, highScore } = useContext(AppContext);
  return (
    <div className='side-bar'>
        <h1>Pokemon Memory Yay!</h1>
        <p>Don't click on the same card twice</p>
        <h1 className='curr-score'>
            Score: {score}
        </h1>
        <h2 className='high-score'>
            Highest Score: {highScore}
        </h2>
    </div>
  )
}
