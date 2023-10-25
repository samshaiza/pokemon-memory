import React, { useContext } from 'react'
import { AppContext } from '../App';

export default function StartGame() {
    const { setPokemonCount, setGameStart } = useContext(AppContext);
    function handleSubmit(e) {
        e.preventDefault();
        setGameStart(true);
        setPokemonCount(e.target.count.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label className='label'>How many pokemon do you want? supports up to 1000 pokemon!</label>
            <input placeholder='# from 2-1000...' className='input-num' name="count" type="number" min="2" max="1001"/>
            <button type="submit" className='submit'>Enter</button>
        </form>
    </div>
  )
}
