import React, { useContext } from 'react'
import '../styles/CardStyles.css'
import { AppContext } from '../App';

export default function Card(props) {

    const { handleCardSelect } = useContext(AppContext);

  return (
    <div key={props.index} className='card' onClick={()=>{handleCardSelect(props.name)}}>
        <img src={props.imgSrc} />
        <p className='name'>{props.name}</p>
    </div>
                    
  )
}
