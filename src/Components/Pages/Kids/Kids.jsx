import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredShoes } from '../../../Slices/Men/MenSlice'
import { Main } from '../../Dynamic/Main'

export const Kids = () => {

  const kidsShoes = useSelector((state) => selectFilteredShoes(state,'kids'))

  return (

    <Main shoesCat = {kidsShoes} />
    
  )
}
