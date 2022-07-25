import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../reducers'


export const Form = () => {

  const [departureInput, setDepartureInput] = useState()
  const [landingInput, setLandingInput] = useState()
  const [timeOfArrivalInput, setTimeOfArrivalInput] = useState()
  const [planeModelInput, setPlaneModelInput] = useState()


  const dispatch = useDispatch()

  return (
    <div>
        <form className='form'>
          <input onChange={(e) => setDepartureInput(e.target.value)} className='form' type="text" placeholder='Place of Departure' required></input>
          <input onChange={(e) => setLandingInput(e.target.value)} className='form' type="text" placeholder='Place of Landing' required></input>
          <input onChange={(e) => setTimeOfArrivalInput(e.target.value)} className='form' type="text" placeholder='Time of Arrival ' required></input>
          <input onChange={(e) => setPlaneModelInput(e.target.value)} className='form' type="text" placeholder='Plane Model' required></input>
          <button  className='form' type='submit' onClick={(e) => {
            e.preventDefault()
          if (departureInput === undefined || landingInput === undefined || timeOfArrivalInput === undefined || planeModelInput === undefined) {
              return
            }
            dispatch(add([departureInput, landingInput, timeOfArrivalInput, planeModelInput]))}}>Submit</button>
        </form>
    </div>
  )
}
