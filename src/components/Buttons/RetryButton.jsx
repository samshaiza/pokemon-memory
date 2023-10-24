import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { shuffle } from '../../App';
export default function RetryButton() {
    const { setScore, setPokeList, pokeList, setReset } = useContext(AppContext);
    function handleClick() {
        setScore(0);
        let tempArray = shuffle(pokeList);
        setPokeList(tempArray);
        console.log(pokeList);
        setReset(true);
    }
  return (
    <button onClick={handleClick}>
        Retry?
    </button>
  )
}
