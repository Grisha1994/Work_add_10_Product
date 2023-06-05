import React from 'react'
import Card from '../Card/Card'
import s from '../CardsContainer/styleCardsContainer.module.css'
import { useSelector } from 'react-redux';


export default function CardsContainer() {

  const cards = useSelector(state => state);

  return (
    <div className={s.container}>
        {
            cards.map(el => <Card key={el.id} {...el}/>)
        }
    </div>
  )
}
