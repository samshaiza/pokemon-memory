import { useState, useEffect, createContext } from 'react'
import Board from './components/Board'
import { createPokemon } from './data/data'
import './styles/AppStyles.css';
import RightSideBar from './components/RightSideBar';
import StartGame from './components/StartGame';
import Modal from './components/Modal.jsx';

export const AppContext = createContext();

export function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while(currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function fillRandomArray(num, max) {
  return Array.from({length: num}, () => Math.floor(Math.random() * (999 - 1)) + 1);
}

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [reset, setReset] = useState(false); 
  const [memory, setMemory] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false, winGame: false});
  const [pokemonCount, setPokemonCount] = useState();
  const [allPokemonEver, setAllPokemonEver] = useState(new Map());

  const [gameStart, setGameStart] = useState(false);

  let tempArray;
  let tempArray2;

  useEffect(() => {
      createPokemon().then((res) => {
        setAllPokemonEver(res.pokemans);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    tempArray = fillRandomArray(pokemonCount, pokemonCount);
    
    tempArray2 = tempArray.map(value => {
        return allPokemonEver.get(value+1);
    });

    setPokeList(tempArray2);
  }, [pokemonCount])

  useEffect(() => {
    setHighScore(Math.max(highScore, score));
  }, [score]);

  function handleCardSelect(card) {
    if(gameOver.gameOver) {
      return;
    }
    if(memory.includes(card)) {
      setGameOver({gameOver: true, winGame: false});
    } else {
      memory.push(card);
      setScore(score + 1);
      let tempArray = shuffle(pokeList);
      setPokeList(tempArray);
      if(memory.length === pokeList.length) {
        setGameOver({gameOver: true, winGame: true});
      }
    }
  }

  return (
    <div className='main-container'>
      <AppContext.Provider value={{
        pokeList,
        setPokeList,
        score,
        setScore,
        highScore,
        setHighScore,
        reset,
        setReset,
        memory,
        setMemory,
        handleCardSelect,
        gameOver,
        setGameOver,
        pokemonCount,
        setPokemonCount,
        gameStart,
        setGameStart
      }}
      >
        {gameStart ? <Board pokeList={pokeList}/> : <Modal content={<StartGame />}/>}
        {gameStart && <RightSideBar />}
      </AppContext.Provider>
    </div>
    
  )
}

export default App
