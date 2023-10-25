import React, { useState, useEffect, useContext } from 'react'
import Card from './Card';
import '../styles/BoardStyles.css';
import { AppContext } from '../App';
import Modal from './Modal';
import GameOver from './GameOver';
export default function Board({}) {
    const { setReset, reset, gameStart, pokeList } = useContext(AppContext);
    /*
    let cardArray = [];
    pokeList.forEach((pokemon, index) => {
        cardArray.push(<Card index={index} name={pokemon.name} imgSrc={pokemon.imgSrc}/>);
    })
    */
    let count = 0;
    useEffect(() => {
        if(reset) {
            setReset(false);
        }
    }, [reset]);
    
    function Render () {
        console.log(pokeList.includes(undefined));
        console.log(pokeList);
        return pokeList.map((pokemon, index) => {
            // console.log(index);
            if(pokemon === undefined) {
                console.log(pokemon + ", " + index)
            }
            return (
                <Card key={index} index={index} name={pokemon.name} imgSrc={pokemon.imgSrc}/>
            )
        })
    }

    return (
        <div className='board'>
            
            <Render />
            <Modal content={<GameOver />}/>
        </div>
    )
}
