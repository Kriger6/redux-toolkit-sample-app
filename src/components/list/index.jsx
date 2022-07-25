import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListItems } from '../list_items'
import { v4 as uuidv4 } from 'uuid'
import { select, edit, remove } from '../../reducers'
import { useState } from 'react'

export const List = () => {

  const dispatch = useDispatch()

  const [departureEdit, setDeparturEdit] = useState()
  const [landingEdit, setLandingdit] = useState()
  const [timeOfArrivalEdit, setTimeOfArrivaldit] = useState()
  const [planeModelEdit, setPlaneModeldit] = useState()


  const placeOfDeparture = useSelector(state => state.departure.values)
  const toggle = useSelector(state => state.departure.toggle)
  const selected = useSelector(state => state.departure.selected)

  const listMap = placeOfDeparture.map((x, index) => {
    return <ListItems i={index} key={uuidv4()} departure={x[0]} landing={x[1]} time={x[2]} model={x[3]} />
  })


  return (
    <div>
      {selected !== null &&
        <div className='popUpBox'>
          <div className='box'>
            <form className='form'>
              <input onChange={(e) => setDeparturEdit(e.target.value)} className='form' type="text" placeholder='Place of Departure' required></input>
              <input onChange={(e) => setLandingdit(e.target.value)} className='form' type="text" placeholder='Place of Landing' required></input>
              <input onChange={(e) => setTimeOfArrivaldit(e.target.value)} className='form' type="text" placeholder='Time of Arrival ' required></input>
              <input onChange={(e) => setPlaneModeldit(e.target.value)} className='form' type="text" placeholder='Plane Model' required></input>
              <button className='form' type='submit' onClick={(e) => {
                e.preventDefault()
                dispatch(edit([departureEdit, landingEdit, timeOfArrivalEdit, planeModelEdit]))
              }}>Edit</button>
            </form>
            <button onClick={() => {
              dispatch(select(null))
            }}>Cancel</button>
            <button onClick={() => {
              dispatch(remove([selected, 1]))
              dispatch(select(null))
            }}>Delete</button>
          </div>
        </div>}
      {toggle === true && listMap}
    </div>
  )
}
