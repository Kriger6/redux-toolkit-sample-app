import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ListItems } from '../list_items'
import {v4 as uuidv4} from 'uuid'

export const List = () => {

  const placeOfDeparture = useSelector(state => state.departure.values)

  useEffect(() => {
    console.log(placeOfDeparture);
  }, [placeOfDeparture])

  const listMap = placeOfDeparture.map((x, index) => {
    return <ListItems i={index} key={uuidv4()} departure={x[0]} landing={x[1]} time={x[2]} model={x[3]} /> })
  

  return (
    <div>
      <h1>{listMap}</h1>
    </div>
  )
}
