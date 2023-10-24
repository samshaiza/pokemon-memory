import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { shuffle } from '../../App';
export default function RetryButton() {
    const { setScore, setPokeList, pokeList, setReset, setGameOver, setMemory } = useContext(AppContext);
    function handleClick() {
        setScore(0);
        let tempArray = shuffle(pokeList);
        setPokeList(tempArray);
        setReset(true);
        setGameOver({gameOver: false, winGame: false});
        setMemory([]);
    }
  return (
    <button className='restart-btn' onClick={handleClick}>
        Retry?
    </button>
  )
}
