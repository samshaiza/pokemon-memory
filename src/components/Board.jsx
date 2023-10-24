import React, { useState, useEffect, useContext } from 'react'
import Card from './Card';
import '../styles/BoardStyles.css';
import { AppContext } from '../App';

export default function Board({pokeList}) {
    const { setReset, reset } = useContext(AppContext);
    let cardArray = [];
    pokeList.forEach((pokemon, index) => {
        cardArray.push(<Card index={index} name={pokemon.name} imgSrc={pokemon.imgSrc}/>);
    })

    useEffect(() => {
        if(reset) {
            setReset(false);
        }
    }, [reset]);
    
    function Render () {
        console.log('this is happening!');
        console.log(cardArray);
        return pokeList.map((pokemon, index) => {
            return (
                <Card key={index} index={index} name={pokemon.name} imgSrc={pokemon.imgSrc}/>
            )
        })
    }

    return (
        <div className='board'>
            <Render />
        </div>
    )
}
