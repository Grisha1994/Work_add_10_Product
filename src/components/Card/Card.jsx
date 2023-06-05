import React from 'react'
import s from '../Card/styleCard.module.css'
import { useDispatch } from 'react-redux'

export default function Card({id, name, price, count}) {


  const dispatch = useDispatch();

  return (
    <div className={s.card} >
        <p>{name}</p>
        <div className={s.price}>

          <button onClick={() => dispatch({type: 'MINUS', payload: id})}>-</button>
          <p>{count}</p>
          <button onClick={() => dispatch({type: 'PLUS', payload: id})}>+</button>
          
          <p>{price}</p>
          <button className={s.delete_btn} onClick={() => dispatch({type: 'DELETE', payload: id})}>X</button>
        </div>
    </div>
  )
}
