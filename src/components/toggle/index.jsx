import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { toggle } from '../../reducers'

export const Toggle = () => {

    const dispatch = useDispatch()
  return (
    <div>
        <label htmlFor="toggle">Toggle Visibility</label>
        <input onClick={() => dispatch(toggle())} id="toggle" type="checkbox"></input>
    </div>
  )
}
