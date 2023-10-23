import React from 'react'
import '../styles/CardStyles.css'
export default function Card(props) {
  return (
    <div key={props.index} className='card'>
        <img src={props.imgSrc} />
        <p className='name'>{props.name}</p>
    </div>
                    
  )
}
