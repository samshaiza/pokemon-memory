import React, { useState, useEffect, useContext } from 'react'
import Card from './Card';
import '../styles/BoardStyles.css';
import { AppContext } from '../App';
import Modal from './Modal';

export default function Board({pokeList}) {
    const { setReset, reset, gameOver } = useContext(AppContext);
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
        return pokeList.map((pokemon, index) => {
            return (
                <Card key={index} index={index} name={pokemon.name} imgSrc={pokemon.imgSrc}/>
            )
        })
    }

    return (
        <div className='board'>
            <Render />
            <Modal />
        </div>
    )
}
