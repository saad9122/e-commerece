import React from 'react'
import { useSelector } from 'react-redux'
import { Main } from '../../Dynamic/Main'
import { selectFilteredShoes } from '../../../Slices/Men/MenSlice'

export const Favorite = () => {

  const favorite = useSelector ((state) => selectFilteredShoes(state,'favorite'))
  return (
    <div>
      <button onClick={() => console.log(favorite)}>show Favorite</button>

      <Main shoesCat = {favorite} section = {'favorite'}/>
        
    </div>
  )
}
