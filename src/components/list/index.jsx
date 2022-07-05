import React from 'react'
import { useSelector } from 'react-redux'

export const List = () => {

  const placeOfDeparture = useSelector(state => state.departure.values)

  return (
    <div>
      <h1>{placeOfDeparture}</h1>
    </div>
  )
}
