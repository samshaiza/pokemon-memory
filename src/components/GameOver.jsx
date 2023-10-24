import React, { useContext } from 'react'
import RetryButton from './Buttons/RetryButton';
import { AppContext } from '../App';

export default function GameOver({onClose}) {
    const { gameOver, setGameOver } = useContext(AppContext);

  return (
    <>
        {gameOver.gameOver ?
        <div>
            
            {gameOver.winGame ? <h2>Congrats you won!</h2> : <h2>You stinkky poop!</h2>}
            <RetryButton onClick={onClose}/>
        </div>
         : 
        <></>}
    </>
  )
}
