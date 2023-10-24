import { useState, useEffect, createContext } from 'react'
import Board from './components/Board'
import { createPokemon } from './data/data'
import LeftSideBar from './components/LeftSideBar';
import './styles/AppStyles.css';
import RightSideBar from './components/RightSideBar';
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

function App() {
  let temp = [];
  const [pokeList, setPokeList] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [reset, setReset] = useState(false); 
  const [memory, setMemory] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false, winGame: false});

  useEffect(() => {
      createPokemon().then((res) => {
        let tempArray = shuffle(res.pokemans);
        setPokeList(tempArray);
      })
      .catch((e) => {
        console.log(e);
      });
      
  }, []);

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
      console.log(memory.length + ", " + pokeList.length);
      if(memory.length === pokeList.length) {
        setGameOver({gameOver: true, winGame: true});
      }
    }
    console.log(memory);
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
        setGameOver
      }}
      >
        <LeftSideBar />
        <Board pokeList={pokeList}/>
        <RightSideBar />
      </AppContext.Provider>
    </div>
    
  )
}

export default App
