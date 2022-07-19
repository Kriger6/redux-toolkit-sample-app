import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { toggle } from '../../reducers'

export const Toggle = () => {

    const dispatch = useDispatch()
  return (
    <div>
        <label onClick={() => dispatch(toggle())} htmlFor="toggle">Toggle Visibility</label>
        <input id="toggle" type="checkbox"></input>
    </div>
  )
}
