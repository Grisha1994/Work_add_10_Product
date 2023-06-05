import React from 'react'
import s from '../AddCardForm/styleAddCardForm.module.css'
import { useDispatch } from 'react-redux';

export default function AddCardForm() {

    const dispatch = useDispatch();

    const onSubmit = (event) =>{
        event.preventDefault();

        const {name, price, count = 0} = event.target;
        
        const newProduct = {           
            name: name.value, 
            count: count,
            price: price.value,
            id: Date.now()
        }
        dispatch({type: 'ADD', payload: newProduct})
        event.target.reset();
    }

  return (
    <div className={s.wrapper} >
        <form className={s.product} onSubmit={onSubmit}>
            <input type="title" placeholder='Название' name='name'/>
            <input type="number" placeholder='Цена' name='price'/>
            <button type='submit'>добавить</button>
        </form>
    </div>
  )
}
