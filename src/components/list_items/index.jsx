import React from 'react'
import { remove } from '../../reducers';
import { useDispatch } from 'react-redux';

export const ListItems = (props) => {

    const dispatch = useDispatch()
    console.log(props);
  return (
    <div>
        <h1>{props.departure}</h1>
        <h2>{props.landing}</h2>
        <h3>{props.time}</h3>
        <h3>{props.model}</h3>
        <button onClick={() => dispatch(remove([props.i, 1]))}>Delete</button>
    </div>
  )
}
