import { useState, useEffect, createContext } from 'react'
import Board from './components/Board'
import { createPokemon } from './data/data'

export const AppContext = createContext();

function App() {
  let temp = [];
  const [pokeList, setPokeList] = useState([]);
  useEffect(() => {
      createPokemon().then((res) => {
        setPokeList(res.pokemans)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <AppContext.Provider value={{
      pokeList
    }}
    >
      <Board />
    </AppContext.Provider>
  )
}

export default App
