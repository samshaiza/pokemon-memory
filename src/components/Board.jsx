import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';
import Card from './Card';
import '../styles/BoardStyles.css';
export default function Board() {
    const { pokeList } = useContext(AppContext);
    
  return (
    <div className='board'>
        {
            pokeList.map((pokemon, index) => {
                return (
                    <div key={index}>
                        <Card index={index} name={pokemon.name} imgSrc={pokemon.imgSrc}/>
                    </div>
                )
                
            })    
        }
    </div>
  )
}
