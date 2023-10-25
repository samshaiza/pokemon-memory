import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { shuffle } from '../../App';
export default function RetryButton() {
    const { setScore, setPokeList, setReset, setGameOver, setMemory, pokeList, setGameStart } = useContext(AppContext);
    function restartBtn() {
      setScore(0);
      let tempArray = shuffle(pokeList);
      setPokeList(tempArray);
      setReset(true);
      setGameOver({gameOver: false, winGame: false});
      setMemory([]);
    }
    function endGame() {
      setScore(0);
      let tempArray = shuffle(pokeList);
      setPokeList(tempArray);
      setReset(true);
      setGameOver({gameOver: false, winGame: false});
      setMemory([]);
      setGameStart(false);
    }
  return (
    <div>
      <button className='restart-btn' onClick={restartBtn}>
        Retry?
      </button>
      <button className='end-game' onClick={endGame}>
        End game?
      </button>
    </div>
    
  )
}
