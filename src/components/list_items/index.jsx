import React from 'react'
import { select } from '../../reducers';
import { useDispatch } from 'react-redux';

export const ListItems = (props) => {

  const dispatch = useDispatch()

  const selectCard = () => {
    dispatch(select(props.i))
  }
    
  return (
    <div onClick={() => selectCard()}>
        <h1>{props.departure}</h1>
        <h2>{props.landing}</h2>
        <h3>{props.time}</h3>
        <h3>{props.model}</h3>
    </div>
  )
}
